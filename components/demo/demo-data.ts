export type DemoTheme = "cosmetology" | "dentistry";

export type DemoStat = {
  label: string;
  value: string;
};

export type DemoService = {
  title: string;
  description: string;
  meta: string;
};

export type DemoPrice = {
  title: string;
  price: string;
  note: string;
};

export type DemoReview = {
  author: string;
  text: string;
  meta: string;
};

export type DemoGallery = {
  title: string;
  caption: string;
};

export type DemoDoctor = {
  name: string;
  role: string;
  experience: string;
  description: string;
};

export type DemoContact = {
  address: string;
  phone: string;
  instagram: string;
  schedule: string[];
};

export type DemoUiText = {
  navServices: string;
  navDoctors: string;
  navPrices: string;
  navReviews: string;
  navContacts: string;
  primaryCta: string;
  secondaryCta: string;
  heroCategoryLabel: string;
  heroBookingLabel: string;
  heroBookingValue: string;
  servicesTitle: string;
  servicesEyebrow: string;
  doctorsTitle: string;
  doctorsEyebrow: string;
  pricesTitle: string;
  pricesEyebrow: string;
  whyUsTitle: string;
  whyUsEyebrow: string;
  galleryTitle: string;
  galleryEyebrow: string;
  reviewsTitle: string;
  reviewsEyebrow: string;
  quickContactLabel: string;
  quickContactTitle: string;
  contactsTitle: string;
  contactsEyebrow: string;
  addressLabel: string;
  whatsappLabel: string;
  instagramLabel: string;
  scheduleLabel: string;
  mapBadge: string;
  landmarkLabel: string;
};

export type DemoPageData = {
  theme: DemoTheme;
  brand: string;
  cityLine: string;
  category: string;
  badges: string[];
  heroTitle: string;
  heroDescription: string;
  trustStats: DemoStat[];
  heroCardLabel: string;
  heroCardTitle: string;
  heroCardPrice: string;
  heroCardNote: string;
  services: DemoService[];
  prices: DemoPrice[];
  whyUs: string[];
  gallery: DemoGallery[];
  reviews: DemoReview[];
  ctaTitle: string;
  ctaDescription: string;
  contacts: DemoContact;
  ui: DemoUiText;
  doctors?: DemoDoctor[];
};

const russianUi: DemoUiText = {
  navServices: "Услуги",
  navDoctors: "Врачи",
  navPrices: "Цены",
  navReviews: "Отзывы",
  navContacts: "Контакты",
  primaryCta: "Записаться в WhatsApp",
  secondaryCta: "Посмотреть услуги",
  heroCategoryLabel: "Категория",
  heroBookingLabel: "Запись",
  heroBookingValue: "Через WhatsApp",
  servicesTitle: "Услуги, которые выглядят понятно и продающе",
  servicesEyebrow: "Услуги",
  doctorsTitle: "Команда врачей, которой легко доверить лечение",
  doctorsEyebrow: "Врачи",
  pricesTitle: "Реалистичные цены в тенге",
  pricesEyebrow: "Цены",
  whyUsTitle: "Почему этот формат работает для локального бизнеса",
  whyUsEyebrow: "Почему мы",
  galleryTitle: "Визуальные блоки результатов и атмосферы",
  galleryEyebrow: "Галерея",
  reviewsTitle: "Отзывы, похожие на реальные комментарии клиентов",
  reviewsEyebrow: "Отзывы",
  quickContactLabel: "Быстрый способ связи",
  quickContactTitle: "Написать в WhatsApp",
  contactsTitle: "Контакты и ориентиры для записи",
  contactsEyebrow: "Контакты",
  addressLabel: "Адрес",
  whatsappLabel: "WhatsApp",
  instagramLabel: "Instagram",
  scheduleLabel: "График работы",
  mapBadge: "Карта-заглушка",
  landmarkLabel: "Ориентир",
};

