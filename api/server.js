import { Readable } from "node:stream";

async function loadServerEntry() {
  const mod = await import("../dist/server/server.js");
  return mod.default;
}

function appendRequestHeaders(sourceHeaders) {
  const headers = new Headers();

  for (const [key, value] of Object.entries(sourceHeaders)) {
    if (value === undefined) continue;

    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(key, item);
      }
      continue;
    }

    headers.set(key, value);
  }

  return headers;
}

function getHeaderValue(value, fallback) {
  if (Array.isArray(value)) return value[0] ?? fallback;
  return value ?? fallback;
}

function toWebRequest(req) {
  const protocol = getHeaderValue(req.headers["x-forwarded-proto"], "https");
  const host = getHeaderValue(req.headers["x-forwarded-host"], req.headers.host);
  const url = new URL(req.url || "/", `${protocol}://${host}`);
  const headers = appendRequestHeaders(req.headers);

  if (req.method === "GET" || req.method === "HEAD") {
    return new Request(url, {
      method: req.method,
      headers,
    });
  }

  return new Request(url, {
    method: req.method,
    headers,
    body: Readable.toWeb(req),
    duplex: "half",
  });
}

function applyResponseHeaders(res, headers) {
  headers.forEach((value, key) => {
    if (key.toLowerCase() === "set-cookie") return;
    res.setHeader(key, value);
  });

  if (typeof headers.getSetCookie === "function") {
    const cookies = headers.getSetCookie();
    if (cookies.length > 0) {
      res.setHeader("set-cookie", cookies);
    }
    return;
  }

  const cookie = headers.get("set-cookie");
  if (cookie) {
    res.setHeader("set-cookie", cookie);
  }
}

async function writeResponse(res, response) {
  res.statusCode = response.status;

  if (response.statusText) {
    res.statusMessage = response.statusText;
  }

  applyResponseHeaders(res, response.headers);

  if (!response.body) {
    res.end();
    return;
  }

  await new Promise((resolve, reject) => {
    const stream = Readable.fromWeb(response.body);
    stream.on("error", reject);
    res.on("error", reject);
    res.on("finish", resolve);
    stream.pipe(res);
  });
}

export default async function handler(req, res) {
  try {
    const server = await loadServerEntry();
    const request = toWebRequest(req);
    const response = await server.fetch(request);
    await writeResponse(res, response);
  } catch (error) {
    console.error("Vercel SSR handler failed", error);

    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
    }

    res.end("Internal Server Error");
  }
}
