import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import './About.css';

const testimonialsData = [
  {
    name: 'Sarah M.',
    feedback: "Trustyfix was amazing! They fixed my kitchen sink quickly and professionally. Highly recommend!",
  },
  {
    name: 'James K.',
    feedback: "Excellent service and very reliable. Their solar panel installation saved me a lot on my energy bills.",
  },
  {
    name: 'Emily R.',
    feedback: "Prompt and friendly team. Fixed my bathroom leak and even gave helpful maintenance tips.",
  },
];

const faqsData = [
  {
    question: "What areas do you serve?",
    answer: "We provide services all across the USA, focusing on both urban and suburban areas.",
  },
  {
    question: "Do you offer warranties on your repairs?",
    answer: "Yes! We offer a 12-month warranty on all repair and installation work.",
  },
  {
    question: "Can I schedule emergency repairs?",
    answer: "Absolutely! We provide emergency repair services with priority scheduling.",
  },
  {
    question: "Are your technicians licensed and insured?",
    answer: "Yes, all our technicians are fully licensed, insured, and background checked.",
  },
];

const About = () => {
  useEffect(() => {
  const script = document.createElement('script');
  script.async = true;
  script.setAttribute('data-cfasync', 'false');
  script.src = '//pl26937242.profitableratecpm.com/6aa3cc2078e8d1d301a2993d5627de94/invoke.js';
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
    };
  }, []);

  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>About Trustyfix - Expert Home Repair Services in USA</title>
        <meta
          name="description"
          content="Learn about Trustyfix, your trusted home repair company offering kitchen, bathroom, solar, and general repairs across the USA. Quality, fast, and affordable."
        />
        <meta name="keywords" content="home repair, kitchen repair, solar installation, bathroom fittings, USA home service" />
      </Helmet>

      <article className="about-page" itemScope itemType="http://schema.org/AboutPage">
        <section className="about-intro-section">
          <div className="about-text">
            <h1 itemProp="headline">
              About <span className="highlight">  TrustyFix</span>
            </h1>
            <p itemProp="description">
              Your trusted partner for expert home repair services across the USA. We specialize in kitchen fixes, bathroom fittings, solar installations, and much more.
            </p>
            <a href="/contact" className="btn-primary">Get In Touch</a>
          </div>
          <div className="about-image">
            <img
              src="/images/home-repair-team.jpg"
              alt="Professional home repair team"
              itemProp="image"
            />
          </div>
        </section>

        <section className="about-details-section">
          <div className="detail-item" itemScope itemType="http://schema.org/Organization">
            <h2>Who We Are</h2>
            <p>
              With over 10 years of experience, Trustyfix is your reliable home repair company.
              We bring quality, professionalism, and care to every job.
            </p>
          </div>

          <div className="detail-item">
  <h2>Why Choose Us?</h2>
  <ul>
    <li>✔ Certified technicians with years of experience</li>
    <li>✔ Fast, friendly service tailored to your needs</li>
    <li>✔ Transparent pricing, no surprises</li>
    <li>✔ 100% satisfaction guarantee</li>
  </ul>
</div>

{/* Native Ad Banner Inserted Here */}
<div className="native-ad-banner" style={{ margin: '30px 0', textAlign: 'center' }}>
  <div id="container-6aa3cc2078e8d1d301a2993d5627de94"></div>
</div>


          <div className="detail-item">
            <h2>Our Mission</h2>
            <p>
              Making home repairs easy, affordable, and stress-free, one customer at a time.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section" aria-label="Customer testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-slider">
            {testimonialsData.map(({ name, feedback }, index) => (
              <div key={index} className="testimonial-card">
                <p>"{feedback}"</p>
                <h4>- {name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="faq-section" aria-label="Frequently Asked Questions">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqsData.map(({ question, answer }, index) => (
              <div
                key={index}
                className={`faq-item ${activeFaqIndex === index ? 'active' : ''}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaqIndex === index}
                  aria-controls={`faq${index}-content`}
                  id={`faq${index}-header`}
                >
                  {question}
                  <span className="arrow">{activeFaqIndex === index ? '▲' : '▼'}</span>
                </button>
                <div
                  id={`faq${index}-content`}
                  role="region"
                  aria-labelledby={`faq${index}-header`}
                  className="faq-content"
                  style={{ display: activeFaqIndex === index ? 'block' : 'none' }}
                >
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
};

export default About;