const englishSpaUi: DemoUiText = {
  navServices: "Services",
  navDoctors: "Specialists",
  navPrices: "Pricing",
  navReviews: "Reviews",
  navContacts: "Contact",
  primaryCta: "Book via WhatsApp",
  secondaryCta: "Explore Services",
  heroCategoryLabel: "Category",
  heroBookingLabel: "Booking",
  heroBookingValue: "Via WhatsApp",
  servicesTitle: "Services that feel premium, clear, and easy to trust",
  servicesEyebrow: "Services",
  doctorsTitle: "Specialists who make the experience feel calm and tailored",
  doctorsEyebrow: "Specialists",
  pricesTitle: "Sample pricing in USD",
  pricesEyebrow: "Pricing",
  whyUsTitle: "Why this format works for an international med spa audience",
  whyUsEyebrow: "Why us",
  galleryTitle: "Visual placeholders for results, rituals, and atmosphere",
  galleryEyebrow: "Gallery",
  reviewsTitle: "Testimonials that sound natural and credible",
  reviewsEyebrow: "Reviews",
  quickContactLabel: "Fastest way to book",
  quickContactTitle: "Message us on WhatsApp",
  contactsTitle: "Contact details and booking information",
  contactsEyebrow: "Contact",
  addressLabel: "Location",
  whatsappLabel: "WhatsApp",
  instagramLabel: "Instagram",
  scheduleLabel: "Hours",
  mapBadge: "Location preview",
  landmarkLabel: "Area",
};

const englishDentalUi: DemoUiText = {
  navServices: "Services",
  navDoctors: "Doctors",
  navPrices: "Pricing",
  navReviews: "Reviews",
  navContacts: "Contact",
  primaryCta: "Book a Consultation",
  secondaryCta: "View Services",
  heroCategoryLabel: "Category",
  heroBookingLabel: "Booking",
  heroBookingValue: "By WhatsApp",
  servicesTitle: "Services that look structured, modern, and reassuring",
  servicesEyebrow: "Services",
  doctorsTitle: "A doctor team that makes treatment feel organized and clear",
  doctorsEyebrow: "Doctors",
  pricesTitle: "Sample pricing in USD",
  pricesEyebrow: "Pricing",
  whyUsTitle: "Why this format works for a modern dental clinic",
  whyUsEyebrow: "Why us",
  galleryTitle: "Visual placeholders for clinic atmosphere and treatment journey",
  galleryEyebrow: "Gallery",
  reviewsTitle: "Reviews written for trust, clarity, and realism",
  reviewsEyebrow: "Reviews",
  quickContactLabel: "Fastest way to reach us",
  quickContactTitle: "Book a Consultation",
  contactsTitle: "Contact information and visit details",
  contactsEyebrow: "Contact",
  addressLabel: "Location",
  whatsappLabel: "WhatsApp",
  instagramLabel: "Instagram",
  scheduleLabel: "Hours",
  mapBadge: "Clinic area preview",
  landmarkLabel: "Area",
};

