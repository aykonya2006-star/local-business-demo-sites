import type { Metadata } from "next";
import { DemoPage } from "@/components/demo/demo-page";
import { cosmetologyDemo } from "@/components/demo/demo-data";

export const metadata: Metadata = {
  title: "Maison Aurelle | Демо-сайт косметологии",
  description:
    "Демонстрационный лендинг премиальной косметологии с записью через WhatsApp, услугами, ценами, отзывами и контактами.",
};

export default function CosmetologyPage() {
  return <DemoPage data={cosmetologyDemo} />;
}
