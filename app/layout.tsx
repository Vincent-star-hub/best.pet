import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PetTypes from "@/components/PetTypes";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";

import "./globals.css"; // Ensure global styles are imported
import Partners from "@/components/Partners";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animal Care",
  description: "A website for pet owners to find services for their pets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Hero />
        <Partners />
        <AboutUs />
        <PetTypes />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
