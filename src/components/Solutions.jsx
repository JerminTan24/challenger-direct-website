import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const solutionsData = [
  {
    title: 'Small & Medium Businesses',
    description: 'Complete IT solutions designed for growth—from laptops and accessories to networking and office equipment.',
    image: '/images/img-smb.jpg', // Replace with actual image path
  },
  {
    title: 'Government Sectors',
    description: 'Secure, compliant, and robust technology tailored to enhance public services and administrative efficiency.',
     image: '/images/img-gov.jpg', // Replace with actual image path
  },
  {
    title: 'Educational Institutions',
    description: 'Interactive tools and connectivity solutions designed for modern, engaging learning environments.',
    image: '/images/img-edu.jpg', // Replace with actual image path
  },
];

const Solutions = () => {
  return (
    <section className="bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">Solutions For Every Enterprise</h2>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Singapore's trusted provider of IT solutions, devices, and accessories. Offering exclusive corporate pricing and the widest selection of over 50,000 tech products.
        </p>
        <Row xs={1} md={3} className="g-4"> {/* Adjust columns for different screen sizes */}
          {solutionsData.map((solution, index) => (
            <Col key={index}>
              <Card className="h-100 border-0 shadow-sm">
                {/* Use placeholder image */}
                <Card.Img variant="top" src={solution.image} alt={solution.title} />
                {/* <Card.Img variant="top" src={solution.image} alt={solution.title} /> */}
                <Card.Body>
                  <Card.Title as="h5" className="fw-bold">{solution.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {solution.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Solutions;