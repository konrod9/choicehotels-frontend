export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/choice-hotels-logo.jpg" alt="Choice Hotels" className="h-8 mb-3" />
            <p className="text-sm leading-relaxed">
              Your trusted partner in hospitality. Book with confidence at thousands of properties worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2026 Choice Hotels International, Inc.</p>
          <p className="mt-2 sm:mt-0">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
