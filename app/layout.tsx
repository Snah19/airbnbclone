import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const nunito = Nunito({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone by Snah",
};

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;