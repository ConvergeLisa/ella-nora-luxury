import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-normal text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-light text-foreground">Page not found</h2>
        <p className="mt-2 text-sm font-light text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-[12px] bg-primary px-4 py-3 text-sm font-light tracking-[0.12em] text-primary-foreground uppercase"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ella Nora Beauty & Aesthetics" },
      {
        name: "description",
        content: "Quiet-luxury beauty studio in Birch Acres, Kempton Park.",
      },
      { name: "author", content: "Ella Nora Beauty & Aesthetics" },
      { property: "og:title", content: "Ella Nora Beauty & Aesthetics" },
      {
        property: "og:description",
        content: "Quiet-luxury beauty studio in Birch Acres, Kempton Park.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Ella Nora Beauty & Aesthetics" },
      {
        name: "twitter:description",
        content: "Quiet-luxury beauty studio in Birch Acres, Kempton Park.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Playfair+Display:wght@400;500&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
