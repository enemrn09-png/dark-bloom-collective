import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, LegalBody, meta } from "@/components/site";

export const Route = createFileRoute("/returns")({
  head: () => meta("Return Policy — NOCTURNE", "NOCTURNE accepts returns within 7 days of receiving your order."),
  component: () => (
    <>
      <PageHeader kicker="IV. Seven Days" title="Return Policy" sub="You have 7 days after you receive your order. Then the coffin closes." />
      <LegalBody
        sections={[
          { h: "7-day window", p: "Returns are accepted only within 7 days of the date you receive your product. Requests after 7 days cannot be accepted." },
          { h: "Condition", p: "Items must be unworn, unwashed, and returned with all original tags and packaging." },
          { h: "How to return", p: "Contact us with your order number within the 7-day window. We will send you return instructions." },
          { h: "Refunds", p: "Once we receive and inspect your return, your refund is issued to the original payment method." },
          { h: "Non-returnable", p: "Final-sale and personalised items cannot be returned unless they arrive damaged or defective." },
        ]}
      />
    </>
  ),
});
