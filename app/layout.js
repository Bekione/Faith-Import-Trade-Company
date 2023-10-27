import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ScrollToTop from "@components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faith Import And Trade",
  description: "Trust, Excellence, Global Reach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
