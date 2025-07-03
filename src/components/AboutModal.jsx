import React from 'react';

function AboutModal({ isOpen, onClose }) {
  const modalClass = isOpen ? "modal-backdrop show" : "modal-backdrop";

  return (
    // Only render the modal if it's open for performance/accessibility (optional but good practice)
    // You can also just keep the `div` and let CSS handle `display: none` vs `block` if `isOpen` is used for `show` class
    <div className={modalClass} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close About Me dialog">&times;</button>
        <h2>About Akash Dubey</h2>
        <p>
<p>Hi, I’m Akash Dubey! A Tech Support & Payment Operations Specialist with 5+ years of experience in customer service, technical support, and dispute resolution. I've worked across global platforms like eBay and Augmented Era, managing everything from customer experience to payment operations, fraud prevention, and KYC compliance.</p>

<p>While I’ve built a strong career in support and analytics, I’ve recently started exploring a new passion, front-end web development. I’m currently learning HTML, CSS, JavaScript, and React, and I’ve created this site as part of my journey.</p>

<p>I enjoy turning complex challenges into simple, beautiful, and user-friendly web experiences. I’m excited to combine my background in tech support, problem-solving, and data analytics with front-end skills to eventually transition into tech roles that involve both development and user experience.</p>

<p>I’m based in Sweden with a valid residence permit, and always open to collaboration, learning, and new opportunities.</p>

<h2>Thank You!!!</h2>
        </p>
      </div>
    </div>
  );
}

export default AboutModal;