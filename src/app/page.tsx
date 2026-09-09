import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choice Hotels — Your World, Your Way",
  description:
    "Experience comfort, convenience, and exceptional value at thousands of hotels worldwide. Book your perfect stay with Choice Hotels today.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
    </div>
  );
}
