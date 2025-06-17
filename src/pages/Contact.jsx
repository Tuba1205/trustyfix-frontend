import React, { useState, useEffect } from 'react';
import '../pages/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    street: '',
    phone: '',
    city: '',
    state: '',
    zip_code: '',
  });

  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showAd, setShowAd] = useState(false); // Controls ad display

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setShowPopup(true);
    setShowAd(false); // reset ad on new submission

    try {
      const response = await fetch('https://0daf48c2-bf22-4f4f-828d-e0bc9a71c351-00-2vyd9rbev0n5r.pike.replit.dev/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Form submitted successfully! We will contact you soon.');
        setForm({
          first_name: '',
          last_name: '',
          email: '',
          street: '',
          phone: '',
          city: '',
          state: '',
          zip_code: '',
        });

        setShowAd(true); // Show ad after success
      } else {
        setStatus('Error: ' + (data.message || 'Failed to submit form.'));
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setStatus('');
    setShowAd(false); // hide ad again when popup closes
  };

  // Load Propounder ad when showAd becomes true
  useEffect(() => {
    if (showAd) {
      const script = document.createElement('script');
      script.src = '//pl26937281.profitableratecpm.com/6e/4e/d7/6e4ed7959cba75654deb1f58fa69d10d.js';
      script.type = 'text/javascript';
      script.async = true;
      const adDiv = document.getElementById('propounder-ad');
      if (adDiv) {
        adDiv.innerHTML = ''; // clear previous content
        adDiv.appendChild(script);
      }
    }
  }, [showAd]);

  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p className="description">
        Have a home repair need? Fill out the form below and our team will get in touch with you shortly.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-row">
          <input type="text" name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} required />
          <input type="text" name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} required />
        </div>

        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <input type="text" name="street" placeholder="Street Address" value={form.street} onChange={handleChange} required />

        <div className="input-row">
          <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
          <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
          <input type="text" name="zip_code" placeholder="Zip Code" value={form.zip_code} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <p>{status}</p>

            {/* Ad appears here only if form is successfully submitted */}
            {showAd && (
              <div id="propounder-ad" style={{ marginTop: '20px' }}></div>
            )}

            <button onClick={closePopup} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
