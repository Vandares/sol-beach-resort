/**
 * Bilingual content for SOL Beach Resort.
 *
 * Every English and Arabic string below is taken from the client's own
 * company profile (Profile Company sol 26-4.pdf) or verified sources
 * (Google Business Profile, the client directly). Nothing here is invented.
 */

export type Locale = "en" | "ar";

export const LOCALES: Locale[] = ["en", "ar"];

export const CONTACT = {
  email: "pr1@bna-sa.com",
  phoneDisplay: "+966 50 201 2345",
  phoneHref: "+966502012345",
  whatsapp: "966502012345",
  instagram: "https://instagram.com/solbeachsa",
  tiktok: "https://tiktok.com/@solbeachsa",
  menu: "https://solmenu.vercel.app",
  azul: "https://azul-diving-club.vercel.app",
  maps: "https://maps.google.com/?q=Sol+Beach+Resort+Jeddah",
  plusCode: "P3M9+WV",
  rating: "4.3",
  reviewCount: "1,100",
  azulRating: "4.9",
  azulReviews: "130",
} as const;

/** id maps to the image filename in src/assets/img */
export const FACILITY_IMAGES: Record<string, string> = {
  beach: "azul-beachfront",
  pools: "pools-1",
  units: "units-2",
  salon: "salon-interior",
  diwaniyah: "diwaniyah-lounge",
  gym: "gym-2",
  nightshift: "nightshift-2",
  padel: "padel-4",
  volleyball: "volleyball",
  kids: "kids-area",
  kitchen: "lifestyle-morning-calm",
};

/**
 * Unit specifications, taken verbatim from the five unit documents linked on
 * linktr.ee/solbeachresort. Ordered largest to smallest.
 */
export const UNITS = [
  { id: "villa", area: 110, shots: 3 },
  { id: "two-bed", area: 85, shots: 3 },
  { id: "exec", area: 60, shots: 2 },
  { id: "grand", area: 46, shots: 2 },
  { id: "one-bed", area: 45, shots: 3 },
] as const;

export type UnitId = (typeof UNITS)[number]["id"];

export const FACILITY_ORDER = [
  "beach", "pools", "units", "salon", "diwaniyah", "gym",
  "nightshift", "padel", "volleyball", "kids", "kitchen",
] as const;

type Dict = {
  dir: "ltr" | "rtl";
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { about: string; facilities: string; membership: string; contact: string; menu: string };
  skip: string;
  langSwitch: string;
  hero: {
    headline: string;
    alt: string;
    lede: string;
    primary: string;
    secondary: string;
  };
  about: {
    title: string;
    alt: string;
    body: string;
    vision: { title: string; body: string };
    mission: { title: string; body: string };
  };
  manifesto: { line: string; attribution: string };
  beliefs: { title: string; alt: string; lede: string; items: string[] };
  facilities: {
    title: string;
    alt: string;
    lede: string;
    hint: string;
    items: Record<string, { name: string; body: string }>;
  };
  azul: {
    surface: string;
    title: string;
    alt: string;
    body: string;
    reef: string;
    stat: string;
    cta: string;
  };
  night: {
    title: string;
    alt: string;
    body: string;
    areas: { name: string; body: string }[];
  };
  reviews: { title: string; alt: string; stat: string; items: { quote: string; name: string }[] };
  units: {
    title: string;
    alt: string;
    lede: string;
    areaLabel: string;
    note: string;
    items: Record<string, { name: string; rooms: string[] }>;
  };
  membership: {
    title: string;
    alt: string;
    body: string;
    tiersLabel: string;
    tiers: { name: string; capacity: string }[];
    unitsLabel: string;
    units: string[];
    rulesLabel: string;
    rules: string[];
    note: string;
    cta: string;
    secondary: string;
  };
  visit: {
    title: string;
    alt: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hours: string;
    contactLabel: string;
    directions: string;
  };
  footer: { tagline: string; follow: string; rights: string; powered: string };
};

