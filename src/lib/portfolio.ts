export type CategoryKey =
  | "railings"
  | "fences"
  | "frames"
  | "city";

export type FilterKey = "all" | CategoryKey;

export interface PortfolioCategory {
  key: FilterKey;
  label: string;
}

export interface PortfolioItem {
  id: string;
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
  category: CategoryKey;
}

export const company = {
  name: "Завод металлических изделий «Корона»",
  shortName: "ЗМИ «Корона»",
  tagline: "Изготовление металлоконструкций",
  phoneDisplay: "8 982 253-20-43",
  phoneHref: "tel:+79822532043",
  email: "met@zmikorona.ru",
  emailHref: "mailto:met@zmikorona.ru",
  yearsOnMarket: "10+",
  completedOrders: "200+",
};

export const categories: PortfolioCategory[] = [
  { key: "all", label: "Все работы" },
  { key: "railings", label: "Перила и ограждения" },
  { key: "fences", label: "Заборы и ворота" },
  { key: "frames", label: "Каркасные конструкции" },
  { key: "city", label: "Благоустройство" },
];

export function getCategoryLabel(key: CategoryKey): string {
  return categories.find((c) => c.key === key)?.label ?? key;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "gates-red",
    src: "/portfolio/gates-red.jpg",
    width: 1920,
    height: 1440,
    title: "Ворота с элементами ковки",
    description:
      "Распашные ворота и секция забора: каркас из профильной трубы, профнастил, кованые завитки и цветочные композиции. Окраска в цвет по каталогу RAL.",
    category: "fences",
  },
  {
    id: "fence-night",
    src: "/portfolio/fence-night.jpg",
    width: 1920,
    height: 1080,
    title: "Ограждение территории с фонарями",
    description:
      "Секционное ограждение с элементами художественной ковки и уличным освещением по периметру объекта.",
    category: "fences",
  },
  {
    id: "fence-spikes",
    src: "/portfolio/fence-spikes.jpg",
    width: 1920,
    height: 1440,
    title: "Секции забора с пиками",
    description:
      "Производство секций забора: вертикальное заполнение, декоративные пики и завитки ручной гибки.",
    category: "fences",
  },
  {
    id: "fence-sections",
    src: "/portfolio/fence-sections.jpg",
    width: 1920,
    height: 1920,
    title: "Партия секций забора",
    description:
      "Серийное изготовление секций забора с последующей окраской в любой цвет по каталогу RAL.",
    category: "fences",
  },
  {
    id: "fence-workshop",
    src: "/portfolio/fence-workshop.jpg",
    width: 1440,
    height: 1920,
    title: "Декоративные секции в производстве",
    description:
      "Изготовление кованых секций забора в собственном цехе: гибка, сварка и контроль геометрии каждой секции.",
    category: "fences",
  },
  {
    id: "forging-details",
    src: "/portfolio/forging-details.jpg",
    width: 1600,
    height: 800,
    title: "Элементы художественной ковки",
    description:
      "Кованые композиции для ограждений, ворот и перил: волнистые пояса, завитки, цветочные орнаменты.",
    category: "fences",
  },
  {
    id: "stair-railing",
    src: "/portfolio/stair-railing.jpg",
    width: 1440,
    height: 1920,
    title: "Кованые перила лестницы",
    description:
      "Ограждение лестничного марша с ковкой ручной гибки и порошковой окраской. Аккуратный монтаж на готовую лестницу.",
    category: "railings",
  },
  {
    id: "stainless-railing",
    src: "/portfolio/stainless-railing.jpg",
    width: 1440,
    height: 1920,
    title: "Ограждения из нержавеющей стали",
    description:
      "Перила из нержавеющей трубы для общественной лестницы: полированные поручни, надёжные стойки, гигиеничность и долговечность.",
    category: "railings",
  },
  {
    id: "railings-powder",
    src: "/portfolio/railings-powder.jpg",
    width: 1200,
    height: 1600,
    title: "Перила после порошковой окраски",
    description:
      "Партия ограждений после окраски: ровное покрытие, стойкое к влаге, коррозии и перепадам температур.",
    category: "railings",
  },
  {
    id: "workshop-railings",
    src: "/portfolio/workshop-railings.jpg",
    width: 1920,
    height: 1440,
    title: "Производство ограждений в цехе",
    description:
      "Сборка декоративных ограждений в собственном цехе: гибка, сварка, подготовка поверхности под окраску.",
    category: "railings",
  },
  {
    id: "roof-ladder",
    src: "/portfolio/roof-ladder.jpg",
    width: 1440,
    height: 1920,
    title: "Эвакуационная лестница с ограждением",
    description:
      "Изготовление и монтаж лестницы на кровлю с ограждением безопасности по чертежам заказчика.",
    category: "railings",
  },
  {
    id: "frame-pavilion",
    src: "/portfolio/frame-pavilion.jpg",
    width: 1600,
    height: 1200,
    title: "Каркас беседки",
    description:
      "Сварной каркас садовой беседки из профильной трубы, изготовленный по чертежу заказчика.",
    category: "frames",
  },
  {
    id: "frames-workshop",
    src: "/portfolio/frames-workshop.jpg",
    width: 1920,
    height: 1440,
    title: "Крупногабаритные каркасы",
    description:
      "Изготовление несущих каркасов для промышленных объектов по чертежам заказчика. Контроль геометрии на всех этапах сборки.",
    category: "frames",
  },
  {
    id: "vent-shaft",
    src: "/portfolio/vent-shaft.jpg",
    width: 1440,
    height: 1920,
    title: "Вентшахта из оцинкованной стали",
    description:
      "Изготовление вентиляционного короба с сетчатым заполнением по техническому заданию заказчика.",
    category: "frames",
  },
  {
    id: "waste-area",
    src: "/portfolio/waste-area.jpg",
    width: 1920,
    height: 1440,
    title: "Площадка для контейнеров ТКО",
    description:
      "Ограждение контейнерной площадки для раздельного сбора отходов: каркас, навес, информационные таблички.",
    category: "city",
  },
  {
    id: "waste-container",
    src: "/portfolio/waste-container.jpg",
    width: 1440,
    height: 1920,
    title: "Металлические контейнеры ТКО",
    description:
      "Изготовление контейнеров для отходов с крышкой: сварной каркас, стойкое покрытие, окраска по RAL.",
    category: "city",
  },
  {
    id: "light-figures",
    src: "/portfolio/light-figures.jpg",
    width: 1920,
    height: 1280,
    title: "Световые фигуры для города",
    description:
      "Каркасы световых фигур для городской иллюминации: гибка металла, сварка, монтаж с LED-подсветкой.",
    category: "city",
  },
  {
    id: "pier-frame",
    src: "/portfolio/pier-frame.jpg",
    width: 696,
    height: 928,
    title: "Каркас настила у водоёма",
    description:
      "Сварной каркас пешеходного настила с ограждением на берегу водоёма: изготовление и монтаж по чертежам заказчика, окраска в цвет по RAL.",
    category: "city",
  },
  {
    id: "panels-batch",
    src: "/portfolio/panels-batch.jpg",
    width: 1067,
    height: 800,
    title: "Партия сварных панелей",
    description:
      "Серийное изготовление металлических панелей в собственном цехе: сборка, сварка и окраска крупных партий для объектов заказчиков.",
    category: "frames",
  },
  {
    id: "mall-frame",
    src: "/portfolio/mall-frame.jpg",
    width: 696,
    height: 928,
    title: "Каркас для торгового центра",
    description:
      "Внутренний каркас с настилом из просечного листа и ограждениями: сварные фермы, окраска в два цвета по RAL, монтаж на объекте.",
    category: "frames",
  },
];

export const featuredItem =
  portfolioItems.find((item) => item.id === "gates-red") ?? portfolioItems[0];
