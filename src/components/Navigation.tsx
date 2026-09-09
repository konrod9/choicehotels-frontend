export function Navigation() {
  return (
    <header className="border-b border-gray-200 py-4 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <a
          href="https://choicehotels-3.onrender.com/click?offer=ChoiceHotels&sub1=logo"
          className="flex items-center gap-3"
        >
          <img
            src="/choice-hotels-logo.jpg"
            alt="Choice Hotels"
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="https://choicehotels-3.onrender.com/click?offer=ChoiceHotels&sub1=nav"
            className="px-5 py-2 bg-brand-orange text-white rounded hover:bg-brand-orange/90 transition-colors font-medium"
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
