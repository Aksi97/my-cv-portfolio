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
            Hello! I'm Akash Dubey, a Blah Blah Blah
        </p>
      </div>
    </div>
  );
}

export default AboutModal;