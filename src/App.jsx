import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutModal from './components/AboutModal';
import ContactModal from './components/ContactModal';
import LinkedInLogo from './components/LinkedInLogo'; 

function App() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleOpenAboutModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setShowAboutModal(false);
  };

  const handleOpenContactModal = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowContactModal(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  // Effect to handle Escape key for modals
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (showAboutModal) {
          setShowAboutModal(false);
        }
        if (showContactModal) {
          setShowContactModal(false);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showAboutModal, showContactModal]); // Depend on modal states

  return (
    <>
      <Header onAboutClick={handleOpenAboutModal} onContactClick={handleOpenContactModal} />
      <HeroSection />

      <AboutModal isOpen={showAboutModal} onClose={handleCloseAboutModal} />
      <ContactModal isOpen={showContactModal} onClose={handleCloseContactModal} />
      <LinkedInLogo />
    </>
  );
}

export default App;