export const cosmetologyDemo: DemoPageData = {
  theme: "cosmetology",
  brand: "Maison Aurelle",
  cityLine: "Алматы, Бостандыкский район",
  category: "Косметология",
  badges: ["Демо-проект", "Запись онлайн", "WhatsApp"],
  heroTitle: "Косметология, в которую хочется записаться уже после первого экрана.",
  heroDescription:
    "Премиальный demo-лендинг для эстетической косметологии: мягкий визуальный стиль, понятные цены, доверительные акценты и несколько сильных CTA для записи через WhatsApp.",
  trustStats: [
    { value: "4.9", label: "рейтинг" },
    { value: "1000+", label: "клиентов" },
    { value: "5 лет", label: "опыта" },
  ],
  heroCardLabel: "Процедура дня",
  heroCardTitle: "Авторский anti-age уход",
  heroCardPrice: "от 25 000 ₸",
  heroCardNote: "Подбор по типу кожи и целям клиента",
  services: [
    {
      title: "Чистка лица",
      description: "Деликатная комбинированная чистка для свежего и ухоженного тона.",
      meta: "60-90 минут",
    },
    {
      title: "Пилинг",
      description: "Курс поверхностных и срединных пилингов с мягкой реабилитацией.",
      meta: "По протоколу косметолога",
    },
    {
      title: "Уходовые процедуры",
      description: "Сыворотки, маски и аппаратные этапы для сияния и увлажнения кожи.",
      meta: "Индивидуальный подбор",
    },
    {
      title: "Лазерная эпиляция",
      description: "Комфортные сеансы с прогнозируемым графиком посещений.",
      meta: "Популярно круглый год",
    },
    {
      title: "Консультация косметолога",
      description: "Оценка состояния кожи, домашний уход и пошаговый план процедур.",
      meta: "Старт для новых клиентов",
    },
    {
      title: "Anti-age уход",
      description: "Комплексные программы для тонуса, текстуры и ухоженного внешнего вида.",
      meta: "Премиальные протоколы",
    },
  ],
  prices: [
    {
      title: "Консультация",
      price: "от 5 000 ₸",
      note: "С подбором домашнего ухода",
    },
    {
      title: "Чистка лица",
      price: "от 18 000 ₸",
      note: "Комбинированный протокол",
    },
    { title: "Пилинг", price: "от 15 000 ₸", note: "По типу кожи" },
    {
      title: "Лазерная эпиляция",
      price: "от 12 000 ₸",
      note: "Зона по согласованию",
    },
    {
      title: "Комплексный уход",
      price: "от 25 000 ₸",
      note: "Сыворотки + маска + финальный уход",
    },
  ],
  whyUs: [
    "Стерильные протоколы и аккуратная организация каждого визита",
    "Сертифицированные специалисты с понятными рекомендациями без перегруза",
    "Индивидуальный подбор процедур под состояние кожи и цели клиента",
    "Удобная запись через WhatsApp без сложных форм и лишних шагов",
  ],
  gallery: [
    {
      title: "Свежий тон и текстура",
      caption: "Результат деликатных уходовых протоколов",
    },
    {
      title: "Glow-эффект после ухода",
      caption: "Акцент на чистоту, увлажнение и комфорт",
    },
    {
      title: "Курс anti-age процедур",
      caption: "Мягкое улучшение визуального качества кожи",
    },
    {
      title: "Регулярный beauty-care",
      caption: "Ухоженный результат без агрессивной подачи",
    },
  ],
  reviews: [
    {
      author: "Алина, 29 лет",
      text: "Очень понравился спокойный подход и то, как подробно объяснили, какие процедуры мне действительно подходят. После визита захотелось вернуться снова.",
      meta: "Чистка лица и домашний уход",
    },
    {
      author: "Мадина, 34 года",
      text: "Сайт сразу вызывает доверие, а в самой студии всё было аккуратно и без спешки. Уход подобрали бережно, без навязывания лишнего.",
      meta: "Пилинг и консультация",
    },
    {
      author: "Динара, 41 год",
      text: "Записалась через WhatsApp за пару минут, пришла по времени и получила понятный план процедур. Очень приятный сервис и ощущение премиального подхода.",
      meta: "Anti-age программа",
    },
  ],
  ctaTitle: "Хотите подобрать процедуру под свой запрос?",
  ctaDescription:
    "Напишите в WhatsApp, и администратор поможет выбрать удобное время, формат консультации и подходящий стартовый уход.",
  contacts: {
    address: "Алматы, Бостандыкский район",
    phone: "+7 (700) 000-00-00",
    instagram: "@maison.aurelle.demo",
    schedule: ["Пн-Пт: 10:00 - 20:00", "Сб: 11:00 - 18:00", "Вс: по записи"],
  },
  ui: russianUi,
};

