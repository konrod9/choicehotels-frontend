export function Hero() {
  return (
    <section className="py-16 px-6 bg-white" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-sm text-brand-umber uppercase tracking-widest font-medium">
            Premium Hospitality
          </span>
          <h1 className="text-5xl font-bold mt-4 mb-6 text-brand-dark">
            Your World, Your Way
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
            Experience comfort, convenience, and exceptional value at thousands
            of hotels worldwide. Choice Hotels — where every stay feels like
            home.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://choicehotels-3.onrender.com/click?offer=ChoiceHotels&sub1=hero_section"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-orange text-white rounded font-semibold text-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Get Started
          </a>
        </div>
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <img
            src="/ch-exterior.jpg"
            alt="Choice Hotels - Modern hotel exterior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
