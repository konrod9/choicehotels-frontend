"use client";

import { trackCTA } from "@/lib/tracking";

export function Navigation() {
  return (
    <header className="border-b border-gray-200 py-4 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/choice-hotels-logo.jpg"
            alt="Choice Hotels"
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-gray-600 hover:text-brand-orange transition-colors">About</a>
          <a href="#why" className="text-gray-600 hover:text-brand-orange transition-colors">Why Us</a>
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              trackCTA("ChoiceHotels", "nav", "Book_Now_Nav");
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-5 py-2 bg-brand-orange text-white rounded hover:bg-brand-orange/90 transition-colors font-medium"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
