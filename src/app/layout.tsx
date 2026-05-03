import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibrahim Ismael - Young Entrepreneur & Developer",
  description: "21-year-old entrepreneur and software developer based in Egypt. Building AI and fintech products. Creating content about startups, AI, and tech on social media.",
  keywords: ["Ibrahim Ismael", "entrepreneur", "developer", "software developer", "Egypt", "startups", "AI", "tech", "fintech", "content creator"],
  authors: [{ name: "Ibrahim Ismael" }],
  openGraph: {
    title: "Ibrahim Ismael - Young Entrepreneur & Developer",
    description: "21-year-old entrepreneur and software developer based in Egypt. Building AI and fintech products.",
    type: "website",
    locale: "en_US",
    url: "https://ibrahimismael.com",
    siteName: "Ibrahim Ismael",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Ismael - Young Entrepreneur & Developer",
    description: "21-year-old entrepreneur and software developer based in Egypt.",
    creator: "@ibrahim8ismael",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}