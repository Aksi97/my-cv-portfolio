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
            {/* --- UPDATED PART BELOW --- */}
            <a 
              href="/akasdubey.pdf" // Path to your PDF in the public folder
              download="akasdubey.pdf" // Suggests a filename for download
              target="_blank"             // Opens in a new tab/window
              rel="noopener noreferrer"   // Security best practice for target="_blank"
              className="cta-button"
            >
              Check Out My Resume
            </a>
            {/* --- END UPDATED PART --- */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;