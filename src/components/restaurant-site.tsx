"use client";

import { motion, type Variants } from "framer-motion";
import { useMemo, useState } from "react";
import { Language, translations } from "@/lib/translations";

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55 },
  },
};

const listStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemReveal: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

export function RestaurantSite() {
  const [lang, setLang] = useState<Language>("en");
  const t = useMemo(() => translations[lang], [lang]);

  return (
    <main className="texture-bg min-h-screen text-[#1e1a12]">
      <header className="sticky top-0 z-50 border-b border-[#9E2A2B]/20 bg-[#FDF0D5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#9E2A2B] sm:text-base">
            {t.nav.brand}
          </p>
          <nav className="hidden items-center gap-4 text-sm font-semibold text-[#386641] md:flex">
            <a href="#about">{t.nav.about}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#love">{t.nav.love}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <LanguageToggle lang={lang} onToggle={setLang} />
        </div>
      </header>

      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-20">
        <div className="decorative-circle left-[-50px] top-10 h-36 w-36 bg-[#F77F00]" />
        <div className="decorative-circle right-[-40px] top-24 h-44 w-44 bg-[#386641]" />
        <div className="decorative-circle bottom-2 left-1/2 h-28 w-28 -translate-x-1/2 bg-[#FCBF49]" />

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          animate="show"
          className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2"
        >
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65 }}
              className="max-w-xl text-4xl font-black uppercase leading-tight text-[#9E2A2B] sm:text-5xl lg:text-6xl"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg font-medium text-[#386641] sm:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex rounded-full bg-[#9E2A2B] px-7 py-3 text-sm font-bold uppercase tracking-wide text-[#FDF0D5] shadow-lg transition-shadow hover:shadow-xl"
            >
              {t.hero.cta}
            </motion.a>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            className="relative h-80 rounded-3xl border-4 border-[#9E2A2B]/70 bg-gradient-to-br from-[#F77F00] via-[#FCBF49] to-[#386641] p-4 shadow-[0_20px_45px_rgba(158,42,43,0.3)] sm:h-96"
          >
            <div className="h-full rounded-2xl border-2 border-dashed border-[#FDF0D5]/70 bg-[#FDF0D5]/15 p-6">
              <div className="h-full rounded-xl bg-[#FDF0D5]/30 backdrop-blur-[2px]" />
            </div>
            <p className="absolute bottom-5 left-0 right-0 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#FDF0D5]">
              Image Placeholder
            </p>
          </motion.div>
        </motion.div>
      </section>

      <AnimatedSection id="about">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <PlaceholderImage />
          <div className="space-y-4">
            <SectionTitle>{t.about.title}</SectionTitle>
            <p className="text-base leading-relaxed text-[#2f3328] sm:text-lg">
              {t.about.body}
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="menu">
        <div className="space-y-8">
          <SectionTitle>{t.menu.title}</SectionTitle>
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            <MenuCard
              title={t.menu.tacosTitle}
              body={t.menu.tacosDescription}
              items={t.menu.tacosItems}
              imageLabel="Taco Board"
            />
            <MenuCard
              title={t.menu.sidesTitle}
              body={t.menu.sidesDescription}
              items={[]}
              imageLabel="Elote Tray"
            />
            <MenuCard
              title={t.menu.drinksTitle}
              body=""
              items={t.menu.drinksItems}
              imageLabel="Drinks Stand"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="love">
        <div className="space-y-8">
          <SectionTitle>{t.love.title}</SectionTitle>
          <motion.div
            variants={listStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {t.love.items.map((item) => (
              <motion.article
                key={item}
                variants={itemReveal}
                whileHover={{ y: -5, scale: 1.03 }}
                className="rounded-2xl border-2 border-[#386641]/30 bg-[#FCBF49]/40 p-6 text-center shadow-md"
              >
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-[#9E2A2B] ring-4 ring-[#FDF0D5]">
                  <span className="sr-only">icon</span>
                </div>
                <p className="text-lg font-bold text-[#9E2A2B]">{item}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="experience">
        <div className="rounded-3xl border-2 border-[#9E2A2B]/25 bg-[#F77F00]/20 p-8 text-center sm:p-12">
          <SectionTitle>{t.experience.title}</SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#2f3328]">
            {t.experience.body}
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact">
        <div className="rounded-3xl bg-[#386641] p-8 text-center text-[#FDF0D5] sm:p-12">
          <h3 className="text-3xl font-black uppercase sm:text-4xl">{t.cta.title}</h3>
          <p className="mt-3 text-lg">{t.cta.subtitle}</p>
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7 rounded-full bg-[#FCBF49] px-8 py-3 font-bold uppercase tracking-wide text-[#1e1a12]"
          >
            {t.cta.button}
          </motion.button>
        </div>
      </AnimatedSection>

      <footer className="border-t border-[#9E2A2B]/20 bg-[#9E2A2B] px-4 py-10 text-[#FDF0D5] sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">{t.footer.location}</p>
            <p>{t.footer.phone}</p>
          </div>
          <LanguageToggle lang={lang} onToggle={setLang} inverse />
          <p className="text-sm opacity-90">© Mi Rey {t.footer.rights}</p>
        </div>
      </footer>
    </main>
  );
}

function AnimatedSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section
      id={id}
      variants={sectionReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="text-3xl font-black uppercase text-[#9E2A2B] sm:text-4xl"
    >
      {children}
    </motion.h2>
  );
}

function MenuCard({
  title,
  items,
  body,
  imageLabel,
}: {
  title: string;
  items: string[];
  body: string;
  imageLabel: string;
}) {
  return (
    <motion.article
      variants={itemReveal}
      whileHover={{ y: -6, scale: 1.02 }}
      className="rounded-2xl border-2 border-[#9E2A2B]/20 bg-[#FDF0D5] p-4 shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="mb-4 h-36 rounded-xl bg-gradient-to-r from-[#F77F00] to-[#FCBF49] p-[2px]">
        <div className="flex h-full items-center justify-center rounded-[10px] border border-dashed border-[#9E2A2B]/40 bg-[#FDF0D5]/80">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#9E2A2B]">
            {imageLabel}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-black uppercase text-[#386641]">{title}</h3>
      {body ? <p className="mt-2 text-sm text-[#2f3328]">{body}</p> : null}
      {items.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li key={item} className="font-semibold text-[#9E2A2B]">
              • {item}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}

function PlaceholderImage() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-72 rounded-3xl border-4 border-[#386641]/60 bg-gradient-to-br from-[#386641] via-[#F77F00] to-[#FCBF49] p-4 shadow-[0_18px_35px_rgba(56,102,65,0.25)]"
    >
      <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-[#FDF0D5]/70 bg-[#FDF0D5]/20">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FDF0D5]">
          Image Placeholder
        </p>
      </div>
    </motion.div>
  );
}

function LanguageToggle({
  lang,
  onToggle,
  inverse = false,
}: {
  lang: Language;
  onToggle: (value: Language) => void;
  inverse?: boolean;
}) {
  const base = inverse
    ? "border-[#FDF0D5]/70 bg-[#FDF0D5]/10"
    : "border-[#9E2A2B]/30 bg-[#FDF0D5]";
  const active = inverse
    ? "bg-[#FCBF49] text-[#1e1a12]"
    : "bg-[#9E2A2B] text-[#FDF0D5]";
  const inactive = inverse ? "text-[#FDF0D5]" : "text-[#386641]";

  return (
    <div className={`flex items-center rounded-full border p-1 ${base}`}>
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          onClick={() => onToggle(code)}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-transform hover:scale-105 sm:text-sm ${
            lang === code ? active : inactive
          }`}
          type="button"
        >
          {code === "en" ? "EN" : "ES"}
        </button>
      ))}
    </div>
  );
}
