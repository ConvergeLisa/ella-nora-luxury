import { createFileRoute } from "@tanstack/react-router";
import gallerySoftGlam from "@/assets/gallery-soft-glam.png";
import modelHero from "@/assets/modelhero.png";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ella Nora Beauty & Aesthetics | Quiet Luxury Beauty Studio" },
      {
        name: "description",
        content:
          "A premium beauty studio in Birch Acres, Kempton Park offering calm, personalised treatments for lashes, brows, skincare and beauty essentials.",
      },
      { property: "og:title", content: "Ella Nora Beauty & Aesthetics" },
      {
        property: "og:description",
        content:
          "Quiet-luxury beauty in Kempton Park, designed around confidence, care, and detail.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const SETMORE_URL = "https://ellanorabeauty.setmore.com/";
const WHATSAPP_URL = "https://wa.me/27648377293";
const ADDRESS = "12 Edelvalk Cres, Birch Acres, Kempton Park";
const EMAIL = "maphuti.summorepnp@gmail.com";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

const trustItems = [
  "4.7 Google Rating",
  "Birch Acres, Kempton Park",
  "Personalised treatments",
  "Easy online booking",
] as const;

const sanctuaryDetails = [
  "Calm pacing",
  "Soft studio atmosphere",
  "Personal care",
] as const;

const services = [
  {
    name: "Lashes",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up beauty portrait with soft eye detail",
    shortDescription:
      "Soft, polished lash sets tailored to your eye shape and the finish you actually want to wear.",
    detail:
      "From classic definition to fuller hybrid finishes, each appointment is customised for balance, comfort, and lasting elegance.",
    duration: "60-120 min",
    price: "From R350",
  },
  {
    name: "Skincare",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury skincare products and glowing skin detail",
    shortDescription:
      "Glow-focused facials and skin rituals designed to restore clarity, softness, and confidence.",
    detail:
      "Expect a calm, considered treatment pace with product choices and finishing steps adapted to your skin goals and comfort.",
    duration: "60-90 min",
    price: "From R420",
  },
  {
    name: "Brows",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
    alt: "Beauty portrait with refined brow detail",
    shortDescription:
      "Structured shaping, tinting, and brow refinement for an effortless, polished frame.",
    detail:
      "Whether you prefer naturally defined brows or a softly lifted finish, treatments are shaped around your features rather than trends.",
    duration: "30-75 min",
    price: "From R180",
  },
  {
    name: "Nails & Beauty Treatments",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant manicure detail in warm natural light",
    shortDescription:
      "Finishing touches that feel immaculate, refined, and easy to maintain between visits.",
    detail:
      "Choose from manicure, polish, and beauty maintenance essentials delivered with a premium standard of prep, hygiene, and detail.",
    duration: "45-90 min",
    price: "From R220",
  },
] as const;

const experienceItems = [
  {
    title: "Comfort",
    visualTitle: "Soft Arrival",
    visualNote: "Warm linens, gentle light, and time to settle in",
    visualClassName: "experience-visual-comfort",
    copy:
      "Soft textures, unhurried appointments, and a studio rhythm designed to help you settle in immediately.",
  },
  {
    title: "Calm",
    visualTitle: "Quiet Ritual",
    visualNote: "A slower pace shaped around warmth and ease",
    visualClassName: "experience-visual-calm",
    copy:
      "Every detail is chosen to feel serene, warm, and quietly elevated rather than busy or clinical.",
  },
  {
    title: "Privacy",
    visualTitle: "Personal Space",
    visualNote: "One-to-one attention with a beautifully considered touch",
    visualClassName: "experience-visual-privacy",
    copy:
      "One-to-one attention, thoughtful pacing, and an environment where care feels personal from arrival to finish.",
  },
] as const;

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=900&q=80",
    alt: "Editorial beauty product and skin texture detail",
    title: "Skin Ritual Detail",
  },
  {
    image: gallerySoftGlam,
    alt: "Soft glam beauty portrait with polished makeup detail",
    title: "Soft Glam Finish",
  },
  {
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of brow and lash detail",
    title: "Brow & Lash Precision",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    alt: "Manicure detail with neutral tones",
    title: "Beauty Finishing Touches",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    alt: "Luxury studio interior vignette",
    title: "Studio Atmosphere",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up skincare glow result",
    title: "Healthy, Luminous Skin",
  },
] as const;

