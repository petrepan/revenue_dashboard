import Nav from "@/components/common/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "react-day-picker/dist/style.css";
import "./globals.css";
import Providers from "./provider";

const inter = Inter({ subsets: ["latin"] });

const degular = localFont({
  src: [
    {
      path: "../public/font/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Degular-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/Degular-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/Degular-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--degular",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="py-4 relative">
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
