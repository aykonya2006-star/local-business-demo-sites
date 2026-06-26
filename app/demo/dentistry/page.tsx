import type { Metadata } from "next";
import { DemoPage } from "@/components/demo/demo-page";
import { dentistryDemo } from "@/components/demo/demo-data";

export const metadata: Metadata = {
  title: "CyanCare Dental | Демо-сайт стоматологии",
  description:
    "Демонстрационный лендинг современной стоматологии с записью через WhatsApp, врачами, ценами, отзывами и контактами.",
};

export default function DentistryPage() {
  return <DemoPage data={dentistryDemo} />;
}
