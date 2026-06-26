import Link from "next/link";
import type { DemoPageData } from "./demo-data";

const WHATSAPP_URL = "https://wa.me/77000000000";

const themeClasses = {
  cosmetology: {
    page:
      "bg-[linear-gradient(180deg,#fffaf6_0%,#fffdfb_26%,#f6efe7_100%)] text-[#43302a]",
    surface:
      "border-white/70 bg-white/72 shadow-[0_24px_80px_rgba(118,83,57,0.12)]",
    badge: "border-[#e8d7cb] bg-white/74 text-[#8a6a57]",
    accent:
      "bg-[#b98a65] text-white shadow-[0_16px_36px_rgba(185,138,101,0.28)]",
    accentSoft: "border-[#d9c1b1] bg-[#fff7f2] text-[#7b5f4c]",
    sectionLabel: "text-[#a27c67]",
    title: "text-[#4d352b]",
    muted: "text-[#7f665a]",
    card: "border-white/70 bg-white/74 shadow-[0_22px_54px_rgba(121,84,57,0.10)]",
    heroBackdrop:
      "bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.98),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(235,194,171,0.44),transparent_30%),linear-gradient(135deg,#fffaf6_0%,#f5ebe3_54%,#ead8ca_100%)]",
    heroPane:
      "border-white/70 bg-white/78 shadow-[0_28px_70px_rgba(122,86,60,0.16)]",
    heroPanel: "bg-[#fff7f1]",
    map: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.92),transparent_26%),linear-gradient(135deg,#fff8f2_0%,#f5e7db_100%)]",
  },
  dentistry: {
    page:
      "bg-[linear-gradient(180deg,#f8fdff_0%,#f8fdff_26%,#e9f7ff_100%)] text-[#17384d]",
    surface:
      "border-white/75 bg-white/74 shadow-[0_24px_80px_rgba(23,115,164,0.11)]",
    badge: "border-[#d4edf8] bg-white/74 text-[#3a7b9f]",
    accent:
      "bg-[#1399dc] text-white shadow-[0_16px_36px_rgba(19,153,220,0.28)]",
    accentSoft: "border-[#c8ebf9] bg-[#f4fbff] text-[#2f6e90]",
    sectionLabel: "text-[#4f90b5]",
    title: "text-[#0d3650]",
    muted: "text-[#557c95]",
    card: "border-white/70 bg-white/78 shadow-[0_22px_54px_rgba(39,127,177,0.10)]",
    heroBackdrop:
      "bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.99),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(98,206,255,0.22),transparent_28%),linear-gradient(135deg,#f9fdff_0%,#edf8ff_56%,#daf0fd_100%)]",
    heroPane:
      "border-white/75 bg-white/80 shadow-[0_28px_70px_rgba(39,127,177,0.16)]",
    heroPanel: "bg-[#f2fbff]",
    map: "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_26%),linear-gradient(135deg,#f6fdff_0%,#e6f7ff_100%)]",
  },
} as const;

type ThemeClassSet = (typeof themeClasses)[keyof typeof themeClasses];

type SectionProps = {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  theme: ThemeClassSet;
  id?: string;
};

