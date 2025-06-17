// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import BlogDetail from './components/BlogDetail';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import TermsofService from './components/TermsofService.jsx';

import './App.css';

function App() {
useEffect(() => {
  // Social Bar Script
  const socialScript = document.createElement('script');
  socialScript.src = '//pl26937317.profitableratecpm.com/fd/f3/75/fdf375637f89235203f7963036ec734f.js';
  socialScript.type = 'text/javascript';
  socialScript.async = true;
  document.head.appendChild(socialScript);

  // Propounder Head Script
  const propounderScript = document.createElement('script');
  propounderScript.src = '//pl26937281.profitableratecpm.com/6e/4e/d7/6e4ed7959cba75654deb1f58fa69d10d.js';
  propounderScript.type = 'text/javascript';
  propounderScript.async = true;
  document.head.appendChild(propounderScript);
}, []);


  return (
    <>
      <div className="navbar">
        <h2>TrustyFix</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsofService />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
