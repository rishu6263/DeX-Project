import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Trusted by millions</h3>
        <p>All time volume: $2.0T</p>
        <p>All time swappers: 16.6M</p>
        <p>All time LP fees: $3.4B</p>
        <p>24H volume: $924.3M</p>
      </div>
      <div className="footer-section">
        <h3>Connect with us</h3>
        <p><a href="#">Help Center</a></p>
        <p><a href="#">Blog</a></p>
        <p><a href="#">Stay connected</a></p>
      </div>
    </footer>
  );
};

export default Footer;
