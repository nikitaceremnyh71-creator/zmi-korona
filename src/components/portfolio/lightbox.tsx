"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { PortfolioItem } from "@/lib/portfolio";

interface LightboxProps {
  items: PortfolioItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const isOpen = index !== null;
  const item = isOpen && index !== null ? items[index] : null;

  const goPrev = useCallback(() => {
    if (index === null || items.length === 0) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null || items.length === 0) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Просмотр фото: ${item.title}`}
          onClick={onClose}
        >
          {/* Верхняя панель */}
          <div
            className="flex items-center justify-between px-4 py-3 sm:px-6"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-zinc-300">
              {index !== null ? index + 1 : 0} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть просмотр"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-black"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Область изображения */}
          <div
            className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-3 sm:px-20"
            onClick={(event) => event.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex max-h-full items-center justify-center"
              >
                <Image
                  src={item.src}
                  alt={`${item.title} — ${item.description}`}
                  width={item.width}
                  height={item.height}
                  quality={90}
                  priority
                  sizes="(max-width: 768px) 100vw, 85vw"
                  className="h-auto max-h-[calc(100svh-12rem)] w-auto max-w-full rounded-lg object-contain shadow-2xl shadow-black/60"
                />
              </motion.div>
            </AnimatePresence>

            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Предыдущее фото"
                  className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-black sm:left-5"
                >
                  <ChevronLeft className="h-7 w-7" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Следующее фото"
                  className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-amber-500 hover:text-black sm:right-5"
                >
                  <ChevronRight className="h-7 w-7" aria-hidden="true" />
                </button>
              </>
            )}
          </div>

          {/* Подпись */}
          <div
            className="px-4 pb-5 pt-2 text-center sm:px-6"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="text-base font-bold text-white sm:text-lg">{item.title}</h3>
            <p className="mx-auto mt-1 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {item.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