function Section({ title, eyebrow, children, theme, id }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-6">
      <div className="space-y-3">
        <div
          className={`text-xs font-semibold uppercase tracking-[0.24em] ${theme.sectionLabel}`}
        >
          {eyebrow}
        </div>
        <h2
          className={`font-[Iowan_Old_Style,Georgia,serif] text-4xl leading-none tracking-[-0.04em] ${theme.title} md:text-5xl`}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function DemoHeader({
  data,
  theme,
}: {
  data: DemoPageData;
  theme: ThemeClassSet;
}) {
  const navItems = [
    { href: "#services", label: data.ui.navServices },
    ...(data.doctors ? [{ href: "#doctors", label: data.ui.navDoctors }] : []),
    { href: "#prices", label: data.ui.navPrices },
    { href: "#reviews", label: data.ui.navReviews },
    { href: "#contacts", label: data.ui.navContacts },
  ];

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur ${theme.surface}`}
      >
        <div className="min-w-0">
          <Link
            href="/"
            className="block truncate text-sm font-semibold uppercase tracking-[0.24em] text-slate-500"
          >
            Demo portfolio
          </Link>
          <div
            className={`truncate font-[Iowan_Old_Style,Georgia,serif] text-2xl leading-none tracking-[-0.04em] ${theme.title}`}
          >
            {data.brand}
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className={`rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${theme.accent}`}
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function HeroSection({
  data,
  theme,
}: {
  data: DemoPageData;
  theme: ThemeClassSet;
}) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/60 p-6 md:p-10">
      <div className={`absolute inset-0 ${theme.heroBackdrop}`} />
      <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="space-y-7">
          <div className="flex flex-wrap gap-3">
            {data.badges.map((badge) => (
              <span
                key={badge}
                className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.badge}`}
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="space-y-5">
            <div className={`text-sm font-medium ${theme.muted}`}>
              {data.cityLine}
            </div>
            <h1
              className={`max-w-3xl font-[Iowan_Old_Style,Georgia,serif] text-5xl leading-[0.94] tracking-[-0.05em] ${theme.title} md:text-7xl`}
            >
              {data.heroTitle}
            </h1>
            <p className={`max-w-2xl text-lg leading-8 ${theme.muted}`}>
              {data.heroDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full px-6 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${theme.accent}`}
            >
              {data.ui.primaryCta}
            </a>
            <a
              href="#services"
              className={`rounded-full border px-6 py-3.5 text-sm font-semibold transition-colors duration-300 hover:bg-white/60 ${theme.accentSoft}`}
            >
              {data.ui.secondaryCta}
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {data.trustStats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[26px] border p-4 ${theme.card}`}
              >
                <div
                  className={`font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none tracking-[-0.04em] ${theme.title}`}
                >
                  {stat.value}
                </div>
                <div className={`mt-2 text-sm ${theme.muted}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px]">
          <div className="absolute right-0 top-0 h-80 w-[78%] rounded-[34px] border border-white/60 bg-white/55 backdrop-blur-xl" />
          <div className="absolute bottom-0 left-0 h-28 w-52 rounded-[28px] bg-white/50 backdrop-blur-xl" />
          <div className="absolute bottom-12 right-[16%] h-36 w-36 rounded-[38px] bg-white/40 backdrop-blur-xl" />

          <div
            className={`absolute right-2 top-8 w-full max-w-[360px] rounded-[34px] border p-5 md:p-6 ${theme.heroPane}`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div
                  className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${theme.sectionLabel}`}
                >
                  {data.heroCardLabel}
                </div>
                <div
                  className={`mt-2 font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none tracking-[-0.04em] ${theme.title}`}
                >
                  {data.heroCardTitle}
                </div>
              </div>
              <div className={`h-12 w-12 rounded-[20px] ${theme.accent}`} />
            </div>

            <div className={`rounded-[28px] p-4 ${theme.heroPanel}`}>
              <div className="grid grid-cols-[1.15fr_0.85fr] gap-3">
                <div className="h-36 rounded-[24px] bg-white/75" />
                <div className="grid gap-3">
                  <div className="rounded-[22px] bg-white/85 p-4">
                    <div
                      className={`font-[Iowan_Old_Style,Georgia,serif] text-2xl leading-none ${theme.title}`}
                    >
                      {data.trustStats[0]?.value}
                    </div>
                    <div className={`mt-2 text-xs ${theme.muted}`}>
                      {data.trustStats[0]?.label}
                    </div>
                  </div>
                  <div className="rounded-[22px] bg-white/85 p-4">
                    <div
                      className={`font-[Iowan_Old_Style,Georgia,serif] text-2xl leading-none ${theme.title}`}
                    >
                      {data.trustStats[1]?.value}
                    </div>
                    <div className={`mt-2 text-xs ${theme.muted}`}>
                      {data.trustStats[1]?.label}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-[24px] bg-white px-5 py-4">
                <div className={`text-sm ${theme.muted}`}>{data.heroCardNote}</div>
                <div
                  className={`mt-2 font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none ${theme.title}`}
                >
                  {data.heroCardPrice}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-[22px] bg-white/78 p-4">
                <div className={`text-sm ${theme.muted}`}>
                  {data.ui.heroCategoryLabel}
                </div>
                <div className={`mt-2 font-semibold ${theme.title}`}>
                  {data.category}
                </div>
              </div>
              <div className="rounded-[22px] bg-white/78 p-4">
                <div className={`text-sm ${theme.muted}`}>
                  {data.ui.heroBookingLabel}
                </div>
                <div className={`mt-2 font-semibold ${theme.title}`}>
                  {data.ui.heroBookingValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DemoPage({ data }: { data: DemoPageData }) {
  const theme = themeClasses[data.theme];

  return (
    <main className={`min-h-screen px-6 pb-16 ${theme.page}`}>
      <DemoHeader data={data} theme={theme} />

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-8 md:mt-10">
        <HeroSection data={data} theme={theme} />

        <div className={`rounded-[36px] border p-6 md:p-10 ${theme.surface}`}>
          <div className="grid gap-16">
            <Section
              id="services"
              title={data.ui.servicesTitle}
              eyebrow={data.ui.servicesEyebrow}
              theme={theme}
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {data.services.map((service) => (
                  <article
                    key={service.title}
                    className={`rounded-[28px] border p-5 transition-transform duration-300 hover:-translate-y-1 ${theme.card}`}
                  >
                    <div
                      className={`mb-4 inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${theme.badge}`}
                    >
                      {service.meta}
                    </div>
                    <h3
                      className={`font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none tracking-[-0.04em] ${theme.title}`}
                    >
                      {service.title}
                    </h3>
                    <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            {data.doctors ? (
              <Section
                id="doctors"
                title={data.ui.doctorsTitle}
                eyebrow={data.ui.doctorsEyebrow}
                theme={theme}
              >
                <div className="grid gap-5 lg:grid-cols-3">
                  {data.doctors.map((doctor) => (
                    <article
                      key={doctor.name}
                      className={`rounded-[30px] border p-5 ${theme.card}`}
                    >
                      <div className={`mb-5 h-44 rounded-[26px] ${theme.heroPanel}`} />
                      <div
                        className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${theme.sectionLabel}`}
                      >
                        {doctor.experience}
                      </div>
                      <h3
                        className={`mt-3 font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none tracking-[-0.04em] ${theme.title}`}
                      >
                        {doctor.name}
                      </h3>
                      <div className={`mt-2 text-sm font-medium ${theme.title}`}>
                        {doctor.role}
                      </div>
                      <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                        {doctor.description}
                      </p>
                    </article>
                  ))}
                </div>
              </Section>
            ) : null}

            <Section
              id="prices"
              title={data.ui.pricesTitle}
              eyebrow={data.ui.pricesEyebrow}
              theme={theme}
            >
              <div
                className={`grid gap-5 ${
                  data.prices.length >= 6 ? "xl:grid-cols-3" : "lg:grid-cols-5"
                } md:grid-cols-2`}
              >
                {data.prices.map((item) => (
                  <article
                    key={item.title}
                    className={`rounded-[28px] border p-5 ${theme.card}`}
                  >
                    <div className={`text-sm ${theme.muted}`}>{item.title}</div>
                    <div
                      className={`mt-5 font-[Iowan_Old_Style,Georgia,serif] text-4xl leading-none tracking-[-0.04em] ${theme.title}`}
                    >
                      {item.price}
                    </div>
                    <p className={`mt-4 text-sm leading-7 ${theme.muted}`}>
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            <Section
              title={data.ui.whyUsTitle}
              eyebrow={data.ui.whyUsEyebrow}
              theme={theme}
            >
              <div className="grid gap-4 md:grid-cols-2">
                {data.whyUs.map((item) => (
                  <div
                    key={item}
                    className={`rounded-[26px] border p-5 ${theme.card}`}
                  >
                    <div className={`text-lg leading-8 ${theme.title}`}>
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              title={data.ui.galleryTitle}
              eyebrow={data.ui.galleryEyebrow}
              theme={theme}
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {data.gallery.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-[30px] border p-4 ${theme.card}`}
                  >
                    <div
                      className={`mb-5 h-48 rounded-[26px] ${
                        data.theme === "cosmetology"
                          ? index % 2 === 0
                            ? "bg-[linear-gradient(145deg,#fff2e7_0%,#f0dacb_100%)]"
                            : "bg-[linear-gradient(145deg,#f7ebe2_0%,#fff8f4_100%)]"
                          : index % 2 === 0
                            ? "bg-[linear-gradient(145deg,#effbff_0%,#d7f1ff_100%)]"
                            : "bg-[linear-gradient(145deg,#f9feff_0%,#e5f7ff_100%)]"
                      }`}
                    />
                    <h3
                      className={`font-[Iowan_Old_Style,Georgia,serif] text-2xl leading-none tracking-[-0.04em] ${theme.title}`}
                    >
                      {item.title}
                    </h3>
                    <p className={`mt-3 text-sm leading-7 ${theme.muted}`}>
                      {item.caption}
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            <Section
              id="reviews"
              title={data.ui.reviewsTitle}
              eyebrow={data.ui.reviewsEyebrow}
              theme={theme}
            >
              <div className="grid gap-5 lg:grid-cols-3">
                {data.reviews.map((review) => (
                  <article
                    key={review.author}
                    className={`rounded-[30px] border p-6 ${theme.card}`}
                  >
                    <div
                      className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] ${theme.sectionLabel}`}
                    >
                      {review.meta}
                    </div>
                    <p className={`text-base leading-8 ${theme.title}`}>
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className={`mt-6 font-semibold ${theme.muted}`}>
                      {review.author}
                    </div>
                  </article>
                ))}
              </div>
            </Section>

            <section
              className={`overflow-hidden rounded-[34px] border p-8 md:p-10 ${theme.card}`}
            >
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="space-y-5">
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.24em] ${theme.sectionLabel}`}
                  >
                    WhatsApp CTA
                  </div>
                  <h2
                    className={`font-[Iowan_Old_Style,Georgia,serif] text-4xl leading-none tracking-[-0.04em] ${theme.title} md:text-5xl`}
                  >
                    {data.ctaTitle}
                  </h2>
                  <p className={`max-w-2xl text-lg leading-8 ${theme.muted}`}>
                    {data.ctaDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-[30px] bg-white/72 p-5">
                  <div className={`rounded-[24px] p-5 ${theme.heroPanel}`}>
                    <div className={`text-sm ${theme.muted}`}>
                      {data.ui.quickContactLabel}
                    </div>
                    <div
                      className={`mt-2 font-[Iowan_Old_Style,Georgia,serif] text-3xl leading-none ${theme.title}`}
                    >
                      {data.ui.quickContactTitle}
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-full px-6 py-4 text-center text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${theme.accent}`}
                  >
                    {data.ui.primaryCta}
                  </a>
                </div>
              </div>
            </section>

            <Section
              id="contacts"
              title={data.ui.contactsTitle}
              eyebrow={data.ui.contactsEyebrow}
              theme={theme}
            >
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <div className={`rounded-[30px] border p-6 ${theme.card}`}>
                  <div className="space-y-5">
                    <div>
                      <div className={`text-sm ${theme.muted}`}>
                        {data.ui.addressLabel}
                      </div>
                      <div className={`mt-2 text-lg ${theme.title}`}>
                        {data.contacts.address}
                      </div>
                    </div>
                    <div>
                      <div className={`text-sm ${theme.muted}`}>
                        {data.ui.whatsappLabel}
                      </div>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-2 inline-block text-lg font-semibold ${theme.title}`}
                      >
                        {data.contacts.phone}
                      </a>
                    </div>
                    <div>
                      <div className={`text-sm ${theme.muted}`}>
                        {data.ui.instagramLabel}
                      </div>
                      <div className={`mt-2 text-lg ${theme.title}`}>
                        {data.contacts.instagram}
                      </div>
                    </div>
                    <div>
                      <div className={`text-sm ${theme.muted}`}>
                        {data.ui.scheduleLabel}
                      </div>
                      <div className="mt-2 space-y-2">
                        {data.contacts.schedule.map((line) => (
                          <div key={line} className={`text-lg ${theme.title}`}>
                            {line}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative overflow-hidden rounded-[32px] border p-6 ${theme.map}`}
                >
                  <div className="absolute right-6 top-6 rounded-full bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {data.ui.mapBadge}
                  </div>
                  <div className="grid h-full min-h-[320px] grid-cols-6 gap-3">
                    {Array.from({ length: 12 }).map((_, index) => (
                      <div
                        key={index}
                        className={`rounded-[20px] ${
                          index === 7 || index === 8
                            ? "bg-white/90"
                            : index % 3 === 0
                              ? "bg-white/55"
                              : "bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                  <div
                    className={`absolute bottom-8 left-8 rounded-[24px] border px-5 py-4 ${theme.card}`}
                  >
                    <div className={`text-sm ${theme.muted}`}>
                      {data.ui.landmarkLabel}
                    </div>
                    <div className={`mt-2 text-lg ${theme.title}`}>
                      {data.cityLine}
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}
