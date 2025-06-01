// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>TrustyFix</h3>
        <p>Your trusted home repair partner across the USA.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p className="footer-note">
          This website may display third-party advertisements.
        </p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} TrustyFix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