export const dentistryDemo: DemoPageData = {
  theme: "dentistry",
  brand: "CyanCare Dental",
  cityLine: "Алматы, центр города",
  category: "Стоматология",
  badges: ["Демо-проект", "Запись онлайн", "WhatsApp"],
  heroTitle:
    "Современная стоматология с понятным лечением и спокойным сервисом.",
  heroDescription:
    "Демонстрационный медицинский лендинг для семейной стоматологии: чистый стиль, структурный hero, прозрачные цены, блок с врачами и фокус на консультацию через WhatsApp.",
  trustStats: [
    { value: "4.8", label: "рейтинг" },
    { value: "12 лет", label: "опыта" },
    { value: "5000+", label: "пациентов" },
  ],
  heroCardLabel: "Первичная консультация",
  heroCardTitle: "Понятный план лечения",
  heroCardPrice: "от 5 000 ₸",
  heroCardNote: "Объясним этапы, сроки и ориентир по бюджету",
  services: [
    {
      title: "Лечение кариеса",
      description: "Аккуратное восстановление зубов с фокусом на комфорт и точность.",
      meta: "Для взрослых и подростков",
    },
    {
      title: "Профессиональная чистка",
      description: "Плановая гигиена, удаление налёта и рекомендации по уходу.",
      meta: "Рекомендуем каждые 6 месяцев",
    },
    {
      title: "Имплантация",
      description: "Современные протоколы восстановления с детальным планом лечения.",
      meta: "По результатам диагностики",
    },
    {
      title: "Ортодонтия",
      description: "Брекеты и другие решения для выравнивания прикуса.",
      meta: "Долгосрочное сопровождение",
    },
    {
      title: "Виниры",
      description: "Эстетические решения для улыбки с аккуратной консультацией перед стартом.",
      meta: "После диагностики и согласования",
    },
    {
      title: "Детская стоматология",
      description: "Спокойный приём для детей с бережной коммуникацией и понятным процессом.",
      meta: "Для семейных пациентов",
    },
  ],
  doctors: [
    {
      name: "Айгерим Садыкова",
      role: "Стоматолог-терапевт",
      experience: "8 лет опыта",
      description: "Специализируется на лечении кариеса, профилактике и бережном сопровождении взрослых пациентов.",
    },
    {
      name: "Руслан Ибраев",
      role: "Ортодонт",
      experience: "10 лет опыта",
      description: "Работает с брекет-системами и долгосрочными планами коррекции прикуса.",
    },
    {
      name: "Елена Пак",
      role: "Имплантолог",
      experience: "12 лет опыта",
      description: "Составляет прозрачный хирургический план и помогает пройти лечение спокойно и поэтапно.",
    },
  ],
  prices: [
    {
      title: "Консультация",
      price: "от 5 000 ₸",
      note: "Осмотр и первичный план лечения",
    },
    {
      title: "Чистка зубов",
      price: "от 20 000 ₸",
      note: "Профгигиена и рекомендации",
    },
    {
      title: "Лечение кариеса",
      price: "от 25 000 ₸",
      note: "В зависимости от объёма",
    },
    {
      title: "Имплантация",
      price: "от 180 000 ₸",
      note: "После диагностики",
    },
    {
      title: "Брекеты",
      price: "от 250 000 ₸",
      note: "Старт ортодонтического лечения",
    },
  ],
  whyUs: [
    "Современное оборудование и спокойная медицинская подача без визуального шума",
    "Аккуратное лечение с понятными комментариями на каждом этапе",
    "Прозрачный план лечения и понятный ориентир по стоимости",
    "Запись без очередей через WhatsApp и удобное сопровождение семьи",
    "Комфортный приём как для взрослых, так и для детей",
  ],
  gallery: [
    {
      title: "Чистый кабинет",
      caption: "Визуальный акцент на порядок и безопасность",
    },
    {
      title: "Диагностика и план",
      caption: "Понятный маршрут лечения без перегруза",
    },
    {
      title: "Эстетика улыбки",
      caption: "Сдержанная подача результата без обещаний",
    },
    {
      title: "Семейный приём",
      caption: "Сервис, в который комфортно возвращаться",
    },
  ],
  reviews: [
    {
      author: "Нурсултан, 33 года",
      text: "Понравилось, что на консультации сразу объяснили этапы и ничего не навязывали. По записи приняли вовремя, всё спокойно и профессионально.",
      meta: "Консультация и лечение кариеса",
    },
    {
      author: "Жанна, 40 лет",
      text: "Удобно, что можно быстро написать в WhatsApp и получить ответы по цене и времени. Сам сайт выглядит современно и внушает доверие.",
      meta: "Профчистка",
    },
    {
      author: "Семья Аскаровых",
      text: "Искали аккуратную клинику для взрослых и ребёнка. Здесь понравилась чистота, спокойная атмосфера и понятный план лечения.",
      meta: "Семейный приём",
    },
  ],
  ctaTitle:
    "Запишитесь на консультацию и получите понятный план лечения.",
  ctaDescription:
    "Оставьте сообщение в WhatsApp, и администратор поможет подобрать врача, время визита и удобный формат первичной записи.",
  contacts: {
    address: "Алматы, центр города",
    phone: "+7 (700) 000-00-00",
    instagram: "@cyancare.dental.demo",
    schedule: ["Пн-Пт: 09:00 - 20:00", "Сб: 10:00 - 17:00", "Вс: выходной"],
  },
  ui: russianUi,
};

