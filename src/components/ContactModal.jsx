import React from 'react';

function ContactModal({ isOpen, onClose }) {
  const modalClass = isOpen ? "modal-backdrop show" : "modal-backdrop";

  return (
    // Only render the modal if it's open (optional but good practice)
    <div className={modalClass} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close contact modal">&times;</button>
        <h2>Contact Information</h2>
        <p><strong>Phone:</strong> +46 734025838</p>
        <p><strong>Email:</strong> dubeyakash2005@gmail.com</p>
        <p><strong>Address:</strong> Sjöbo, Skåne, Sverige</p>
      </div>
    </div>
  );
}

export default ContactModal;