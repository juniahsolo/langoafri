
'use client';

import Link from 'next/link';
import Hero from './components/Hero';
import Features from './components/Features';
import Languages from './components/Languages';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <Features />
      <Languages />
      <CallToAction />
      <Footer />
    </div>
  );
}