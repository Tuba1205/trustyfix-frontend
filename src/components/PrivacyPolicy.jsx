import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <h1>Privacy Policy</h1>
      <p>Effective Date: May 31, 2025</p>

      <p>
        We value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website.
      </p>

      <h3>Information We Collect</h3>
      <ul>
        <li>Personal Information: Name, email, contact info (if you fill out a form).</li>
        <li>Non-Personal Info: Browser type, IP address, cookies, and usage data.</li>
      </ul>

      <h3>How We Use Your Information</h3>
      <ul>
        <li>To respond to inquiries.</li>
        <li>To improve website performance.</li>
        <li>To personalize user experience.</li>
      </ul>

      <h3>Cookies</h3>
      <p>
        We use cookies to understand how users interact with our site. You can disable cookies in your browser settings.
      </p>

      <h3>Third-Party Services</h3>
      <p>
        We may use third-party services (like analytics or ad networks) that collect anonymous user data.
      </p>

      <h3>Your Consent</h3>
      <p>
        By using our website, you consent to our Privacy Policy.
      </p>

      <h3>Contact Us</h3>
      <p>If you have questions, email us at support@example.com</p>
    </div>
  );
};

export default PrivacyPolicy;
