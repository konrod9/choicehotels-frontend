export function Features() {
  return (
    <section className="py-20 px-6" id="why">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-brand-dark">
          Why Choice Hotels?
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Travel is not just about the destination — it is about the
                people you are going to see. Whether it is a family reunion, a
                business trip, or a weekend getaway with friends, Choice Hotels
                makes those connections possible and effortless.
              </p>
              <p>
                With over 7,500 hotels in 46 countries and territories, we offer
                a spectrum of lodging choices to fit every need and budget —
                from upscale Cambria Hotels to comfortable Comfort and Quality
                Inn properties. Whatever your journey looks like, there is a
                Choice hotel ready to welcome you.
              </p>
              <p>
                As a member of the award-winning Choice Privileges rewards
                program, you earn points toward free nights and exclusive perks
                every time you stay. Over 22 million members already enjoy
                faster bookings, lower rates, and personalized rewards.
              </p>
              <p>
                We believe that everyone deserves a comfortable place to stay,
                and we work hard to deliver that promise with warm service,
                clean rooms, and modern amenities at every property. Your next
                great stay starts with Choice Hotels.
              </p>
            </div>
            <a
              href="https://choicehotels-3.onrender.com/click?offer=ChoiceHotels&sub1=cta_section"
              className="inline-flex items-center justify-center px-8 py-3 mt-8 bg-brand-orange text-white rounded font-medium hover:bg-brand-orange/90 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="space-y-4">
            <img
              src="/ch-headquarters.jpg"
              alt="Choice Hotels International headquarters"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img
              src="/ch-woodspring.jpg"
              alt="WoodSpring Suites hotel exterior"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
