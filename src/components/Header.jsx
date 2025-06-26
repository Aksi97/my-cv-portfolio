import React from 'react';

function Header({ onAboutClick, onContactClick }) {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>Akash Dubey</h1>
            <span className="tagline">Self-learn web developer</span>
          </div>
          <nav>
            <ul>
              <li><a href="#" onClick={onAboutClick}>About</a></li>
              <li><a href="#" onClick={onContactClick}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;