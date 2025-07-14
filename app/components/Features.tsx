
'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-gamepad-line',
      title: 'Gamified Learning',
      description: 'Earn XP points, maintain streaks, and compete on leaderboards while mastering your chosen language.',
      image: 'https://readdy.ai/api/search-image?query=African%20children%20playing%20traditional%20games%2C%20colorful%20beads%20and%20patterns%2C%20joyful%20expressions%2C%20educational%20toys%2C%20cultural%20learning%20materials%2C%20bright%20and%20vibrant%20colors%2C%20warm%20lighting%2C%20playful%20atmosphere&width=400&height=300&seq=gamified&orientation=landscape'
    },
    {
      icon: 'ri-mic-line',
      title: 'Native Speaker Audio',
      description: 'Learn authentic pronunciation from native speakers with crystal-clear audio recordings.',
      image: 'https://readdy.ai/api/search-image?query=African%20elder%20storyteller%20speaking%20to%20children%2C%20traditional%20clothing%2C%20warm%20expressions%2C%20cultural%20wisdom%20sharing%2C%20microphone%20recording%2C%20authentic%20voices%2C%20community%20gathering%2C%20respectful%20learning%20environment&width=400&height=300&seq=audio&orientation=landscape'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Cultural Stories',
      description: 'Immerse yourself in rich cultural contexts through traditional stories and folklore.',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20African%20storybook%20with%20colorful%20illustrations%2C%20cultural%20patterns%2C%20folk%20tales%2C%20beautiful%20artwork%2C%20traditional%20symbols%2C%20warm%20earth%20tones%2C%20storytelling%20elements%2C%20cultural%20heritage&width=400&height=300&seq=stories&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Offline Access',
      description: 'Download lessons for learning anywhere, perfect for areas with limited internet connectivity.',
      image: 'https://readdy.ai/api/search-image?query=Rural%20African%20setting%20with%20smartphone%20showing%20educational%20app%2C%20solar%20panel%20charging%2C%20community%20learning%2C%20technology%20bridging%20gaps%2C%20hopeful%20atmosphere%2C%20educational%20empowerment%2C%20mobile%20learning&width=400&height=300&seq=offline&orientation=landscape'
    },
    {
      icon: 'ri-chat-voice-line',
      title: 'AI WhatsApp Tutor',
      description: 'Premium AI-powered voice tutor available through WhatsApp for personalized learning.',
      image: 'https://readdy.ai/api/search-image?query=African%20child%20using%20smartphone%20with%20WhatsApp%20interface%2C%20AI%20tutor%20conversation%2C%20voice%20messages%2C%20educational%20technology%2C%20modern%20learning%20tools%2C%20friendly%20interface%2C%20colorful%20chat%20bubbles&width=400&height=300&seq=ai-tutor&orientation=landscape'
    },
    {
      icon: 'ri-heart-line',
      title: 'Language Donation',
      description: 'Native speakers can contribute recordings and content to help preserve their languages.',
      image: 'https://readdy.ai/api/search-image?query=Diverse%20group%20of%20African%20people%20sharing%20languages%2C%20community%20contribution%2C%20cultural%20preservation%2C%20recording%20voices%2C%20unity%20in%20diversity%2C%20collaborative%20learning%2C%20traditional%20and%20modern%20elements%20together&width=400&height=300&seq=donation&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Lango Africa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines modern technology with cultural authenticity to create 
            an engaging learning experience that honors traditional languages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="mb-4 overflow-hidden rounded-xl">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover object-top rounded-xl mb-4 transform hover:scale-105 transition-transform duration-500"
                  style={{
                    animation: 'slideRightToLeft 15s linear infinite'
                  }}
                />
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            transform: translateX(-50px);
          }
        }
      `}</style>
    </section>
  );
}