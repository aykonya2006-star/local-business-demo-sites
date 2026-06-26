import type { Metadata } from "next";
import { dentalClinicDemo } from "@/components/demo/demo-data";
import { DemoPage } from "@/components/demo/demo-page";

export const metadata: Metadata = {
  title: "DentaNova Clinic | Demo Dental Clinic Landing Page",
  description:
    "English demo landing page for a modern dental clinic with WhatsApp consultation booking, service cards, USD pricing, reviews, and doctor profiles.",
};

export default function DentalClinicPage() {
  return <DemoPage data={dentalClinicDemo} />;
}