const en: Dict = {
  dir: "ltr",
  htmlLang: "en",
  meta: {
    title: "SOL Beach Resort | Private Beachfront Community, Jeddah",
    description:
      "SOL is a private beachfront community on the Jeddah coast. Annual membership, 35,610 square metres, diving with Azul, and a life lived at a different pace.",
  },
  nav: {
    about: "About",
    facilities: "Facilities",
    membership: "Membership",
    contact: "Contact",
    menu: "Menu",
  },
  skip: "Skip to content",
  langSwitch: "العربية",
  hero: {
    headline: "A life you choose to live.",
    alt: "حياة تختار أن تعيشها",
    lede: "A private beachfront community on the Jeddah coast, established 2021.",
    primary: "Apply for Membership",
    secondary: "Explore SOL",
  },
  about: {
    title: "Who We Are",
    alt: "من نحن",
    body: "SOL Beach Resort is a private beachfront community designed for those seeking a refined, calm, and enduring way of living. Here the experience is not measured in days, but in the quality of life lived every day. SOL brings together a carefully selected community that shares the same values, rhythm, and appreciation for privacy and detail.",
    vision: {
      title: "Our Vision",
      body: "To redefine refined living through a private coastal community, setting a new benchmark for integrated lifestyle experiences in the Kingdom.",
    },
    mission: {
      title: "Our Mission",
      body: "To deliver an integrated lifestyle experience centered on privacy, comfort, and community, thoughtfully designed to support our members within a refined and balanced environment.",
    },
  },
  manifesto: {
    line: "SOL is not a place you visit, it is a life you choose to live.",
    attribution: "سول ليست مكانًا تزوره، بل حياة تختار أن تعيشها",
  },
  beliefs: {
    title: "Life at SOL",
    alt: "أسلوب الحياة في سول",
    lede: "Life at SOL moves at a different pace. Calm mornings, open spaces, and an environment that balances connection with privacy.",
    items: [
      "Privacy is the foundation of daily living",
      "A harmonious community is a true value",
      "Calm is a way of life",
      "Thoughtful details make all the difference",
    ],
  },
  facilities: {
    title: "Experiences at SOL",
    alt: "التجارب في سول",
    lede: "Thirty five thousand square metres of coast, and everything on it built to be lived in rather than looked at.",
    hint: "Drag or scroll",
    items: {
      beach: { name: "Beach & Lagoon", body: "Private shoreline and a clear lagoon on the Red Sea." },
      pools: { name: "Pools", body: "Open water through the day, lit through the evening." },
      units: { name: "Units", body: "Villa, suite, double studio and single studio." },
      salon: { name: "The Salon", body: "A complete personal care experience in a private setting." },
      diwaniyah: { name: "Diwaniyah", body: "Modern warmth built for meetings and gatherings." },
      gym: { name: "The Gym", body: "Modern equipment, calm surroundings, room to focus." },
      nightshift: { name: "Night Shift", body: "The evening side of SOL, in full neon." },
      padel: { name: "Padel Court", body: "Sport and social interaction on the same court." },
      volleyball: { name: "Volleyball Court", body: "A beach court that keeps the day moving." },
      kids: { name: "Kids' Area", body: "Safe and engaging, so parents can be at ease." },
      kitchen: { name: "Sol Beach Kitchen", body: "Fourteen menus, from the morning table to the last cold drink." },
    },
  },
  azul: {
    surface: "Above the surface, SOL.",
    title: "Below it, Azul.",
    alt: "أزول دايفينغ كلوب",
    body: "Azul Diving Club is dedicated to sea enthusiasts, where diving becomes a shared way of life, shaped by passion and experience. Its own training pools, private beach entry, and certified captains sit inside the same gate as everything else at SOL.",
    reef: "Sculptures rest on the seabed so coral can take hold of them. Over time they become a reef you can swim through.",
    stat: "PADI Five Star Dive Center",
    cta: "Visit Azul Diving Club",
  },
  night: {
    title: "Night Shift",
    alt: "نايت شفت في سول",
    body: "An evening experience designed to offer a distinctive atmosphere within SOL, where evenings turn into refined social moments in a private and fully integrated setting.",
    areas: [
      { name: "Lounging Area", body: "Comfortable seating for the evening atmosphere." },
      { name: "Gaming Area", body: "A dedicated entertainment zone for friends and groups." },
      { name: "Bowling Area", body: "Movement and noise, in the best way." },
      { name: "Drink Bar", body: "A curated bar that sets the social tone of the night." },
      { name: "Stage", body: "Live performances and activities." },
      { name: "A.K.A Naughty Corner", body: "A distinctive corner with a playful edge." },
    ],
  },
  reviews: {
    title: "What members say",
    alt: "آراء الأعضاء",
    stat: "rated by",
    items: [
      {
        quote:
          "Ladies Day at Sol Beach was an amazing experience. The staff were incredibly welcoming, and the beach was pristine and beautiful.",
        name: "Joud A.",
      },
      {
        quote:
          "In my opinion the best, cleanest beach resort in Jeddah. This is where I like to spend my weekends.",
        name: "Raniah M.",
      },
      {
        quote:
          "I would highly recommend this beach to anyone who is looking for a good beach and family vibes.",
        name: "Sara Al-Shammari",
      },
    ],
  },
  units: {
    title: "The Units",
    alt: "الوحدات",
    lede: "Five layouts, from a forty five square metre apartment to a three bedroom villa. Every one is built for privacy and finished to the same standard.",
    areaLabel: "m²",
    note: "Units are unfurnished. The furniture shown is for illustration only.",
    items: {
      villa: {
        name: "Villa",
        rooms: ["Three bedrooms", "Living room", "Sitting area", "Kitchenette", "Three restrooms"],
      },
      "two-bed": {
        name: "Two-Bedroom Apartment",
        rooms: ["One bedroom and one living room", "Two restrooms", "Kitchenette", "Balcony"],
      },
      exec: {
        name: "Executive Suite",
        rooms: ["Living room", "Kitchenette", "Balcony"],
      },
      grand: {
        name: "Grand Studio",
        rooms: ["Living room", "Kitchenette", "Balcony"],
      },
      "one-bed": {
        name: "One-Bedroom Apartment",
        rooms: ["One bedroom", "Living room", "Sitting area", "Kitchenette"],
      },
    },
  },
  membership: {
    title: "Membership",
    alt: "العضوية",
    body: "SOL operates through an annual membership model to ensure privacy and consistency of experience. Membership represents belonging to a complete lifestyle.",
    tiersLabel: "Membership options",
    tiers: [
      { name: "Couples", capacity: "One gentleman and one lady" },
      { name: "Ladies", capacity: "Two to four ladies" },
      { name: "Solo", capacity: "One person" },
      { name: "Weekdays Access", capacity: "One gentleman and one lady, or two ladies" },
    ],
    unitsLabel: "Unit options",
    units: [
      "Villa",
      "Two-Bedroom Apartment",
      "One-Bedroom Apartment",
      "Grand Studio",
      "Executive Suite",
    ],
    rulesLabel: "How membership works",
    rules: [
      "Entry is through the guest entry office.",
      "Members show their membership against ID on arrival.",
      "Members enter ahead of guests.",
      "One upfront payment, plus a refundable safety deposit.",
    ],
    note: "Applications are reviewed individually. Submitting one does not create a binding agreement.",
    cta: "Apply for Membership",
    secondary: "Ask a question",
  },
  visit: {
    title: "Find us",
    alt: "الموقع",
    addressLabel: "Address",
    address:
      "Sol Resort, 6998 Prince Abdullah Al Faisal Street, Abhur Ash Shamaliyah District, Jeddah 23812, Saudi Arabia",
    hoursLabel: "Open hours",
    hours: "Every day, 8:00 to 23:30",
    contactLabel: "Contact",
    directions: "Get directions",
  },
  footer: {
    tagline: "Let your SOL shine as bright as the sun",
    follow: "Follow",
    rights: "All rights reserved.",
    powered: "Powered by SOL Beach Resort 2026",
  },
};

