
'use client';

export default function Languages() {
  const languages = [
    {
      name: 'Swahili',
      region: 'East Africa',
      speakers: '16M native speakers',
      flag: '🇰🇪',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20East%20African%20landscape%20with%20Mount%20Kilimanjaro%20in%20background%2C%20Swahili%20cultural%20elements%2C%20traditional%20clothing%2C%20warm%20African%20sunset%2C%20cultural%20authenticity%2C%20educational%20setting%2C%20community%20learning&width=400&height=300&seq=swahili&orientation=landscape'
    },
    {
      name: 'Yoruba',
      region: 'West Africa',
      speakers: '20M native speakers',
      flag: '🇳🇬',
      image: 'https://readdy.ai/api/search-image?query=Yoruba%20cultural%20celebration%20with%20traditional%20drums%2C%20colorful%20traditional%20clothing%2C%20West%20African%20market%20scene%2C%20cultural%20heritage%2C%20community%20gathering%2C%20authentic%20Nigerian%20setting%2C%20vibrant%20colors&width=400&height=300&seq=yoruba&orientation=landscape'
    },
    {
      name: 'Igbo',
      region: 'Nigeria',
      speakers: '27M native speakers',
      flag: '🇳🇬',
      image: 'https://readdy.ai/api/search-image?query=Igbo%20traditional%20village%20scene%20with%20traditional%20architecture%2C%20cultural%20symbols%2C%20Nigerian%20landscape%2C%20community%20elders%20sharing%20wisdom%2C%20authentic%20cultural%20setting%2C%20warm%20lighting%2C%20traditional%20crafts&width=400&height=300&seq=igbo&orientation=landscape'
    },
    {
      name: 'Amharic',
      region: 'Ethiopia',
      speakers: '22M native speakers',
      flag: '🇪🇹',
      image: 'https://readdy.ai/api/search-image?query=Ethiopian%20highlands%20landscape%20with%20traditional%20Orthodox%20churches%2C%20Amharic%20script%20and%20books%2C%20cultural%20heritage%2C%20traditional%20Ethiopian%20coffee%20ceremony%2C%20authentic%20cultural%20setting%2C%20mountainous%20terrain&width=400&height=300&seq=amharic&orientation=landscape'
    },
    {
      name: 'Zulu',
      region: 'South Africa',
      speakers: '12M native speakers',
      flag: '🇿🇦',
      image: 'https://readdy.ai/api/search-image?query=Zulu%20traditional%20dancers%20in%20colorful%20beadwork%2C%20South%20African%20landscape%2C%20cultural%20celebration%2C%20traditional%20shields%20and%20spears%2C%20authentic%20Zulu%20culture%2C%20community%20gathering%2C%20vibrant%20traditional%20attire&width=400&height=300&seq=zulu&orientation=landscape'
    },
    {
      name: 'Patois',
      region: 'Jamaica',
      speakers: '3M speakers',
      flag: '🇯🇲',
      image: 'https://readdy.ai/api/search-image?query=Jamaican%20cultural%20scene%20with%20reggae%20music%20elements%2C%20Caribbean%20landscape%2C%20traditional%20Jamaican%20market%2C%20cultural%20heritage%2C%20tropical%20setting%2C%20authentic%20Caribbean%20atmosphere%2C%20community%20gathering&width=400&height=300&seq=patois&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Languages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the rich linguistic diversity of Africa and the Caribbean. 
            Each language carries centuries of cultural wisdom and heritage.
          </p>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
            View All 50+ Languages
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={language.image} 
                  alt={`${language.name} culture`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  style={{
                    animation: 'slideRightToLeft 20s linear infinite'
                  }}
                />
                <div className="absolute top-4 right-4 text-3xl">{language.flag}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{language.name}</h3>
                  <p className="text-sm opacity-90">{language.region}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600 font-medium">{language.speakers}</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <i className="ri-volume-up-line w-4 h-4 flex items-center justify-center mr-2"></i>
                  <span>Native audio available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-30px);
          }
        }
      `}</style>
    </section>
  );
}