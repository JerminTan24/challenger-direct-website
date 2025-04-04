import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const EmpowerTeam = () => {
  return (
    <section className="text-center mb-10">
      <Container>
        <h2 className="fw-bold mb-4">Empower Your Team with the Right Tech</h2>
        <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
          From workstations to the field, we provide the latest tech solutions to keep your business moving forward.
        </p>
        {/* Use custom outline button style */}
        <Button variant="outline-secondary" size="lg" href="#get-in-touch" className="btn-outline-light-custom">
          GET IN TOUCH <FiArrowRight className="inline-icon"/>
        </Button>
      </Container>
    </section>
  );
};

export default EmpowerTeam;