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
