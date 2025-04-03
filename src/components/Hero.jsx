// src/components/Hero.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    // --- Change Here: Removed 'bg-brand-blue' ---
    <section className="text-white text-center d-flex align-items-center flex-grow-1">
      <Container>
        <h1 className="display-4 fw-bold mb-3">
          Equip every team.<br />
          Empower every enterprise.
        </h1>
        <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px', color: 'rgba(255,255,255,0.8)' }}>
          Tailored tech solutions for businesses, schools, non-profits, and enterprises—at exclusive prices.
        </p>
        <Button href="#learn-more" variant="light" size="lg" className="btn-light-custom">
          LEARN MORE <FiArrowRight className="inline-icon"/>
        </Button>
      </Container>
    </section>
  );
};

export default Hero;