export const medSpaDemo: DemoPageData = {
  theme: "cosmetology",
  brand: "Aurora Med Spa",
  cityLine: "Your City, Main District",
  category: "Med Spa",
  badges: ["Demo project", "Online booking", "WhatsApp"],
  heroTitle:
    "A med spa landing page that feels premium, soft, and instantly bookable.",
  heroDescription:
    "An English demo landing page for beauty and medical-aesthetic clients: elegant gradients, clean service presentation, pricing in USD, and a polished first screen designed to convert through WhatsApp.",
  trustStats: [
    { value: "4.9", label: "rating" },
    { value: "1200+", label: "clients served" },
    { value: "6 years", label: "experience" },
  ],
  heroCardLabel: "Signature treatment",
  heroCardTitle: "Personalized anti-aging ritual",
  heroCardPrice: "from $120",
  heroCardNote: "Tailored to skin goals, sensitivity, and treatment history",
  services: [
    {
      title: "Facial Treatments",
      description: "Tailored facials focused on hydration, texture, brightness, and visible freshness.",
      meta: "60-90 minutes",
    },
    {
      title: "Chemical Peels",
      description: "Progressive peel protocols for clarity, smoothness, and a refined skin surface.",
      meta: "Customized by skin type",
    },
    {
      title: "Laser Hair Removal",
      description: "Comfort-led sessions with a clear treatment schedule and modern device workflow.",
      meta: "Popular year-round",
    },
    {
      title: "Skin Consultation",
      description: "A calm consultation with treatment guidance, skin review, and home-care direction.",
      meta: "Ideal first visit",
    },
    {
      title: "Anti-Aging Care",
      description: "Layered treatment plans designed for tone, glow, softness, and confidence.",
      meta: "Premium protocols",
    },
  ],
  prices: [
    { title: "Skin Consultation", price: "from $25", note: "Includes treatment recommendations" },
    { title: "Facial Treatments", price: "from $85", note: "Customized to skin goals" },
    { title: "Chemical Peels", price: "from $70", note: "Protocol selected during consultation" },
    { title: "Laser Hair Removal", price: "from $60", note: "Price depends on treatment area" },
    { title: "Anti-Aging Care", price: "from $120", note: "Signature multi-step experience" },
  ],
  whyUs: [
    "A clean premium atmosphere that blends beauty softness with medical trust",
    "Licensed specialists who guide clients without pressure or overcomplication",
    "A personalized approach based on skin condition, goals, and comfort level",
    "Fast booking through WhatsApp with a simple, low-friction client journey",
  ],
  gallery: [
    { title: "Calm treatment room", caption: "A visual tone built around comfort, light, and care" },
    { title: "Refined skin ritual", caption: "Placeholder imagery for layered treatment experience" },
    { title: "Glow-focused results", caption: "Clean presentation without exaggerated promises" },
    { title: "Beauty and medical balance", caption: "Aesthetic confidence with structured care" },
  ],
  reviews: [
    {
      author: "Emma, 31",
      text: "The page feels elegant and trustworthy, and the consultation flow is very clear. I would feel comfortable booking from this experience alone.",
      meta: "Skin consultation",
    },
    {
      author: "Nadia, 38",
      text: "I liked how calm and premium everything feels. The services are easy to understand, and the pricing looks realistic instead of vague.",
      meta: "Anti-aging care",
    },
    {
      author: "Aisha, 27",
      text: "Booking through WhatsApp felt simple and direct. The overall presentation feels polished, modern, and very client-friendly.",
      meta: "Facial treatments",
    },
  ],
  ctaTitle: "Looking for the right treatment for your skin goals?",
  ctaDescription:
    "Send a message on WhatsApp and our team will help you choose the right treatment, the right timing, and the best first step.",
  contacts: {
    address: "Your City, Main District",
    phone: "+1 (000) 000-0000",
    instagram: "@auroramedspa.demo",
    schedule: ["Mon-Fri: 10:00 AM - 8:00 PM", "Sat: 11:00 AM - 6:00 PM", "Sun: By appointment"],
  },
  ui: englishSpaUi,
};

