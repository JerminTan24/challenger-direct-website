import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const EmployeePurchase = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 className="h3 fw-bold mb-3">Employee Purchase Program</h2>
            <p className="text-muted mb-4">
              Exclusive employee discounts on laptops, phones, accessories, and more at special corporate rates.
            </p>
            <Button href="#learn-more" variant="primary" size="lg" className="btn-blue-custom">
               LEARN MORE <FiArrowRight className="inline-icon"/>
            </Button>
          </Col>
          <Col md={6}>
            {/* Replace with actual image */}
            <img src="/images/macbook.png" alt="Employee Purchase Program" className="img-fluid rounded" />
             {/* <img src="/path/to/imac-image.jpg" alt="Employee Purchase Program" className="img-fluid rounded shadow-sm" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EmployeePurchase;