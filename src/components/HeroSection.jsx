import React from 'react';

function HeroSection() {
  return (
    <main>
      <div className="container">
        <div className="hero-section">
          <div className="hi-text">HI!</div>
          <div className="intro-text">
            <div className="greeting">
              I'm Akash. Nice to<br /><span className="highlight">meet you!</span>
            </div>
            <a 
              href="/akashdubey.pdf" 
              download="akashdubey.pdf" 
              target="_blank"             
              rel="noopener noreferrer"   
              className="cta-button"
            >
              Check Out My Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;