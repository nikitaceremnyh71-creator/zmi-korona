import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ЗМИ «Корона» — портфолио завода металлических изделий",
  description:
    "Портфолио Завода металлических изделий «Корона»: более 10 лет на рынке, 200+ выполненных заказов. Изготовление металлоконструкций по чертежам и техническому заданию заказчика: заборы, ворота, ограждения, каркасные конструкции. Тел. 8 982 253-20-43, met@zmikorona.ru.",
  keywords: [
    "металлоконструкции",
    "портфолио",
    "завод металлических изделий",
    "ЗМИ Корона",
    "изготовление по чертежам",
    "заборы",
    "ворота",
    "ковка",
    "ограждения",
  ],
  openGraph: {
    title: "ЗМИ «Корона» — портфолио завода металлических изделий",
    description:
      "Фото выполненных работ: ворота, заборы, ограждения, каркасные конструкции и благоустройство. Изготовление по чертежам заказчика.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
