// src/Footer.js
import React from 'react';
import Instagram from './img/instagram.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="social-links">
      <a href="https://www.instagram.com/oktoslo" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Instagram" />
        <p>Instagram</p>
      </a>
      </div>
      <p>&copy; Ur</p>
      <p1>@sohyeon</p1>
    </footer>
  );
};

export default Footer;