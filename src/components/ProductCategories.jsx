// src/components/ProductCategories.jsx

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

// categories array definition goes here (ensure Apple uses WHITE logo path)
const categories = [
  { title: 'Desktops & Laptops', description: 'Reliable desktops and laptops for every budget and need, featuring top brands like Lenovo, ASUS, HP, Acer, and more.', image: '/images/laptops.png', link: '#desktops-laptops', },
  { title: 'Apple Products', description: 'Premium Apple devices and solutions (iPhones, Macbooks, AirPods) available at exclusive corporate pricing.', image: '/images/apple-logo-white.png', link: '#apple-products', isDark: true, },
  { title: 'Office Equipment', description: 'Essential office tools—from printers to mice & keyboards—for seamless day-to-day operations.', image: '/images/office-equip.png', link: '#office-equipment', },
];

const ProductCategories = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row xs={1} lg={3} className="g-4">
          {categories.map((category, index) => (
            <Col key={index}>
              {/* Keep the original ternary structure */}
              {category.title === 'Apple Products' ? (
                // Card for Apple Products (dark background)
                <Card className="h-100 border-0 shadow-sm text-white bg-dark overflow-hidden">
                  {/* --- Image section for Apple --- */}
                  {/* Modify THIS div */}
                  <div
                    className="d-flex justify-content-center align-items-center"
                    // Set background and a FIXED HEIGHT matching other card images
                    style={{
                      minHeight: '200px', // <<< SET HEIGHT HERE (e.g., 200px)
                      height: '200px',    // <<< Ensure it takes exactly this height
                      backgroundColor: '#000',
                      padding: '1rem' // Add some padding if needed
                    }}
                  >
                    {/* Use Card.Img for consistency, or just img */}
                    <img // Changed from Card.Img for simpler styling here
                      src={category.image} // Path to WHITE logo
                      alt={category.title + ' Logo'}
                      // Style the logo size within the container
                      style={{
                        maxHeight: '60px', // Adjust logo size as needed
                        width: 'auto'
                      }}
                    />
                  </div>
                  {/* Card Body remains the same */}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title as="h5" className="fw-bold">{category.title}</Card.Title>
                    <Card.Text className="small text-white-50 flex-grow-1">
                      {category.description}
                    </Card.Text>
                    <Button variant="link" href={category.link} className="text-warning p-0 fw-bold text-decoration-none mt-3 align-self-start">
                      LEARN MORE <FiArrowRight className="inline-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              ) : (
                // Standard Card for other categories (light background - unchanged from original)
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={category.image}
                    alt={category.title}
                    // Optional: Apply consistent height via CSS class or style if needed
                    style={{ height: '200px', objectFit: 'cover' }} // Example explicit height
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title as="h5" className="fw-bold">{category.title}</Card.Title>
                    <Card.Text className="text-muted small flex-grow-1">
                      {category.description}
                    </Card.Text>
                    <Button variant="link" href={category.link} className="mt-3 align-self-start fw-bold text-decoration-none">
                      LEARN MORE <FiArrowRight className="inline-icon" />
                    </Button>
                  </Card.Body>
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductCategories;