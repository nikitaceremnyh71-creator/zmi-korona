"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import {
  categories,
  getCategoryLabel,
  portfolioItems,
  type FilterKey,
} from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Lightbox } from "./lightbox";

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleFilterChange = (filter: FilterKey) => {
    setActiveFilter(filter);
    setLightboxIndex(null);
  };

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: portfolioItems.length };
    for (const item of portfolioItems) {
      map[item.category] = (map[item.category] ?? 0) + 1;
    }
    return map;
  }, []);

  const filteredItems = useMemo(
    () =>
      activeFilter === "all"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <div>
      {/* Фильтры по категориям */}
      <div
        className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Фильтр работ по категориям"
      >
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            role="tab"
            aria-selected={activeFilter === category.key}
            onClick={() => handleFilterChange(category.key)}
            className={cn(
              "whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
              activeFilter === category.key
                ? "border-amber-500 bg-amber-500 text-black shadow-[0_0_24px_rgba(245,158,11,0.35)]"
                : "border-white/15 bg-white/5 text-zinc-300 hover:border-amber-500/50 hover:text-amber-400"
            )}
          >
            {category.label}
            <span className="ml-1.5 opacity-60">{counts[category.key] ?? 0}</span>
          </button>
        ))}
      </div>

      {/* Галерея-«кладка»: фото без обрезки, в естественных пропорциях */}
      <div
        key={activeFilter}
        className="columns-1 gap-5 sm:columns-2 xl:columns-3"
      >
        {filteredItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.06, 0.4),
              ease: "easeOut",
            }}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Открыть фото на весь экран: ${item.title}`}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-left transition-colors duration-300 hover:border-amber-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            <Image
              src={item.src}
              alt={`${item.title} — ${item.description}`}
              width={item.width}
              height={item.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            {/* Подпись поверх фото */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-4 pb-4 pt-16 sm:px-5">
              <span className="mb-2 inline-block rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {getCategoryLabel(item.category)}
              </span>
              <h3 className="text-base font-bold text-white sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-1 hidden text-sm leading-relaxed text-zinc-300 sm:block">
                {item.description}
              </p>
            </div>

            {/* Иконка «открыть во весь экран» */}
            <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-5 w-5" aria-hidden="true" />
            </span>
          </motion.button>
        ))}
      </div>

      <Lightbox
        items={filteredItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
