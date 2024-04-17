import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "Modern Walk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="">
          <header className="shadow-sm">
            <Link href="/">
              <h1 className="text-3xl py-6 font-bold text-center text-gray-900">Modern Walk</h1>
            </Link>
          </header>
          <main className="max-w-[1024px] mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
