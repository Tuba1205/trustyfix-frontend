import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Solar Panel Installation',
    description: 'Energy-efficient solar panels for homes. Reduce electricity bills with eco-friendly power.',
    image: '/images/solar.jpg'
  },
  {
    title: 'Kitchen Repairs',
    description: 'From cabinet repairs to sink installations, we handle complete kitchen maintenance.',
    image: '/images/kitchen.jpeg'
  },
  {
    title: 'Bathroom Sanitary Fitting',
    description: 'Expert fitting of toilets, sinks, showers, and all sanitary hardware with precision.',
    image: '/images/bathroom.jpg'
  },
  {
    title: 'Home Appliance Repairs',
    description: 'We repair refrigerators, dishwashers, ovens, and more — fast and reliable service.',
    image: '/images/appliance.jpg'
  },
  {
    title: 'Lighting & Electrical Work',
    description: 'Installation of lights, switches, fans, and other electrical components.',
    image: '/images/lighting.jpg'
  },
  {
    title: 'Flooring & Tile Work',
    description: 'Professional tile and flooring repair or replacement for a refreshed home interior.',
    image: '/images/flooring.jpg'
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Home Repair Services</h1>
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-item ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="service-text">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
