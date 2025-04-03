import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  {
    title: 'Desktops & Laptops',
    description: 'Reliable desktops and laptops for every budget and need, featuring top brands like Lenovo, ASUS, HP, Acer, and more.',
    image: '/images/laptops.png', // Assuming laptops.png is in public/images
    link: '#desktops-laptops',
  },
  {
    title: 'Apple Products',
    description: 'Premium Apple devices and solutions (iPhones, Macbooks, AirPods) available at exclusive corporate pricing.',
    // Using samsung.png as placeholder per your code, ensure this is intended or replace with apple logo path
    image: '/images/laptops.png', // Example: Assuming apple-logo-black.png is in public/logos
    link: '#apple-products',
    isDark: true, // Flag for potential dark background card
  },
  {
    title: 'Office Equipment',
    description: 'Essential office tools—from printers to mice & keyboards—for seamless day-to-day operations.',
    // Using samsung.png as placeholder per your code, ensure this is intended or replace with office equipment image path
    image: '/images/office-equip.png', // Example: Assuming office-printer.png is in public/images
    link: '#office-equipment',
  },
];

const ProductCategories = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row xs={1} lg={3} className="g-4">
          {categories.map((category, index) => (
            <Col key={index}>
               {/* Special handling for Apple card styling */}
               {category.title === 'Apple Products' ? (
                 // Card for Apple Products (dark background)
                 <Card className="h-100 border-0 shadow-sm text-white bg-dark overflow-hidden">
                   {/* Image section for Apple - using the image from category.image */}
                   {/* Added styling to contain the image nicely */}
                   <div className="d-flex justify-content-center align-items-center p-4" style={{ minHeight: '150px', backgroundColor: '#000' }}>
                        <Card.Img
                            // Use the image specified in the categories array
                            src={category.image}
                            alt={category.title + ' Logo'}
                            // Style the image to fit well, maybe make it smaller
                            style={{ maxHeight: '60px', width: 'auto', filter: 'brightness(0) invert(1)' }} // Example: make logo white
                        />
                   </div>
                   <Card.Body className="d-flex flex-column">
                     <Card.Title as="h5" className="fw-bold">{category.title}</Card.Title>
                     <Card.Text className="small text-white-50 flex-grow-1">
                       {category.description}
                     </Card.Text>
                     <Button variant="link" href={category.link} className="text-warning p-0 fw-bold text-decoration-none mt-3 align-self-start">
                       LEARN MORE <FiArrowRight className="inline-icon"/>
                     </Button>
                   </Card.Body>
                 </Card>
               ) : (
                 // Standard Card for other categories (light background)
                 <Card className="h-100 border-0 shadow-sm">
                   {/* --- Use category.image here --- */}
                   <Card.Img
                      variant="top"
                      src={category.image} // Use the image from the array
                      alt={category.title}
                      // Optional: Add style for consistent height if images vary
                      // style={{ height: '200px', objectFit: 'cover' }}
                   />
                   {/* --- End Image Change --- */}
                   <Card.Body className="d-flex flex-column">
                     <Card.Title as="h5" className="fw-bold">{category.title}</Card.Title>
                     <Card.Text className="text-muted small flex-grow-1">
                       {category.description}
                     </Card.Text>
                     <Button variant="primary" href={category.link} className="mt-3 align-self-start">
                       LEARN MORE <FiArrowRight className="inline-icon"/>
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