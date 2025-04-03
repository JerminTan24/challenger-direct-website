import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight, FiMonitor, FiTag, FiTruck, FiBox } from 'react-icons/fi'; // Example Icons

const whyBuyPoints = [
  { icon: FiMonitor, text: 'Shop over 50,000 tech gadgets' },
  { icon: FiTag, text: 'Enjoy exclusive pricing at corporate rates' },
  { icon: FiTruck, text: 'Receive goods 3-5 days after placing orders' },
  { icon: FiBox, text: 'Collect goods from 40+ outlets islandwide' },
];

const WhyBuy = () => {
  return (
    <section className="bg-brand-blue text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h2 className="h3 fw-bold mb-3">WHY BUY FROM CHALLENGER DIRECT+?</h2>
            <Button variant="link" href="#learn-more" className="text-warning p-0 fw-bold text-decoration-none"> {/* Bootstrap link button */}
              LEARN MORE <FiArrowRight className="inline-icon"/>
            </Button>
          </Col>
          <Col lg={8}>
            <Row xs={1} md={2} lg={4} className="g-4 text-center">
              {whyBuyPoints.map((point, index) => (
                <Col key={index}>
                   <div className="d-inline-block why-buy-icon-wrapper">
                       <point.icon />
                   </div>
                  <p className="mb-0 small">{point.text}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyBuy;