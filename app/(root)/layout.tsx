import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

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
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
