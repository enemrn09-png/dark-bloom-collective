import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, LegalBody, meta } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions — NOCTURNE", "The terms and conditions for shopping with NOCTURNE."),
  component: () => (
    <>
      <PageHeader kicker="V. The Covenant" title="Terms & Conditions" />
      <LegalBody
        sections={[
          { h: "Acceptance", p: "By using this site or placing an order, you agree to these terms." },
          { h: "Products & pricing", p: "All editions are limited. Prices and availability may change without notice. We may cancel orders affected by errors." },
          { h: "Orders & payment", p: "An order is confirmed only once payment is received. We may refuse or cancel any order." },
          { h: "Shipping", p: "Delivery times are estimates. Risk passes to you once the order is delivered." },
          { h: "Returns", p: "Returns are accepted within 7 days of receiving your product. See our Return Policy." },
          { h: "Intellectual property", p: "All artwork, engravings and designs belong to NOCTURNE and may not be copied or reused." },
          { h: "Changes", p: "We may update these terms at any time. The current version is always on this page." },
        ]}
      />
    </>
  ),
});
