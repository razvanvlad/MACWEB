import "./globals.scss";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Barlow } from "next/font/google";

const berlin = localFont({
  src: [
    {
      path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/berlin_sans_fb_demi_bold-webfont.woff2",
      weight: "normal",
      style: "normal",
    },
  ],
  variable: "--tg-berlin-font-family",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-heading-font-family",
});

export const metadata: Metadata = {
  title: "Meta Arcade Club",
    description: "Grab the pixel key to unlock the playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${berlin.variable} ${poppins.variable} ${barlow.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