export const dentalClinicDemo: DemoPageData = {
  theme: "dentistry",
  brand: "DentaNova Clinic",
  cityLine: "Your City, Downtown",
  category: "Dental Clinic",
  badges: ["Demo project", "Online booking", "WhatsApp"],
  heroTitle:
    "A dental clinic landing page that feels modern, clean, and easy to trust.",
  heroDescription:
    "An English demo landing page for international dental clients: clear treatment positioning, sample pricing in USD, trustworthy structure, and a consultation-first conversion path through WhatsApp.",
  trustStats: [
    { value: "4.8", label: "rating" },
    { value: "12 years", label: "experience" },
    { value: "5000+", label: "patients treated" },
  ],
  heroCardLabel: "First consultation",
  heroCardTitle: "A clear treatment plan",
  heroCardPrice: "from $30",
  heroCardNote: "We explain the steps, timing, and treatment options in plain language",
  services: [
    {
      title: "Dental Checkup",
      description: "A structured first visit with examination, treatment overview, and next-step guidance.",
      meta: "Great starting point",
    },
    {
      title: "Teeth Cleaning",
      description: "Professional hygiene appointments focused on prevention, comfort, and long-term care.",
      meta: "Recommended every 6 months",
    },
    {
      title: "Cavity Treatment",
      description: "Accurate restorative care designed to feel organized, calm, and clearly explained.",
      meta: "For adults and teens",
    },
    {
      title: "Implants",
      description: "Modern implant planning with a transparent consultation and phased treatment journey.",
      meta: "After diagnostics",
    },
    {
      title: "Orthodontics",
      description: "Long-term bite and alignment solutions with careful planning and follow-up.",
      meta: "Structured treatment path",
    },
    {
      title: "Veneers",
      description: "Aesthetic smile solutions presented in a clean, measured, and consultation-led way.",
      meta: "After clinical review",
    },
  ],
  doctors: [
    {
      name: "Dr. Aigerim Sadykova",
      role: "General Dentist",
      experience: "8 years of experience",
      description: "Focused on diagnostics, restorative care, and making treatment easy to understand for new patients.",
    },
    {
      name: "Dr. Ruslan Ibrayev",
      role: "Orthodontist",
      experience: "10 years of experience",
      description: "Works on long-term alignment plans with a structured, transparent treatment approach.",
    },
    {
      name: "Dr. Elena Pak",
      role: "Implant Specialist",
      experience: "12 years of experience",
      description: "Builds calm, step-by-step implant treatment plans with clarity around timeline and procedure flow.",
    },
  ],
  prices: [
    { title: "Dental Checkup", price: "from $30", note: "Examination and first treatment plan" },
    { title: "Teeth Cleaning", price: "from $95", note: "Professional hygiene appointment" },
    { title: "Cavity Treatment", price: "from $120", note: "Depends on treatment scope" },
    { title: "Implants", price: "from $900", note: "After diagnostics and planning" },
    { title: "Orthodontics", price: "from $1,400", note: "Starting price for treatment setup" },
    { title: "Veneers", price: "from $380", note: "Per tooth after consultation" },
  ],
  whyUs: [
    "A clean medical look that supports trust without feeling cold or outdated",
    "Doctors who explain treatment clearly and keep the process easy to follow",
    "Transparent pricing cues and a consultation-led approach for new patients",
    "A simple WhatsApp contact path that works well for international and local inquiries",
    "A modern clinic tone designed for both individual patients and families",
  ],
  gallery: [
    { title: "Clean clinic environment", caption: "A polished placeholder for modern medical space" },
    { title: "Consultation flow", caption: "Visual rhythm built around clarity and structure" },
    { title: "Smile care details", caption: "A refined look without exaggerated promises" },
    { title: "Family-friendly care", caption: "A calm and accessible clinic experience" },
  ],
  reviews: [
    {
      author: "Michael, 36",
      text: "The layout feels clear and professional, and I immediately understand what kind of clinic this is. It gives the impression of a well-run, modern practice.",
      meta: "Dental checkup",
    },
    {
      author: "Sara, 42",
      text: "I like how the consultation path is presented. The clinic feels trustworthy, and the pricing section looks realistic and easy to scan.",
      meta: "Teeth cleaning",
    },
    {
      author: "Daniel and family",
      text: "This page feels calm, modern, and organized. It would make it much easier for us to reach out and book an initial consultation.",
      meta: "Family inquiry",
    },
  ],
  ctaTitle: "Need a clear starting point for treatment?",
  ctaDescription:
    "Send us a WhatsApp message and we will help you book a consultation, choose the right doctor, and understand the next steps.",
  contacts: {
    address: "Your City, Downtown",
    phone: "+1 (000) 000-0000",
    instagram: "@dentanova.demo",
    schedule: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat: 10:00 AM - 5:00 PM", "Sun: Closed"],
  },
  ui: englishDentalUi,
};
