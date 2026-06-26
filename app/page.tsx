import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Демо-лендинги для локального бизнеса",
  description:
    "Портфолио из двух демонстрационных лендингов: косметология и стоматология для локального бизнеса в Казахстане.",
};

const demos = [
  {
    href: "/demo/cosmetology",
    name: "Maison Aurelle",
    niche: "Косметология",
    description:
      "Светлый premium-лендинг с мягкими rose/beige/gold акцентами и сильным hero для записи через WhatsApp.",
    gradient:
      "from-[#fff6f1] via-[#f7ece3] to-[#ead5c4]",
    accent: "bg-[#b98a65]",
  },
  {
    href: "/demo/dentistry",
    name: "CyanCare Dental",
    niche: "Стоматология",
    description:
      "Чистый medical-лендинг в white/blue/cyan стилистике с ощущением доверия, порядка и современного сервиса.",
    gradient:
      "from-[#f7fdff] via-[#eaf7ff] to-[#d8f1ff]",
    accent: "bg-[#1399dc]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdf9_0%,#f8fafc_100%)] px-6 py-10 text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <section className="overflow-hidden rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Demo portfolio
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl font-[Iowan_Old_Style,Georgia,serif] text-5xl leading-none tracking-[-0.04em] text-slate-950 md:text-7xl">
                  Два лендинга, которые можно показывать клиентам уже сегодня.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                  Здесь собраны две нишевые demo-страницы для локального бизнеса в
                  Казахстане. Обе сделаны без backend и без внешних ассетов, с
                  фокусом на премиальный первый экран и заявки через WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  href="/demo/cosmetology"
                >
                  Открыть косметологию
                </Link>
                <Link
                  className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-300 hover:bg-slate-50"
                  href="/demo/dentistry"
                >
                  Открыть стоматологию
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {demos.map((demo) => (
                <Link
                  key={demo.href}
                  href={demo.href}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/70 bg-gradient-to-br ${demo.gradient} p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="mb-14 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      {demo.niche}
                    </span>
                    <h2 className="font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none tracking-[-0.04em] text-slate-950">
                      {demo.name}
                    </h2>
                    <p className="text-sm leading-7 text-slate-600">
                      {demo.description}
                    </p>
                  </div>

                  <div className="relative h-52 rounded-[26px] border border-white/60 bg-white/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="h-2 w-20 rounded-full bg-slate-300/80" />
                        <div className="h-2 w-28 rounded-full bg-slate-300/55" />
                      </div>
                      <div className={`h-10 w-10 rounded-2xl ${demo.accent} shadow-lg`} />
                    </div>
                    <div className="mt-5 h-24 rounded-[22px] bg-white/75" />
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-14 rounded-2xl bg-white/80" />
                      <div className="h-14 rounded-2xl bg-white/65" />
                      <div className="h-14 rounded-2xl bg-white/80" />
                    </div>
                    <div className="absolute -bottom-8 -right-6 h-24 w-24 rounded-[30px] bg-white/55 blur-[2px]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
