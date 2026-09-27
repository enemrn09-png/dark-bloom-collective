import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, LegalBody, meta } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy — NOCTURNE", "How NOCTURNE collects, uses and protects your personal information."),
  component: () => (
    <>
      <PageHeader kicker="VI. Secrets Kept" title="Privacy Policy" />
      <LegalBody
        sections={[
          { h: "What we collect", p: "Your name, email, shipping address and order details when you register or buy." },
          { h: "How we use it", p: "To process orders, deliver products, and — if you sign up — send drop announcements." },
          { h: "Sharing", p: "We never sell your data. We only share what's needed with payment and shipping partners." },
          { h: "Your rights", p: "You can ask to see, correct or delete your data at any time by contacting us." },
          { h: "Cookies", p: "We use essential cookies to keep the site working, like remembering your bag." },
        ]}
      />
    </>
  ),
});
