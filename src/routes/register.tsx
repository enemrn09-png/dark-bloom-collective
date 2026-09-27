import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, meta } from "@/components/site";

export const Route = createFileRoute("/register")({
  head: () => meta("Register — NOCTURNE", "Join the NOCTURNE confraternity for early access to midnight drops and numbered editions."),
  component: RegisterPage,
});

const input =
  "w-full border border-bone/20 bg-ink px-5 py-4 font-mono text-sm text-bone placeholder:text-bone-dim/50 focus:border-gold/60 focus:outline-none";

function RegisterPage() {
  const [done, setDone] = useState(false);
  return (
    <>
      <PageHeader kicker="III. Initiation" title="Register" sub="Sign your name in the ledger. Early access, numbered editions." />
      <div className="mx-auto max-w-md px-6 py-20">
        {done ? (
          <p className="border border-gold/30 p-10 text-center text-2xl italic text-bone">
            Your name is inscribed. Welcome to the dark.
          </p>
        ) : (
          <form className="flex flex-col gap-4 border border-gold/30 bg-ink2/60 p-8"
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input required placeholder="Name" className={input} />
            <input required type="email" placeholder="your@vessel.email" className={input} />
            <input required type="password" minLength={6} placeholder="Password" className={input} />
            <button type="submit"
              className="mt-2 bg-blood px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] text-bone transition-colors duration-500 hover:bg-gold hover:text-ink">
              Inscribe
            </button>
          </form>
        )}
      </div>
    </>
  );
}
