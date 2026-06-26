import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo portfolio for local business",
  description:
    "Демонстрационные landing pages для локального бизнеса: косметология и стоматология.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