const ar: Dict = {
  dir: "rtl",
  htmlLang: "ar",
  meta: {
    title: "سول بيتش ريزورت | منتجع شاطئي خاص، جدة",
    description:
      "سول منتجع شاطئي خاص على ساحل جدة. عضوية سنوية، مساحة 35,610 متر مربع، والغوص مع أزول، وحياة تسير بإيقاع مختلف.",
  },
  nav: {
    about: "من نحن",
    facilities: "المرافق",
    membership: "العضوية",
    contact: "تواصل",
    menu: "المنيو",
  },
  skip: "تخطي إلى المحتوى",
  langSwitch: "English",
  hero: {
    headline: "حياة تختار أن تعيشها",
    alt: "A life you choose to live",
    lede: "منتجع شاطئي خاص على ساحل جدة، تأسس عام ٢٠٢١.",
    primary: "طلب العضوية",
    secondary: "اكتشف سول",
  },
  about: {
    title: "من نحن",
    alt: "Who We Are",
    body: "سول بيتش ريزورت هو منتجع شاطئي خاص صُمّم ليكون مجتمعًا متكاملًا لمن يبحث عن أسلوب حياة راقٍ هادئ ومستمر. هنا، لا تُقاس التجربة بعدد الأيام بل بجودة الحياة التي تعيشها يومًا بعد يوم. سول مساحة مختارة بعناية، تجمع أفرادًا يشتركون في نفس القيم، ونفس الإيقاع، ونفس تقدير الخصوصية والتفاصيل.",
    vision: {
      title: "رؤيتنا",
      body: "إعادة تعريف مفهوم الحياة الراقية من خلال مجتمع ساحلي خاص يضع معيارًا جديدًا لتجربة العيش المتكاملة في المملكة.",
    },
    mission: {
      title: "رسالتنا",
      body: "تقديم أسلوب حياة متكامل يرتكز على الخصوصية والراحة، ويُلبي احتياجات الأعضاء ضمن بيئة راقية ومتوازنة، صُممت بعناية لتعكس جودة العيش وهدوء التفاصيل.",
    },
  },
  manifesto: {
    line: "سول ليست مكانًا تزوره، بل حياة تختار أن تعيشها",
    attribution: "SOL is not a place you visit, it is a life you choose to live",
  },
  beliefs: {
    title: "أسلوب الحياة في سول",
    alt: "Life at SOL",
    lede: "في سول، تسير الحياة بإيقاع مختلف. صباحات هادئة، ومساحات مفتوحة، وأجواء تمنحك التوازن بين التواصل والخصوصية.",
    items: [
      "الخصوصية كأساس للحياة اليومية",
      "المجتمع المتناغم كقيمة حقيقية",
      "الهدوء كأسلوب حياة",
      "التفاصيل المدروسة التي تصنع الفرق",
    ],
  },
  facilities: {
    title: "التجارب في سول",
    alt: "Experiences at SOL",
    lede: "خمسة وثلاثون ألف متر مربع من الساحل، وكل ما فيها مصمم لتُعاش لا لتُشاهد.",
    hint: "اسحب أو مرر",
    items: {
      beach: { name: "الشاطئ واللاجون", body: "شاطئ خاص ولاجون صافٍ على البحر الأحمر." },
      pools: { name: "المسابح", body: "مياه مفتوحة طوال النهار، ومضاءة طوال المساء." },
      units: { name: "الوحدات", body: "فيلا، وجناح، وستوديو مزدوج، وستوديو مفرد." },
      salon: { name: "الصالون", body: "تجربة عناية متكاملة في مساحة تراعي الخصوصية." },
      diwaniyah: { name: "الديوانية", body: "دفء عصري مصمم للاجتماعات والجلسات." },
      gym: { name: "الجيم", body: "أحدث الأجهزة، وأجواء هادئة تشجّع على التركيز." },
      nightshift: { name: "نايت شفت", body: "الوجه المسائي لسول، بكامل النيون." },
      padel: { name: "ملعب البادل", body: "رياضة وتفاعل اجتماعي على الملعب نفسه." },
      volleyball: { name: "ملعب الكرة الطائرة", body: "ملعب شاطئي يبقي اليوم في حركة." },
      kids: { name: "ألعاب الأطفال", body: "مساحة آمنة وممتعة تمنح الأهل راحة وطمأنينة." },
      kitchen: { name: "مطبخ سول", body: "أربعة عشر قسمًا، من مائدة الصباح إلى آخر مشروب بارد." },
    },
  },
  azul: {
    surface: "فوق السطح، سول.",
    title: "وتحته، أزول.",
    alt: "Azul Diving Club",
    body: "أزول دايفينغ كلوب مساحة مخصّصة لعشّاق البحر، حيث يتحوّل الغوص إلى أسلوب حياة مشترك يجمع الشغف والتجربة. مسابح تدريب خاصة، ومدخل شاطئي مباشر، وكابتن معتمدون، كلها داخل البوابة نفسها.",
    reef: "تماثيل وُضعت في الأعماق ليتمكن المرجان من النمو عليها. مع الوقت تتحوّل إلى شعاب حيّة يمكنك السباحة بينها.",
    stat: "مركز غوص خمس نجوم معتمد من PADI",
    cta: "زيارة أزول دايفينغ كلوب",
  },
  night: {
    title: "نايت شفت",
    alt: "Night Shift",
    body: "تجربة مسائية مصممة لتقديم أجواء مميزة ومختلفة في سول، وتتحوّل الأمسيات إلى لحظات اجتماعية راقية ضمن بيئة خاصة ومتكاملة.",
    areas: [
      { name: "منطقة الجلوس", body: "مساحة مريحة للاستمتاع بالأجواء المسائية بهدوء." },
      { name: "منطقة الألعاب", body: "منطقة ترفيه مخصصة للأصدقاء والمجموعات." },
      { name: "منطقة البولينغ", body: "حركة ومرح يضيفان جانبًا من الترفيه." },
      { name: "بار المشروبات", body: "بار يقدم خيارات متنوعة تُكمّل أجواء السهرة." },
      { name: "المسرح", body: "منصة مخصصة للعروض والفعاليات." },
      { name: "الناوتي كورنر", body: "ركن مميز بطابع غير تقليدي." },
    ],
  },
  reviews: {
    title: "ماذا يقول الأعضاء",
    alt: "Member reviews",
    stat: "تقييم من",
    items: [
      {
        quote:
          "Ladies Day at Sol Beach was an amazing experience. The staff were incredibly welcoming, and the beach was pristine and beautiful.",
        name: "جود أ.",
      },
      {
        quote:
          "In my opinion the best, cleanest beach resort in Jeddah. This is where I like to spend my weekends.",
        name: "رانية م.",
      },
      {
        quote:
          "I would highly recommend this beach to anyone who is looking for a good beach and family vibes.",
        name: "سارة الشمري",
      },
    ],
  },
  units: {
    title: "الوحدات",
    alt: "The Units",
    lede: "خمسة تصاميم، من شقة بمساحة خمسة وأربعين مترًا إلى فيلا بثلاث غرف نوم. كلها مبنية للخصوصية وبمستوى تنفيذ واحد.",
    areaLabel: "م²",
    note: "الوحدات غير مفروشة، والأثاث الظاهر في الصور لأغراض التوضيح فقط.",
    items: {
      villa: {
        name: "فيلا",
        rooms: ["ثلاث غرف نوم", "غرفة معيشة", "منطقة جلوس", "مطبخ صغير", "ثلاث دورات مياه"],
      },
      "two-bed": {
        name: "شقة بغرفتي نوم",
        rooms: ["غرفة نوم وغرفة معيشة", "دورتا مياه", "مطبخ صغير", "بلكونة"],
      },
      exec: {
        name: "جناح تنفيذي",
        rooms: ["غرفة معيشة", "مطبخ صغير", "بلكونة"],
      },
      grand: {
        name: "ستوديو جراند",
        rooms: ["غرفة معيشة", "مطبخ صغير", "بلكونة"],
      },
      "one-bed": {
        name: "شقة بغرفة نوم",
        rooms: ["غرفة نوم", "غرفة معيشة", "منطقة جلوس", "مطبخ صغير"],
      },
    },
  },
  membership: {
    title: "العضوية",
    alt: "Membership",
    body: "تعتمد سول نظام العضوية السنوية للحفاظ على خصوصية المجتمع وجودة التجربة. العضوية تعني الانتماء إلى أسلوب حياة متكامل.",
    tiersLabel: "خيارات العضوية",
    tiers: [
      { name: "للأزواج", capacity: "سيد وسيدة" },
      { name: "للسيدات", capacity: "من سيدتين إلى أربع سيدات" },
      { name: "فردية", capacity: "شخص واحد" },
      { name: "أيام الأسبوع", capacity: "سيد وسيدة، أو سيدتان" },
    ],
    unitsLabel: "خيارات الوحدات",
    units: ["فيلا", "شقة بغرفتي نوم", "شقة بغرفة نوم", "ستوديو جراند", "جناح تنفيذي"],
    rulesLabel: "كيف تعمل العضوية",
    rules: [
      "يتم الدخول عن طريق مكتب الزوار.",
      "يشترط إبراز بطاقة العضوية ومطابقتها مع الهوية عند الدخول.",
      "تكون الأولوية للأعضاء بالدخول قبل الزوار.",
      "تدفع دفعة واحدة، إضافة إلى مبلغ تأمين مسترد.",
    ],
    note: "تُراجع الطلبات بشكل فردي، وتقديم الطلب لا يُنشئ اتفاقًا ملزمًا.",
    cta: "طلب العضوية",
    secondary: "اسأل سؤالًا",
  },
  visit: {
    title: "الموقع",
    alt: "Find us",
    addressLabel: "العنوان",
    address:
      "منتجع سول، ٦٩٩٨ شارع الأمير عبدالله الفيصل، حي أبحر الشمالية، جدة ٢٣٨١٢، المملكة العربية السعودية",
    hoursLabel: "ساعات العمل",
    hours: "يوميًا، من ٨:٠٠ صباحًا حتى ١١:٣٠ مساءً",
    contactLabel: "للتواصل",
    directions: "الاتجاهات",
  },
  footer: {
    tagline: "دع سولك يشرق بلمعان الشمس",
    follow: "تابعنا",
    rights: "جميع الحقوق محفوظة.",
    powered: "Powered by SOL Beach Resort 2026",
  },
};

export const CONTENT: Record<Locale, Dict> = { en, ar };

export function t(locale: Locale) {
  return CONTENT[locale];
}

/** Locale-aware href. English lives at the root, Arabic under /ar. */
export function path(locale: Locale, to = "/") {
  const clean = to.startsWith("/") ? to : `/${to}`;
  return locale === "en" ? clean : `/ar${clean === "/" ? "" : clean}`;
}
