import type { Metadata } from "next";
import { medSpaDemo } from "@/components/demo/demo-data";
import { DemoPage } from "@/components/demo/demo-page";

export const metadata: Metadata = {
  title: "Aurora Med Spa | Demo Med Spa Landing Page",
  description:
    "English demo landing page for a premium med spa with WhatsApp booking, service cards, USD pricing, testimonials, and contact details.",
};

export default function MedSpaPage() {
  return <DemoPage data={medSpaDemo} />;
}
