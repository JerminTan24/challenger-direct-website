import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
// Import from 'bs' (Bootstrap Icons) instead of 'fi' for WhatsApp
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { BsWhatsapp } from 'react-icons/bs'; // <-- Changed import

const Footer = () => {
  // Use the custom dark blue for the footer background
  return (
    <footer className="bg-brand-blue text-white-50 pt-5 pb-4">
      <Container>
        <Row className="gy-4">
          {/* ... other columns ... */}

          {/* Contact Info */}
          <Col lg={3} md={6} sm={6} xs={12}>
            <h6 className="text-uppercase text-white fw-bold mb-3">Contact Us</h6>
             <div className="d-flex align-items-center mb-2">
                <FiPhone size={16} className="me-2 text-white" />
                <a href="tel:+6563189875" className="text-white-50 text-decoration-none">+65 6318 9875</a>
             </div>
             <div className="d-flex align-items-center mb-2">
                <FiMail size={16} className="me-2 text-white" />
                <a href="mailto:corp-sales@challenger.sg" className="text-white-50 text-decoration-none">corp-sales@challenger.sg</a>
             </div>
             <div className="d-flex align-items-center mb-2">
                 {/* Use BsWhatsapp instead of FiWhatsapp */}
                <BsWhatsapp size={16} className="me-2 text-white" /> {/* <-- Changed component */}
                <a href="https://wa.me/6596694169" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none">+65 9669 4169</a>
             </div>
             <div className="d-flex align-items-start mb-2">
                <FiMapPin size={16} className="me-2 text-white mt-1" />
                <span className="text-white-50">
                    1 Ubi Link<br />
                    Challenger TecHub<br />
                    Singapore 408553
                </span>
             </div>
             {/* Add Payment Logos */}
             <div className='mt-3'>
                 <img src="https://via.placeholder.com/50x30/ffffff/000000?text=VISA" alt="Visa" className="me-2" style={{backgroundColor: 'white', padding: '2px', borderRadius: '3px'}}/>
                 <img src="https://via.placeholder.com/50x30/ffffff/000000?text=MC" alt="Mastercard" style={{backgroundColor: 'white', padding: '2px', borderRadius: '3px'}} />
             </div>
          </Col>
        </Row>

        {/* Copyright */}
        <hr className="bg-secondary my-4" />
        <div className="text-center text-white-50 small">
          Copyright © {new Date().getFullYear()} Challenger Direct+ Pte Ltd. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;