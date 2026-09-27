import { createFileRoute } from "@tanstack/react-router";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productLongsleeve from "@/assets/product-longsleeve.jpg";
import { PageHeader, meta } from "@/components/site";

export const Route = createFileRoute("/products")({
  head: () =>
    meta(
      "Products — NOCTURNE",
      "Shop the NOCTURNE reliquary: hand-engraved gothic hoodies, tees and longsleeves in numbered editions.",
    ),
  component: ProductsPage,
});

const products = [
  { name: "Death Strike Hoodie", detail: "480gsm fleece · skull & lightning plate", price: "$128", img: productHoodie },
  { name: "Serpent Coil Tee", detail: "Heavyweight boxy · dagger & serpent", price: "$62", img: productTee },
  { name: "Fallen Grace Longsleeve", detail: "Thorn sleeves · weeping cherub", price: "$84", img: productLongsleeve },
];

function ProductsPage() {
  return (
    <>
      <PageHeader kicker="I. The Reliquary" title="Products" sub="Numbered editions. No restocks, no resurrections." />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.name} className="group">
            <div className="hatch relative overflow-hidden border border-bone/15 transition-colors duration-500 group-hover:border-gold/60">
              <img src={p.img} alt={p.name} loading="lazy" width={1024} height={1280}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <div>
                <h3 className="text-2xl italic text-bone">{p.name}</h3>
                <p className="mt-1 text-sm text-bone-dim">{p.detail}</p>
              </div>
              <span className="font-mono text-sm tracking-widest text-gold">{p.price}</span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
