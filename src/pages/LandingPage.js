import React from 'react';
import './LandingPage.css';
import HeroSection from '../components/LandingPageComponents/HeroSection';
import FeaturesSection from '../components/LandingPageComponents/FeaturesSection';
import HowItWorksSection from '../components/LandingPageComponents/HowItWorksSection';
import TrustedBySection from '../components/LandingPageComponents/TrustedBySection';
import Footer from '../components/LandingPageComponents/Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrustedBySection />
      <Footer />
    </div>
  );
};

export default LandingPage;
