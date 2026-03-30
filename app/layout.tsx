import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Time Tracking Dashboard",
  description: "Time Tracking Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rubik.variable} antialiased`}>
      <body className="font-rubik bg-navy-950 flex min-h-screen flex-col justify-center py-20">
        <main className="w-full max-w-[1116px] px-6 sm:px-20 lg:mx-auto lg:px-12 xl:px-0">{children}</main>
      </body>
    </html>
  );
}
