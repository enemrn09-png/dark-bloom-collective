import { createFileRoute } from "@tanstack/react-router";
import heroEngraving from "@/assets/hero-engraving.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productLongsleeve from "@/assets/product-longsleeve.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOCTURNE — Memento Mori Streetwear" },
      {
        name: "description",
        content:
          "NOCTURNE is alt-gothic streetwear pressed from hand-cut engravings. Skulls, serpents and lightning on heavyweight black cotton. All flesh rots — dress for it.",
      },
      { property: "og:title", content: "NOCTURNE — Memento Mori Streetwear" },
      {
        property: "og:description",
        content:
          "Alt-gothic streetwear pressed from hand-cut engravings. Skulls, serpents and lightning on heavyweight black cotton.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Death Strike Hoodie",
    detail: "480gsm fleece · skull & lightning plate",
    price: "$128",
    img: productHoodie,
  },
  {
    name: "Serpent Coil Tee",
    detail: "Heavyweight boxy · dagger & serpent",
    price: "$62",
    img: productTee,
  },
  {
    name: "Fallen Grace Longsleeve",
    detail: "Thorn sleeves · weeping cherub",
    price: "$84",
    img: productLongsleeve,
  },
];

const rites = [
  {
    numeral: "I",
    title: "Engraved by hand",
    body: "Every motif is cut into a copper plate line by line, then pressed in bone ink — the way a cathedral was carved, not the way a logo is printed.",
  },
  {
    numeral: "II",
    title: "Heavyweight bones",
    body: "480gsm fleece, raw selvedge, blackened hardware. Built to outlive you, then be worn by someone sadder.",
  },
  {
    numeral: "III",
    title: "Drops, not seasons",
    body: "Small numbered runs released at midnight. When it's gone, it's gone — like most of the things we mourn.",
  },
];

function Marquee({ items, className }: { items: string[]; className?: string }) {
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

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-4 text-gold" aria-hidden>
      <span className="h-px w-16 bg-gold/40" />
      <span className="text-lg">☩</span>
      <span className="h-px w-16 bg-gold/40" />
    </div>
  );
}

function Index() {
  return (
    <div className="grain min-h-screen bg-ink font-serif text-bone antialiased">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-bone/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="font-blackletter text-3xl leading-none text-bone">
            Nocturne
          </a>
          <nav className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim md:flex">
            <a href="#collection" className="transition-colors hover:text-gold">
              Collection
            </a>
            <a href="#rites" className="transition-colors hover:text-gold">
              Rites
            </a>
            <a href="#manifesto" className="transition-colors hover:text-gold">
              Manifesto
            </a>
            <a href="#drop" className="transition-colors hover:text-gold">
              The Drop
            </a>
          </nav>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-dim">
            Bag (0)
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden pt-16">
        <img
          src={heroEngraving}
          alt="Baroque engraving of a crowned skull with serpents, lightning and skeletal cherubs"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
        <div className="lightning-flicker absolute inset-0 bg-gradient-to-b from-bone/5 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="max-w-3xl border border-bone/25 bg-ink/40 p-8 backdrop-blur-sm md:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              Memento Mori — MMXXVI
            </p>
            <h1 className="mt-4 font-blackletter text-7xl leading-[0.9] text-bone md:text-9xl">
              Nocturne
            </h1>
            <p className="mt-5 max-w-xl text-xl italic leading-relaxed text-bone/85 md:text-2xl">
              All flesh rots. Dress for it.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-bone-dim">
              Alt-gothic streetwear pressed from hand-cut engravings — skulls,
              serpents and lightning on heavyweight black cotton.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#collection"
                className="bg-blood px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-500 hover:bg-gold hover:text-ink"
              >
                Enter the collection
              </a>
              <a
                href="#manifesto"
                className="border border-bone/30 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Read the manifesto
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee
        className="text-bone-dim"
        items={[
          "Memento Mori",
          "All Flesh Rots",
          "Ave Nocturna",
          "Pulvis et Umbra",
          "Sic Parvis Magna",
          "Ars Longa Vita Brevis",
        ]}
      />

      {/* Collection */}
      <section id="collection" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between border-b border-bone/10 pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              I. The Reliquary
            </p>
            <h2 className="mt-3 font-blackletter text-5xl text-bone md:text-6xl">
              The Collection
            </h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim sm:block">
            03 pieces — numbered
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group">
              <div className="hatch relative overflow-hidden border border-bone/15 transition-colors duration-500 group-hover:border-gold/60">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-2xl italic text-bone">{p.name}</h3>
                  <p className="mt-1 text-sm text-bone-dim">{p.detail}</p>
                </div>
                <span className="font-mono text-sm tracking-widest text-gold">
                  {p.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Rites */}
      <section id="rites" className="hatch border-y border-bone/10 bg-ink2">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
            II. The Three Rites
          </p>
          <div className="mt-14 grid grid-cols-1 gap-px border border-bone/10 bg-bone/10 md:grid-cols-3">
            {rites.map((r) => (
              <div key={r.numeral} className="bg-ink2 p-10">
                <p className="font-blackletter text-4xl text-blood">{r.numeral}</p>
                <h3 className="mt-4 text-2xl italic text-bone">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-bone-dim">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="mx-auto max-w-4xl px-6 py-28 text-center">
        <Ornament />
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
          III. Manifesto
        </p>
        <p className="mt-8 text-3xl italic leading-snug text-bone md:text-4xl">
          We do not mourn the dark — we tailor it. Every plate is hand-inked,
          every seam a small devotion to the beautiful fact of ending.
        </p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim">
          — The Confraternity of Nocturne
        </p>
        <div className="mt-10">
          <Ornament />
        </div>
      </section>

      <Marquee
        className="text-blood"
        items={[
          "Drop 001 — Midnight",
          "Numbered Editions",
          "No Restocks",
          "No Resurrections",
        ]}
      />

      {/* Drop signup */}
      <section id="drop" className="mx-auto max-w-7xl px-6 py-24">
        <div className="border border-gold/30 bg-ink2/60 p-10 text-center md:p-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
            IV. The Drop
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-blackletter text-5xl leading-tight text-bone md:text-6xl">
            The next requiem opens at midnight
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-bone-dim">
            Join the confraternity for early access and numbered editions. No
            noise — just the good grief.
          </p>
          <form
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="your@vessel.email"
              className="flex-1 border border-bone/20 bg-ink px-5 py-4 font-mono text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold/60 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blood px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              Inscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-bone/10 bg-ink2/60">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col items-center gap-8 text-center">
            <p className="font-blackletter text-4xl text-bone">Nocturne</p>
            <p className="max-w-md text-sm leading-relaxed text-bone-dim">
              Hand-inked memento mori apparel. Pressed in small editions from
              antique plates, worn by the devoutly melancholic.
            </p>
            <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-dim">
              <a href="#" className="transition-colors hover:text-gold">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                TikTok
              </a>
              <a href="#" className="transition-colors hover:text-gold">
                Contact
              </a>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim/50">
              © MMXXVI Nocturne · Memento Mori · All bones reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
