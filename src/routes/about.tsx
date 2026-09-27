import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Ornament, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    meta("About Us — NOCTURNE", "The story of NOCTURNE: alt-gothic memento mori apparel, hand-engraved and pressed in small runs."),
  component: AboutPage,
});

const rites = [
  { n: "I", t: "Engraved by hand", b: "Every motif is cut line by line, then pressed in bone ink — carved like a cathedral, not printed like a logo." },
  { n: "II", t: "Heavyweight bones", b: "480gsm fleece, raw seams, blackened hardware. Built to outlive you." },
  { n: "III", t: "Drops, not seasons", b: "Small numbered runs released at midnight. When it's gone, it's gone." },
];

function AboutPage() {
  return (
    <>
      <PageHeader kicker="II. The Confraternity" title="About Us" sub="We do not mourn the dark — we tailor it." />
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-2xl italic leading-snug text-bone md:text-3xl">
          NOCTURNE was born for the ones who feel at home after midnight. Every plate is hand-inked,
          every seam a small devotion to the beautiful fact of ending.
        </p>
        <div className="mt-12"><Ornament /></div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px border border-bone/10 bg-bone/10 px-0 md:grid-cols-3">
        {rites.map((r) => (
          <div key={r.n} className="bg-ink2 p-10">
            <p className="font-blackletter text-4xl text-blood">{r.n}</p>
            <h3 className="mt-4 text-2xl italic text-bone">{r.t}</h3>
            <p className="mt-3 leading-relaxed text-bone-dim">{r.b}</p>
          </div>
        ))}
      </div>
      <div className="h-20" />
    </>
  );
}
