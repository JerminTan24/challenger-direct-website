// src/pages/HomePage.jsx
import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Solutions from '../components/Solutions';
import WhyBuy from '../components/WhyBuy';
import EmployeePurchase from '../components/EmployeePurchase';
import EmpowerTeam from '../components/EmpowerTeam';
import ProductCategories from '../components/ProductCategories';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        {/* --- Wrapper Starts Here --- */}
        {/* This div will contain Hero and Partners */}
        {/* d-flex: Enable Flexbox */}
        {/* flex-column: Stack children vertically */}
        {/* min-vh-100: Set minimum height to 100% viewport height */}
        <div className="d-flex flex-column" style={{ minHeight: '94vh', background: 'linear-gradient(to bottom right, #003F91, #000313)' }}>
          <Hero />       {/* Hero will be instructed to grow */}
          <Partners />   {/* Partners will take its natural height */}
        </div>
        {/* --- Wrapper Ends Here --- */}

        {/* Rest of the page content */}
        <Solutions />
        <WhyBuy />
        <EmployeePurchase />
        <EmpowerTeam />
        <ProductCategories />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;