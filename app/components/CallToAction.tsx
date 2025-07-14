
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CallToAction() {
  const [showForm, setShowForm] = useState(false);
  const [showTeachForm, setShowTeachForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    language: '',
    word: '',
    translation: '',
    pronunciation: '',
    culturalContext: ''
  });

  const [teachFormData, setTeachFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nativeLanguages: '',
    teachingExperience: '',
    availability: '',
    motivation: '',
    qualifications: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTeachInputChange = (e) => {
    setTeachFormData({
      ...teachFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Word contribution submitted:', formData);
    setFormData({
      name: '',
      email: '',
      language: '',
      word: '',
      translation: '',
      pronunciation: '',
      culturalContext: ''
    });
    alert('Thank you for your contribution! Your word will be reviewed and added to our database.');
    setShowForm(false);
  };

  const handleTeachSubmit = (e) => {
    e.preventDefault();
    console.log('Teaching application submitted:', teachFormData);
    setTeachFormData({
      fullName: '',
      email: '',
      phone: '',
      nativeLanguages: '',
      teachingExperience: '',
      availability: '',
      motivation: '',
      qualifications: ''
    });
    alert('Thank you for your application! We will review your submission and contact you within 48 hours.');
    setShowTeachForm(false);
  };

  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=African%20sunset%20with%20silhouettes%20of%20children%20learning%20together%2C%20warm%20golden%20light%2C%20community%20education%2C%20hopeful%20future%2C%20traditional%20and%20modern%20elements%2C%20inspiring%20educational%20scene%2C%20cultural%20preservation%2C%20unity%20and%20learning&width=1920&height=600&seq=cta-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-cover bg-center"
           style={{
             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=African%20sunset%20with%20silhouettes%20of%20children%20learning%20together%2C%20warm%20golden%20light%2C%20community%20education%2C%20hopeful%20future%2C%20traditional%20and%20modern%20elements%2C%20inspiring%20educational%20scene%2C%20cultural%20preservation%2C%20unity%20and%20learning&width=1920&height=600&seq=cta-bg&orientation=landscape')`,
             animation: 'slideRightToLeft 25s linear infinite'
           }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the Language Revolution
        </h2>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-95">
          Help preserve indigenous languages for future generations. 
          Start your journey today or contribute as a native speaker.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => setShowTeachForm(true)}
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Teach
          </button>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm whitespace-nowrap cursor-pointer"
          >
            Contribute Words
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-graduation-cap-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">For Learners</h3>
            <p className="text-lg opacity-90 mb-6">
              Access gamified lessons, cultural stories, and native speaker audio. 
              Learn at your own pace with offline support.
            </p>
            <ul className="text-left space-y-2 opacity-90">
              <li>✓ Free basic access</li>
              <li>✓ Premium AI WhatsApp tutor</li>
              <li>✓ Offline lesson downloads</li>
              <li>✓ Progress tracking & rewards</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-heart-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">For Contributors</h3>
            <p className="text-lg opacity-90 mb-6">
              Share your native language knowledge and help preserve cultural heritage 
              for future generations worldwide.
            </p>
            <ul className="text-left space-y-2 opacity-90">
              <li>✓ Record audio lessons</li>
              <li>✓ Share cultural stories</li>
              <li>✓ Earn contributor rewards</li>
              <li>✓ Build language communities</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Teaching Registration Form Modal */}
      {showTeachForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply to Teach</h3>
                <button 
                  onClick={() => setShowTeachForm(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <form id="teach-registration" onSubmit={handleTeachSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={teachFormData.fullName}
                      onChange={handleTeachInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={teachFormData.email}
                      onChange={handleTeachInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={teachFormData.phone}
                    onChange={handleTeachInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                    placeholder="Your contact number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Native Languages *
                  </label>
                  <input
                    type="text"
                    name="nativeLanguages"
                    value={teachFormData.nativeLanguages}
                    onChange={handleTeachInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                    placeholder="List the languages you speak natively"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teaching Experience
                  </label>
                  <textarea
                    name="teachingExperience"
                    value={teachFormData.teachingExperience}
                    onChange={handleTeachInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm resize-none"
                    placeholder="Describe your teaching background (formal or informal)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <input
                    type="text"
                    name="availability"
                    value={teachFormData.availability}
                    onChange={handleTeachInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                    placeholder="When are you available to teach? (days/hours)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to teach? *
                  </label>
                  <textarea
                    name="motivation"
                    value={teachFormData.motivation}
                    onChange={handleTeachInputChange}
                    required
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm resize-none"
                    placeholder="Share your motivation for preserving and teaching indigenous languages (max 500 characters)"
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {teachFormData.motivation.length}/500
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qualifications & Certifications
                  </label>
                  <textarea
                    name="qualifications"
                    value={teachFormData.qualifications}
                    onChange={handleTeachInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm resize-none"
                    placeholder="List any relevant qualifications, certifications, or cultural credentials"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowTeachForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Word Contribution Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Contribute a Word</h3>
                <button 
                  onClick={() => setShowForm(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <form id="word-contribution" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language *
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a language</option>
                    <option value="swahili">Swahili</option>
                    <option value="yoruba">Yoruba</option>
                    <option value="igbo">Igbo</option>
                    <option value="amharic">Amharic</option>
                    <option value="zulu">Zulu</option>
                    <option value="twi">Akan/Twi</option>
                    <option value="shona">Shona</option>
                    <option value="xhosa">Xhosa</option>
                    <option value="hausa">Hausa</option>
                    <option value="somali">Somali</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Word/Phrase *
                    </label>
                    <input
                      type="text"
                      name="word"
                      value={formData.word}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="Enter the word in native language"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      English Translation *
                    </label>
                    <input
                      type="text"
                      name="translation"
                      value={formData.translation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                      placeholder="English meaning"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pronunciation Guide
                  </label>
                  <input
                    type="text"
                    name="pronunciation"
                    value={formData.pronunciation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
                    placeholder="How to pronounce (phonetic spelling)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cultural Context
                  </label>
                  <textarea
                    name="culturalContext"
                    value={formData.culturalContext}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about when and how this word is used in your culture (max 500 characters)"
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.culturalContext.length}/500
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  >
                    Submit Contribution
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100px);
          }
        }
      `}</style>
    </section>
  );
}
