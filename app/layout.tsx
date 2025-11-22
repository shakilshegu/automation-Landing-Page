import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TaskJamm - AI-Powered Workflow Automation | Maddy AI",
  description: "Maddy AI intelligently manages, prioritizes, and executes routine multi-step tasks to streamline business operations and reduce manual work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${montserrat.variable} antialiased`}>
        {children}
         <Analytics />
      </body>
    </html>
  );
}
