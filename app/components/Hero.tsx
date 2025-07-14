
'use client';

import { useState } from 'react';

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    'Swahili (East Africa – Kenya, Tanzania, Uganda, DRC)',
    'Yoruba (Nigeria, Benin, Togo)',
    'Igbo (Nigeria)',
    'Amharic (Ethiopia)',
    'Zulu (South Africa)',
    'Akan/Twi (Ghana)',
    'Shona (Zimbabwe)',
    'Xhosa (South Africa)',
    'Hausa (Nigeria, Niger, Chad)',
    'Somali (Somalia, Kenya, Ethiopia)',
    'Kikuyu (Kenya)',
    'Oromo (Ethiopia)',
    'Wolof (Senegal, Gambia)',
    'Fulani/Fulfulde (West Africa)',
    'Luo (Kenya, Uganda)',
    'Tigrinya (Eritrea, Ethiopia)',
    'Chichewa (Malawi)',
    'Shona (Zimbabwe)',
    'Sesotho (Lesotho, South Africa)',
    'Tswana (Botswana, South Africa)',
    'Kinyarwanda (Rwanda)',
    'Kirundi (Burundi)',
    'Luganda (Uganda)',
    'Patois/Jamaican Creole (Jamaica)',
    'Kreyòl Ayisyen (Haiti)',
    'Bajan (Barbados)',
    'Papiamento (Curaçao, Aruba)',
    'Garifuna (Belize, Honduras)',
    'Ndebele (Zimbabwe)',
    'Venda (South Africa)'
  ];

  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Beautiful%20African%20landscape%20with%20diverse%20people%20from%20different%20cultures%20learning%20together%2C%20warm%20sunset%20lighting%2C%20traditional%20and%20modern%20elements%2C%20educational%20setting%2C%20cultural%20diversity%2C%20hope%20and%20learning%2C%20authentic%20African%20scenery%20with%20mountains%20and%20villages%20in%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center animate-slide-left"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Beautiful%20African%20landscape%20with%20diverse%20people%20from%20different%20cultures%20learning%20together%2C%20warm%20sunset%20lighting%2C%20traditional%20and%20modern%20elements%2C%20educational%20setting%2C%20cultural%20diversity%2C%20hope%20and%20learning%2C%20authentic%20African%20scenery%20with%20mountains%20and%20villages%20in%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
             animation: 'slideLeft 20s linear infinite'
           }}
      />
      
      {/* Logo */}
      <div className="absolute top-8 right-8 z-20">
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'var(--font-pacifico)' }}>
          Lango Africa
        </h1>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Preserve.
            <br />
            <span className="text-gray-400">Learn.</span>
            <br />
            Connect.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-95">
            Master indigenous African and Caribbean languages through gamified lessons, 
            cultural stories, and native speaker guidance. Join a community dedicated 
            to preserving linguistic heritage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                Explore Languages
                <i className={`ri-arrow-down-s-line transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto">
                  <div className="p-4">
                    {languages.map((language, index) => (
                      <div key={index} className="p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200">
                        <div className="font-semibold text-gray-900">
                          {language.split(' (')[0]}
                        </div>
                        <div className="text-sm text-gray-600">
                          {language.split(' (')[1]?.replace(')', '')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">50+</div>
              <div className="text-lg opacity-90">Languages Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">100K+</div>
              <div className="text-lg opacity-90">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-2">95%</div>
              <div className="text-lg opacity-90">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
      
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100px);
          }
        }
        
        .animate-slide-left {
          animation: slideLeft 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
