import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const menu = [
  { to: "/", label: "Home", num: "0" },
  { to: "/products", label: "Products", num: "I" },
  { to: "/about", label: "About Us", num: "II" },
  { to: "/register", label: "Register", num: "III" },
  { to: "/returns", label: "Returns", num: "IV" },
  { to: "/terms", label: "Terms", num: "V" },
  { to: "/privacy", label: "Privacy Policy", num: "VI" },
] as const;

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = items.map((t, i) => (
    <span key={i} className="inline-flex items-center">
      <span className="px-6">{t}</span>
      <span className="text-blood">✦</span>
    </span>
  ));
  return (
    <div className={`overflow-hidden border-y border-bone/10 py-3 ${className ?? ""}`}>
      <div className="marquee-track font-mono text-[11px] uppercase tracking-[0.35em]">
        {row}
        {row}
      </div>
    </div>
  );
}

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4 text-gold" aria-hidden>
      <span className="h-px w-16 bg-gold/40" />
      <span className="text-lg">☩</span>
      <span className="h-px w-16 bg-gold/40" />
    </div>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col">
      {menu.map((m) => (
        <Link
          key={m.to}
          to={m.to}
          onClick={onNavigate}
          activeOptions={{ exact: true }}
          className="group flex items-baseline gap-4 border-b border-bone/10 py-4 text-bone-dim transition-colors hover:text-gold"
          activeProps={{ className: "text-bone" }}
        >
          <span className="w-8 font-blackletter text-xl text-blood">{m.num}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em]">{m.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="grain min-h-screen bg-ink font-serif text-bone antialiased">
      {/* Desktop sidebar */}
      <aside className="hatch fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-bone/15 bg-ink2 px-6 py-8 lg:flex">
        <Link to="/" className="font-blackletter text-4xl leading-none text-bone">
          Nocturne
        </Link>
        <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.4em] text-gold">
          Memento Mori
        </p>
        <div className="mt-10 flex-1">
          <NavLinks />
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-dim/60">
          Bag (0) · MMXXVI
        </p>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-bone/10 bg-ink/90 px-5 backdrop-blur-md lg:hidden">
        <Link to="/" className="font-blackletter text-3xl text-bone">
          Nocturne
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold"
          aria-label="Toggle menu"
        >
          {open ? "Close ✕" : "Menu ☩"}
        </button>
      </header>
      {open && (
        <div className="hatch fixed inset-0 z-40 bg-ink2 px-6 pt-20 lg:hidden">
          <NavLinks onNavigate={() => setOpen(false)} />
        </div>
      )}

      <div className="pt-16 lg:pl-64 lg:pt-0">
        <main>{children}</main>
        <footer className="border-t border-bone/10 bg-ink2/60">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center">
            <p className="font-blackletter text-4xl text-bone">Nocturne</p>
            <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim">
              <Link to="/returns" className="hover:text-gold">Returns</Link>
              <Link to="/terms" className="hover:text-gold">Terms</Link>
              <Link to="/privacy" className="hover:text-gold">Privacy</Link>
              <Link to="/about" className="hover:text-gold">About</Link>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim/50">
              © MMXXVI Nocturne · All bones reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function PageHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="hatch border-b border-bone/10 px-6 py-20 text-center">
      <Ornament />
      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.45em] text-gold">{kicker}</p>
      <h1 className="mt-4 font-blackletter text-6xl text-bone md:text-7xl">{title}</h1>
      {sub && <p className="mx-auto mt-5 max-w-xl text-lg italic text-bone-dim">{sub}</p>}
    </section>
  );
}

export function LegalBody({ sections }: { sections: { h: string; p: ReactNode }[] }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      {sections.map((s, i) => (
        <section key={s.h} className="border-b border-bone/10 py-8">
          <h2 className="flex items-baseline gap-4 text-2xl italic text-bone">
            <span className="font-blackletter text-3xl text-blood">{i + 1}.</span>
            {s.h}
          </h2>
          <div className="mt-3 text-lg leading-relaxed text-bone-dim">{s.p}</div>
        </section>
      ))}
      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim/60">
        Last updated: September MMXXVI
      </p>
    </div>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}