const reviews = [
  {
    initials: "TN",
    copy:
      "The space feels so calm and every detail is handled with care. My lashes looked soft, clean and beautifully done.",
  },
  {
    initials: "LM",
    copy:
      "Booking was easy, the treatment felt personalised, and the whole experience was polished without ever feeling rushed.",
  },
  {
    initials: "SK",
    copy:
      "A beautiful studio with a very gentle touch. I left feeling confident, refreshed and already planning my next visit.",
  },
] as const;

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ellanorabeauty", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100090546100622", icon: Facebook },
] as const;

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(services[0].name);
  const [bookingContext, setBookingContext] = useState("General Appointment");
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBookingOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = bookingOpen ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [bookingOpen]);

  const openBooking = (context: string) => {
    setBookingContext(context);
    setBookingOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-background text-foreground antialiased">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-black/5 bg-background/92 shadow-[0_20px_60px_rgba(34,34,34,0.08)] backdrop-blur-xl"
            : "bg-white/10 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <a href="#top" className="flex items-end gap-3" aria-label="Ella Nora home">
            <div>
              <div className="font-display text-[1.65rem] leading-none tracking-[0.02em] text-[#333333] md:text-[2rem]">
                Ella Nora
              </div>
              <div className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] text-[#7c746d]">
                Beauty &amp; Aesthetics
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link gold-hover text-[0.72rem] uppercase tracking-[0.22em] text-[#4a4a4a]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking("General Appointment")}
              className="hidden rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-5 py-3 text-[0.74rem] uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(26,22,18,0.12)] lg:inline-flex"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="inline-flex rounded-[12px] border border-black/10 bg-white/50 p-3 text-[#333333] lg:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-t border-black/5 bg-background lg:hidden ${
            mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-500`}
        >
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-5 px-5 py-6 md:px-8" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="gold-hover text-sm uppercase tracking-[0.16em] text-[#4a4a4a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => openBooking("General Appointment")}
              className="mt-2 inline-flex w-full items-center justify-center rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-5 py-3.5 text-[0.74rem] uppercase tracking-[0.18em] text-white"
            >
              Book Now
            </button>
          </nav>
        </div>
      </header>

      <main className="pb-28 md:pb-0">
        <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
          <img
            src={modelHero}
            alt="Editorial portrait with rich skin tones, natural texture, and refined luxury beauty styling"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,22,0.24)_0%,rgba(31,26,22,0.18)_38%,rgba(31,26,22,0.62)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,249,246,0.24),transparent_35%)]" />

          <div className="relative mx-auto flex w-full max-w-[1200px] px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:px-10">
            <div className="max-w-[640px] text-white">
              <p className="fade-up text-[0.72rem] uppercase tracking-[0.24em] text-white/78">
                Quiet luxury beauty in Birch Acres
              </p>
              <h1 className="fade-up fade-up-delay-1 mt-5 font-display text-[3rem] leading-[0.95] tracking-[-0.03em] sm:text-[4rem] md:text-[5.2rem]">
                Beauty, <span className="accent-word-light">redefined</span> for you.
              </h1>
              <p className="fade-up fade-up-delay-2 mt-6 max-w-[36rem] text-base font-light leading-8 text-white/82 md:text-lg">
                A calm, elevated beauty experience designed around confidence, care, and detail.
              </p>

              <div className="fade-up fade-up-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openBooking("General Appointment")}
                  className="inline-flex items-center justify-center rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-6 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
                >
                  Book Appointment
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#D4AF37]/45 bg-white/8 px-6 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-[#f4df94] hover:border-[#f4df94]/70 hover:bg-white/12"
                >
                  WhatsApp Concierge
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-black/5 bg-[#f7f1eb]">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-0 px-5 md:grid-cols-4 md:px-8 lg:px-10">
            {trustItems.map((item) => (
              <div
                key={item}
                className="border-black/5 px-2 py-5 text-center text-[0.72rem] uppercase tracking-[0.18em] text-[#5f5852] odd:border-r even:border-transparent md:border-r md:last:border-r-0"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf9f6_0%,#fbf5ef_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,230,222,0.58),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_22%)]" />
          <div className="relative mx-auto grid max-w-[1200px] gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8 lg:gap-16 lg:px-10">
            <div>
              <p className="section-label">Philosophy</p>
              <h2 className="mt-4 max-w-[12ch] font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                Beauty guided by care, <span className="accent-word">detail</span>, and intention.
              </h2>
            </div>

            <div className="space-y-6 text-[1rem] font-light leading-8 text-[#4A4A4A]">
              <p>
                Ella Nora is designed for women who want a polished result without the noise. From
                the first welcome, the pace is softer, the energy is calmer, and the focus stays on
                helping you feel quietly taken care of.
              </p>
              <p>
                The intention is never to overwhelm. It is to create a beauty experience that feels
                restorative as well as refined, with technique, atmosphere, and detail working
                together in a way that feels deeply personal.
              </p>

              <div className="sanctuary-panel mt-10 p-6 md:p-8">
                <p className="section-label">A Softer Pace</p>
                <p className="mt-5 font-display text-[1.7rem] leading-[1.25] tracking-[-0.02em] text-[#333333] md:text-[2.1rem]">
                  The goal is not only that you leave looking polished. It is that you leave
                  feeling restored, held, and beautifully at ease.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {sanctuaryDetails.map((detail) => (
                    <span
                      key={detail}
                      className="sanctuary-chip px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em]"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf7f2_0%,#fffdfa_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,230,222,0.45),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.06),transparent_25%)]" />
          <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
            <div className="max-w-[700px]">
              <p className="section-label">Featured Services</p>
              <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                A treatment menu that feels tailored, <span className="accent-word">polished</span>, and easy to trust.
              </h2>
              <p className="mt-5 max-w-[42rem] text-base font-light leading-8 text-[#4A4A4A]">
                Explore the treatments clients return for most often, whether you want a quiet
                refresh, a beauty ritual before an occasion, or a little more glow in your regular
                routine.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((service) => {
                const isOpen = activeService === service.name;

                return (
                  <article
                    key={service.name}
                    className="quiet-card overflow-hidden rounded-[12px] border border-black/6 bg-[#fffdfa] shadow-[0_30px_70px_rgba(28,24,21,0.06)]"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-[2rem] leading-none tracking-[-0.02em] text-[#333333]">
                          {service.name}
                        </h3>
                        <span className="rounded-full border border-[#D4AF37]/18 bg-[#f7efe8] px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#8b7a67]">
                          Signature
                        </span>
                      </div>

                      <p className="mt-4 text-[0.98rem] font-light leading-8 text-[#4A4A4A]">
                        {service.shortDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-5">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveService((current) => (current === service.name ? null : service.name))
                          }
                          className="gold-hover border-b border-[#D4AF37]/22 pb-1 text-[0.74rem] uppercase tracking-[0.18em] text-[#8b6f2e]"
                          aria-expanded={isOpen}
                        >
                          Learn More
                        </button>
                        <button
                          type="button"
                          onClick={() => openBooking(service.name)}
                          className="inline-flex items-center justify-center rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-5 py-3 text-[0.74rem] uppercase tracking-[0.18em] text-white"
                        >
                          Book This Treatment
                        </button>
                      </div>

                      <div className="micro-divider mt-5" />
                      <div
                        className={`service-drawer ${
                          isOpen ? "service-drawer-open" : ""
                        } overflow-hidden pt-0`}
                      >
                        <div className="space-y-4 pt-5">
                          <p className="text-sm font-light leading-7 text-[#4A4A4A]">
                            {service.detail}
                          </p>
                          <div className="grid gap-3 text-[0.78rem] uppercase tracking-[0.16em] text-[#7c746d] sm:grid-cols-2">
                            <div className="rounded-[12px] bg-[#f7f1eb] px-4 py-3">
                              Duration: {service.duration}
                            </div>
                            <div className="rounded-[12px] bg-[#f7f1eb] px-4 py-3">
                              Starting Price: {service.price}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => openBooking(service.name)}
                            className="gold-hover inline-flex items-center gap-2 text-[0.74rem] uppercase tracking-[0.18em] text-[#333333]"
                          >
                            Book {service.name}
                            <ArrowUpRight className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#f9f3ed_0%,#f5eee7_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,245,235,0.65),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_24%)]" />
          <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
            <div className="max-w-[760px]">
              <p className="section-label">Experience</p>
              <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                The Ella Nora <span className="accent-word">Experience</span>
              </h2>
              <p className="mt-5 text-base font-light leading-8 text-[#4A4A4A]">
                Step into a sanctuary designed for your restoration, where beauty feels warm,
                private, and deeply considered from the moment you arrive.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {experienceItems.map((item) => (
                <article
                  key={item.title}
                  className="quiet-card overflow-hidden rounded-[12px] border border-black/6 bg-[#fffdfa] shadow-[0_30px_70px_rgba(28,24,21,0.05)]"
                >
                  <div className={`experience-visual ${item.visualClassName}`}>
                    <div>
                      <div className="experience-visual-note text-[0.68rem] uppercase tracking-[0.2em]">
                        {item.visualNote}
                      </div>
                      <div className="experience-visual-title mt-3 font-display text-[2rem] leading-none tracking-[-0.02em]">
                        {item.visualTitle}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[1.9rem] leading-none text-[#333333]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[0.98rem] font-light leading-8 text-[#4A4A4A]">
                      {item.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#fcf7f2_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,230,222,0.42),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.05),transparent_22%)]" />
          <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
            <div className="max-w-[760px]">
              <p className="section-label">Gallery &amp; Results</p>
              <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                A considered look at treatment <span className="accent-word">detail</span>, studio calm, and finishing touches.
              </h2>
              <p className="mt-5 max-w-[40rem] text-base font-light leading-8 text-[#4A4A4A]">
                A glimpse of glow, texture, refined finishing touches, and the softer atmosphere
                that surrounds each appointment.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {galleryItems.map((item, index) => (
                <figure
                  key={item.title}
                  className={`quiet-card overflow-hidden rounded-[18px] border border-[#D4AF37]/10 bg-[#f3ece5] ${
                    index === 0 || index === 4 ? "md:col-span-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`w-full object-cover ${
                      index === 0 || index === 4 ? "aspect-[16/10]" : "aspect-[4/5]"
                    }`}
                    loading="lazy"
                  />
                  <figcaption className="px-4 py-4 text-[0.72rem] uppercase tracking-[0.16em] text-[#6f6760]">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="reviews"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf8f3_0%,#fffdfa_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,230,222,0.34),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_25%)]" />
          <div className="relative mx-auto max-w-[1200px] px-5 md:px-8 lg:px-10">
            <div className="max-w-[760px]">
              <p className="section-label">Reviews</p>
              <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                Trust built through small details done <span className="accent-word">beautifully</span> well.
              </h2>
              <p className="mt-5 max-w-[40rem] text-base font-light leading-8 text-[#4A4A4A]">
                Clients return for the result, and for the feeling of being looked after with care,
                warmth, and consistency.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.initials}
                  className="quiet-card rounded-[12px] border border-black/6 bg-[#fffdfa] p-6 shadow-[0_24px_60px_rgba(28,24,21,0.05)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-[#f7efe8] text-[0.85rem] uppercase tracking-[0.14em] text-[#333333]">
                      {review.initials}
                    </div>
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-[0.98rem] font-light leading-8 text-[#4A4A4A]">
                    {review.copy}
                  </p>
                  <div className="mt-6 text-[0.72rem] uppercase tracking-[0.18em] text-[#8b7a67]">
                    Google Review
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f1eb_0%,#fbf6f1_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,230,222,0.5),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.06),transparent_24%)]" />
          <div className="relative mx-auto max-w-[980px] px-5 md:px-8 lg:px-10">
            <div className="rounded-[24px] border border-[#e9dfd5] bg-[#fffdfa] px-6 py-10 text-center shadow-[0_30px_80px_rgba(28,24,21,0.06)] md:px-12 md:py-14">
              <p className="section-label mx-auto justify-center">Booking</p>
              <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                Your appointment, <span className="accent-word">beautifully</span> simple.
              </h2>
              <p className="mx-auto mt-5 max-w-[38rem] text-base font-light leading-8 text-[#4A4A4A]">
                Booking should feel easy, warm, and beautifully clear. Choose your treatment path,
                then continue with a smooth Setmore flow or message our concierge for personal
                guidance.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openBooking("General Appointment")}
                  className="inline-flex items-center justify-center rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-6 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-white"
                >
                  Book Now
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#D4AF37]/55 px-6 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-[#8b6f2e]"
                >
                  WhatsApp Concierge
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden bg-[linear-gradient(180deg,#fbf7f2_0%,#fcf9f6_100%)] py-[60px] md:py-[100px]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,230,222,0.4),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_24%)]" />
          <div className="relative mx-auto grid max-w-[1200px] gap-8 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8 lg:px-10">
            <div>
              <p className="section-label">Contact</p>
              <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] tracking-[-0.03em] text-[#333333] md:text-[4rem]">
                Visit a studio experience that feels <span className="accent-word">calm</span> and welcoming before you even arrive.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="quiet-card rounded-[12px] border border-black/6 bg-[#fffdfa] p-6">
                <MapPin className="size-5 text-[#8b6f2e]" />
                <h3 className="mt-4 font-display text-[1.65rem] text-[#333333]">Studio</h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">{ADDRESS}</p>
              </div>
              <div className="quiet-card rounded-[12px] border border-black/6 bg-[#fffdfa] p-6">
                <Clock3 className="size-5 text-[#8b6f2e]" />
                <h3 className="mt-4 font-display text-[1.65rem] text-[#333333]">Hours</h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                  By appointment.
                  <br />
                  Online booking and concierge support available throughout the week.
                </p>
              </div>
              <a
                href="tel:+27648377293"
                className="quiet-card gold-hover rounded-[12px] border border-black/6 bg-[#fffdfa] p-6"
              >
                <Phone className="size-5 text-[#8b6f2e]" />
                <h3 className="mt-4 font-display text-[1.65rem] text-[#333333]">Call</h3>
                <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                  +27 64 837 7293
                </p>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="quiet-card gold-hover rounded-[12px] border border-black/6 bg-[#fffdfa] p-6"
              >
                <Mail className="size-5 text-[#8b6f2e]" />
                <h3 className="mt-4 font-display text-[1.65rem] text-[#333333]">Email</h3>
                <p className="mt-3 break-all text-sm font-light leading-7 text-[#4A4A4A]">
                  {EMAIL}
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/6 bg-[#fbf7f2] pb-28 pt-10 md:pb-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-8 lg:px-10">
          <div>
            <div className="font-display text-[2rem] tracking-[0.02em] text-[#333333]">
              Ella Nora
            </div>
            <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
              Birch Acres, Kempton Park
            </p>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-[#8b7a67]">
              Booking powered by Setmore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-hover inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#4A4A4A]"
                >
                  <Icon className="size-4 text-[#8b6f2e]" />
                  {link.label}
                </a>
              );
            })}
            <a
              href="https://www.tiktok.com/@ellanorabeautybar"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-hover inline-flex items-center gap-2 rounded-full border border-black/8 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#4A4A4A]"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="concierge-float z-40 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#fffdfa]/92 px-4 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-[#8b6f2e] shadow-[0_24px_60px_rgba(28,24,21,0.14)] backdrop-blur-xl"
      >
        Concierge
        <ArrowUpRight className="size-4" />
      </a>

      <div className="mobile-book-bar md:hidden">
        <button
          type="button"
          onClick={() => openBooking("General Appointment")}
          className="inline-flex w-full items-center justify-center rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-5 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-white"
        >
          Book Now
        </button>
      </div>

      {bookingOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1f1a16]/35 p-4 backdrop-blur-xl md:p-6"
          role="presentation"
          onClick={() => setBookingOpen(false)}
        >
          <section
            className="w-full max-w-[600px] rounded-[15px] border border-white/50 bg-[#fffdfa] p-5 shadow-[0_40px_100px_rgba(26,22,18,0.22)] md:p-7"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-label">Booking</p>
                <h2
                  id="booking-modal-title"
                  className="mt-3 font-display text-[2rem] leading-none tracking-[-0.03em] text-[#333333] md:text-[2.4rem]"
                >
                  Book your visit
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="gold-hover inline-flex rounded-full border border-black/8 p-2 text-[#333333]"
                aria-label="Close booking modal"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-6 rounded-[15px] bg-[#f7f1eb] p-5">
              <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[#8b7a67]">
                Selected
              </div>
              <div className="mt-2 font-display text-[1.6rem] text-[#333333]">{bookingContext}</div>
              <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                We’ve kept the booking flow calm and simple. Continue with Setmore to choose a time
                that suits you, or message our concierge if you’d like guidance before booking.
              </p>
            </div>

            <div className="mt-5 rounded-[15px] border border-dashed border-[#D4AF37]/45 bg-white p-5">
              {/* Replace this placeholder panel with the official Setmore embed/widget code when it is available. */}
              <div className="text-[0.72rem] uppercase tracking-[0.18em] text-[#8b7a67]">
                Setmore Integration Placeholder
              </div>
              <p className="mt-3 text-sm font-light leading-7 text-[#4A4A4A]">
                The approved Setmore embed script or widget can be inserted here later. For now,
                this modal preserves the premium booking flow before opening the live Setmore page.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={SETMORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[12px] border border-[#D4AF37]/18 bg-[#333333] px-5 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-white"
                >
                  Continue to Setmore
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-[#D4AF37]/55 px-5 py-4 text-[0.76rem] uppercase tracking-[0.18em] text-[#8b6f2e]"
                >
                  WhatsApp Concierge
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
