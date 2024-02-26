import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageScrollProgress from "@/components/ui/PageScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul's Portfolio",
  description: "Making perfect UI's and robust backends.",
  openGraph: {
    type: "website",
    siteName: "Rahul's Portfolio",
    title: "Rahul's Portfolio",
    description: "Making perfect UI's and robust backends.",
    images: [
      {
        url: "https://drive.google.com/file/d/11vWeu0XOxgqfrMXqQ-d6QbHntZ1Ga1sO/view?usp=sharing",
      },
    ],
  },
  keywords: [
    "portfolio",
    "Rahul",
    "foxyfool",
    "Rahul Kumar Maity",
    "frontend",
    "react",
    "nextjs",
    "developer",
    "backend",
  ],
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CustomCursor />
        <PageScrollProgress />
        {children}
      </body>
    </html>
  );
}
