export function CTA() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="cta">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-brand-dark">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-lg mx-auto">
          Join thousands of satisfied travelers. Book your next stay today and
          experience the Choice Hotels difference.
        </p>
        <div className="w-full h-64 rounded-lg overflow-hidden mb-12">
          <img
            src="/ch-phoenix.jpg"
            alt="Choice Hotels Phoenix headquarters"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://choicehotels-3.onrender.com/click?offer=ChoiceHotels&sub1=cta_section"
            className="inline-flex items-center justify-center px-12 py-4 bg-brand-orange text-white rounded font-bold text-lg hover:bg-brand-orange/90 transition-colors shadow-lg"
          >
            Book Now
          </a>
        </div>
        <div className="flex justify-center gap-16 text-center">
          <div>
            <p className="text-4xl font-bold text-brand-orange">24/7</p>
            <p className="text-gray-500 text-sm mt-1">Support</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-orange">Free</p>
            <p className="text-gray-500 text-sm mt-1">Membership</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand-orange">Best Price</p>
            <p className="text-gray-500 text-sm mt-1">Guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
}
