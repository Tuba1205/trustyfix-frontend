import React from 'react';
import './Home.css';
import { FaWrench, FaBath, FaBolt, FaPhoneAlt, FaShieldAlt, FaCertificate, FaPercent, FaBlog } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Professional Kitchen & Home Repairs</h1>
            {/* // “Fix it right. Fix it with TrustyFix.” */}
            <p>Trusted by families across the U.S. for fast, reliable, and affordable repairs.</p>
            <a href="/contact" className="cta-button">Book Now</a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <FaWrench className="icon" />
            <h3>Kitchen Repairs</h3>
            <p>Appliances, plumbing, cabinets & countertops.</p>
          </div>
          <div className="service-card">
            <FaBath className="icon" />
            <h3>Bathroom Fixes</h3>
            <p>Leaks, faucets, tile work and more.</p>
          </div>
          <div className="service-card">
            <FaBolt className="icon" />
            <h3>Electrical Help</h3>
            <p>Wiring, sockets, lights, breakers & inspections.</p>
          </div>
          <div className="service-card">
            <FaPhoneAlt className="icon" />
            <h3>Emergency Repairs</h3>
            <p>Urgent issues handled 24/7, even weekends.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h4>1. Submit Request</h4>
            <p>Fill out our contact form with your repair need.</p>
          </div>
          <div className="step">
            <h4>2. Technician Assigned</h4>
            <p>We dispatch a certified professional in your area.</p>
          </div>
          <div className="step">
            <h4>3. Problem Fixed</h4>
            <p>We deliver fast and guaranteed repair service.</p>
          </div>
        </div>
      </section>

      {/* TRUST BADGES / CERTIFICATES */}
      <section className="trust-section">
        <h2>Why Trust Us?</h2>
        <div className="trust-grid">
          <div className="trust-item">
            <FaShieldAlt className="trust-icon" />
            <h3>Licensed & Insured</h3>
            <p>We meet all safety and professional standards.</p>
          </div>
          <div className="trust-item">
            <FaCertificate className="trust-icon" />
            <h3>Certified Experts</h3>
            <p>Our technicians are fully trained and certified.</p>
          </div>
          <div className="trust-item">
            <FaShieldAlt className="trust-icon" />
            <h3>100% Satisfaction Guarantee</h3>
            <p>Your happiness is our top priority.</p>
          </div>
        </div>
      </section>

      {/* SPECIAL OFFERS / DISCOUNT BANNER */}
      <section className="offer-banner">
        <FaPercent className="offer-icon" />
        <div>
          <h3>Spring Special Offer!</h3>
          <p>Get 15% off on all repairs booked before June 30th.</p>
          <a href="/contact" className="cta-button offer-cta">Claim Offer</a>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="blog-teaser">
        <h2><FaBlog /> Latest from Our Blog</h2>
        <div className="blog-cards">
          <article className="blog-card">
            <img src="/images/kitchen.jpeg" alt="DIY kitchen tips" />
            <h4>5 Easy DIY Kitchen Maintenance Tips</h4>
            <p>Keep your kitchen in top shape with these simple tricks.</p>
            <a href="/blog/diy-kitchen-tips" className="read-more">Read More</a>
          </article>
          <article className="blog-card">
            <img src="/images/bathroom.jpg" alt="Bathroom repair" />
            <h4>How to Fix Common Bathroom Leaks</h4>
            <p>Stop leaks before they cause serious damage with our guide.</p>
            <a href="/blog/fix-bathroom-leaks" className="read-more">Read More</a>
          </article>
          <article className="blog-card">
            <img src="/images/electrical-safety.jpg" alt="Electrical safety" className="blog-thumb" />
            <h4>Electrical Safety Tips for Your Home</h4>
            <p>Learn how to keep your family safe with expert advice.</p>
            <a href="/blog/electrical-safety" className="read-more">Read More</a>
          </article>

        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="coverage-section">
        <h2>Service Coverage</h2>
        <p className="coverage-text">Proudly serving cities across the U.S., including:</p>
        <ul className="coverage-list">
          <li>New York, NY</li>
          <li>Los Angeles, CA</li>
          <li>Chicago, IL</li>
          <li>Houston, TX</li>
          <li>Miami, FL</li>
        </ul>
        <p className="coverage-note">No matter where you are — help is just a click away.</p>
      </section>

    </div>
  );
};

export default Home;
