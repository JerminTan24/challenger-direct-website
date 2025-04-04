import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';

// Assuming logo path is correct (using public folder example)
// const logoPath = process.env.PUBLIC_URL + '/images/logo.png'; // Or '/logo.png' if that works

const Header = () => {
  return (
    <Navbar className="bg-brand-blue py-1" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            // src={logoPath} // Use your actual logo path
            src="/logos/challengerdirect.png" // Placeholder using public folder logo
            height="36"
            className="d-inline-block align-top"
            alt="Challenger Direct+"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* --- Changes Start Here --- */}
        {/* Add justify-content-between to distribute space */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          {/* Nav for centered text links */}
          {/* Use mx-auto to center this Nav block */}
          <Nav className="mx-auto">
            <Nav.Link href="#store" className="mx-lg-2 text-x-small">Store</Nav.Link>
            <Nav.Link href="#procurement" className="mx-lg-2 text-x-small">Procurement Program</Nav.Link>
            <Nav.Link href="#epp" className="mx-lg-2 text-x-small">Employee Purchase Program</Nav.Link>
            <Nav.Link href="#apple" className="mx-lg-2 text-x-small">Apple Solutions</Nav.Link>
            <Nav.Link href="#login" className="mx-lg-2 text-x-small">Log In</Nav.Link>
          </Nav>

          {/* Separate Nav for the cart icon on the right */}
          {/* No special class needed here as justify-content-between handles spacing */}
          <Nav>
            <Nav.Link href="#cart">
              <FiShoppingCart size={20} />
              <span className="visually-hidden">Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* --- Changes End Here --- */}
      </Container>
    </Navbar>
  );
};

export default Header;