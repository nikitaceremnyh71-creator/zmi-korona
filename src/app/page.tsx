import Image from "next/image";
import {
  ArrowDown,
  Factory,
  FileText,
  Hammer,
  Mail,
  Phone,
  SprayCan,
  Truck,
} from "lucide-react";
import { Gallery } from "@/components/portfolio/gallery";
import { company, featuredItem } from "@/lib/portfolio";

const STATS = [
  { value: company.yearsOnMarket, label: "лет на рынке" },
  { value: company.completedOrders, label: "выполненных заказов" },
  { value: "100%", label: "собственное производство" },
];

const CAPABILITIES = [
  {
    icon: FileText,
    title: "Чертёж и ТЗ заказчика",
    text: "Изготавливаем по чертежам и техническому заданию заказчика. Уточним детали и посчитаем стоимость.",
  },
  {
    icon: Hammer,
    title: "Изготовление",
    text: "Резка, гибка, сварка и сборка металла в собственном цехе с контролем качества на каждом этапе.",
  },
  {
    icon: SprayCan,
    title: "Порошковая окраска",
    text: "Подготовка поверхности и окраска в любой цвет по каталогу RAL. Покрытие не боится влаги и мороза.",
  },
  {
    icon: Truck,
    title: "Доставка и монтаж",
    text: "Привезём конструкцию на объект и выполним монтаж под ключ — с гарантией на работы.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-zinc-950 text-zinc-100">
      {/* ===== Шапка ===== */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-zinc-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Наверх">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-black">
              <Factory className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[13px] font-extrabold uppercase tracking-wide text-white sm:text-base">
                {company.shortName}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-amber-400 sm:text-[11px]">
                Завод металлических изделий
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Основная навигация"
          >
            <a
              href="#portfolio"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-amber-400"
            >
              Наши работы
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-amber-400"
            >
              Как мы работаем
            </a>
            <a
              href="#contacts"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-amber-400"
            >
              Контакты
            </a>
          </nav>

          <a
            href="#contacts"
            aria-label="Обсудить заказ"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-black transition-colors hover:bg-amber-400 sm:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#contacts"
            className="hidden h-10 shrink-0 items-center rounded-lg bg-amber-500 px-4 text-sm font-bold text-black transition-colors hover:bg-amber-400 sm:inline-flex"
          >
            Обсудить заказ
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ===== Hero ===== */}
        <section
          id="top"
          className="relative flex min-h-svh items-center overflow-hidden"
        >
          <Image
            src={featuredItem.src}
            alt="Ворота с элементами художественной ковки — работа Завода металлических изделий «Корона»"
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-950/40 to-transparent" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              {company.name}
            </span>

            <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
              Изготавливаем металлоконструкции{" "}
              <span className="text-amber-400">по чертежам заказчика</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Собственное производство полного цикла: сварка, гибка, порошковая
              окраска и монтаж. Изготовление по чертежам и техническому
              заданию заказчика — от одной секции забора до
              крупногабаритных каркасов.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#portfolio"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 text-base font-bold text-black transition-colors hover:bg-amber-400"
              >
                Смотреть работы
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={company.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 text-base font-bold text-white backdrop-blur-sm transition-colors hover:border-amber-500/60 hover:text-amber-400"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-8 sm:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-extrabold text-amber-400 sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-zinc-400 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== Галерея ===== */}
        <section id="portfolio" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                Наши работы
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Портфолио выполненных заказов
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Нажмите на фотографию, чтобы открыть её на весь экран и листать
                галерею. Это далеко не все работы — портфолио регулярно
                пополняется, полный архив проектов вышлем по запросу.
              </p>
            </div>

            <Gallery />
          </div>
        </section>

        {/* ===== Как мы работаем ===== */}
        <section
          id="process"
          className="scroll-mt-20 border-t border-white/10 bg-zinc-900/40 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                Схема работы
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Как мы работаем
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Изготавливаем по чертежам и техническому заданию заказчика.
                Вы даёте документацию, мы отвечаем за качество металла,
                сварки и сроков.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CAPABILITIES.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 transition-colors duration-300 hover:border-amber-500/40"
                >
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                    <capability.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {capability.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Контакты / CTA ===== */}
        <section id="contacts" className="scroll-mt-20 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 px-6 py-14 text-center sm:px-12">
              <div
                className="absolute -top-24 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Обсудим ваш заказ?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
                  Пришлите чертёж или техническое задание — посчитаем стоимость,
                  подскажем по материалам и вышлем примеры похожих работ из
                  нашего архива.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={company.phoneHref}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 text-base font-bold text-black transition-colors hover:bg-amber-400 sm:w-auto"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    {company.phoneDisplay}
                  </a>
                  <a
                    href={company.emailHref}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 text-base font-bold text-white transition-colors hover:border-amber-500/60 hover:text-amber-400 sm:w-auto"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    {company.email}
                  </a>
                </div>

                <p className="mt-6 text-sm text-zinc-500">
                  {company.name} · Работаем с юридическими и физическими лицами
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Подвал ===== */}
      <footer className="mt-auto border-t border-white/10 bg-zinc-950 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-500 text-black">
              <Factory className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} {company.name} · Изготовление
              металлоконструкций
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-amber-400"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a
              href={company.emailHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-amber-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {company.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
