import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const LinkedInLogo = () => {
  return (
    <div className="linkedin-logo-container">
      <a
        href="https://www.linkedin.com/in/akash-dubey-24009322a" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedinIn size={10} className="linkedin-icon" />
       
      </a>
    </div>
  );
};

export default LinkedInLogo;