import React from 'react';
import '../css/style.css';
import api from '../api/api';

const Mobile = () => {
  const handleDownload = (e, link) => {
    e.preventDefault();
    window.open(link, '_blank');
  };

  // Filter the products based on category "Mobile"
  const MobileProducts = api.filter(product => product.category === "Mobile");

  return (
    <>
      <img
        src="https://4.bp.blogspot.com/-sFqpc8rFRuQ/XsTxXcGwhvI/AAAAAAAACTM/W1ga_gWKMKs6emf3apCyVSFEIcssV2qeACK4BGAYYCw/s1600/th.png"
        className="bict-logo"
        alt="Bict Logo"
      />
      <div className="product-card-container">
        {MobileProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.logo} alt={product.name} className="product-logo" />
            <h3 className="product-name">{product.name}</h3>
            <button className="download-button" onClick={(e) => handleDownload(e, product.link)}>
              Download
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mobile;
