// src/components/Partners.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
// ... partnerLogos array ...

const Partners = () => {
  return (
    // --- Change Here: Removed 'bg-brand-blue-darker' ---
    // Keep partners-section class if you used it for specific padding
    <section className="partners-section">
      <Container className="text-center">
        <h6 className="text-uppercase text-white-50 mb-4">Our Trusted Technology Partners</h6>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {/* ... logo mapping ... */}
           {partnerLogos.map(logo => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.alt}
              className="partner-logo"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

// ... partnerLogos definition ...
const partnerLogos = [
  { name: 'Dell',      src: '/logos/dell.png',      alt: 'Dell Logo' },
  { name: 'Microsoft', src: '/logos/ms.png', alt: 'Microsoft Logo' },
  { name: 'Samsung',   src: '/logos/samsung.png',   alt: 'Samsung Logo' },
  { name: 'Lenovo',    src: '/logos/lenovo.png',    alt: 'Lenovo Logo' },
  { name: 'Apple',     src: '/logos/apple.png',     alt: 'Apple Logo' },
  { name: 'HP',        src: '/logos/hp.png',        alt: 'HP Logo' },
  { name: 'Adobe',     src: '/logos/adobe.png',     alt: 'Adobe Logo' },
  { name: 'Synology',  src: '/logos/synology.png',  alt: 'Synology Logo' },
];


export default Partners;