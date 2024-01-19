import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.css";

import {ClerkProvider} from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "An events app",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
