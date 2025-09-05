import type { Metadata } from "next";
import { Geist_Mono, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import Providers from "@/lib/providers";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wambilianga & CO. Advocates",
  description: "Reputation, Respect, Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
