
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* UNESCO Partnership Section */}
      <section className="py-12 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-4">
              We contribute to UNESCO's language preservation initiatives
            </p>
            <div className="flex items-center justify-center">
              <div 
                className="flex items-center space-x-8"
                style={{ animation: 'slideUnescoRightToLeft 20s linear infinite' }}
              >
                <img 
                  src="https://readdy.ai/api/search-image?query=UNESCO%20official%20logo%20blue%20and%20white%20design%2C%20United%20Nations%20Educational%20Scientific%20Cultural%20Organization%20emblem%2C%20professional%20institutional%20logo%2C%20clear%20background%2C%20high%20quality%20official%20branding&width=200&height=100&seq=unesco-logo&orientation=landscape"
                  alt="UNESCO Logo"
                  className="h-16 object-contain"
                />
                <img 
                  src="https://readdy.ai/api/search-image?query=UNESCO%20official%20logo%20blue%20and%20white%20design%2C%20United%20Nations%20Educational%20Scientific%20Cultural%20Organization%20emblem%2C%20professional%20institutional%20logo%2C%20clear%20background%2C%20high%20quality%20official%20branding&width=200&height=100&seq=unesco-logo-2&orientation=landscape"
                  alt="UNESCO Logo"
                  className="h-16 object-contain"
                />
                <img 
                  src="https://readdy.ai/api/search-image?query=UNESCO%20official%20logo%20blue%20and%20white%20design%2C%20United%20Nations%20Educational%20Scientific%20Cultural%20Organization%20emblem%2C%20professional%20institutional%20logo%2C%20clear%20background%2C%20high%20quality%20official%20branding&width=200&height=100&seq=unesco-logo-3&orientation=landscape"
                  alt="UNESCO Logo"
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Lango Africa
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Preserving indigenous African and Caribbean languages through 
                modern technology and cultural authenticity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <i className="ri-whatsapp-fill text-white"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Learn</h4>
              <ul className="space-y-2">
                <li><Link href="/languages" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Browse Languages</Link></li>
                <li><Link href="/lessons" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Start Lessons</Link></li>
                <li><Link href="/games" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Play Games</Link></li>
                <li><Link href="/stories" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cultural Stories</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="/contribute" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contribute</Link></li>
                <li><Link href="/speakers" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Native Speakers</Link></li>
                <li><Link href="/leaderboard" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Leaderboard</Link></li>
                <li><Link href="/forum" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Discussion Forum</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Help Center</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
                <li><Link href="/premium" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Premium Plans</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                2024 Lango Africa. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms of Service</Link>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes slideUnescoRightToLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200px);
            }
          }
        `}</style>
      </footer>
    </>
  );
}
