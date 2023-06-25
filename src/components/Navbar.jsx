import React from 'react';
import '../css/style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="../index.html" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="../desktop.html" className="nav-link">Desktop</a>
        </li>
        <li className="nav-item">
          <a href="../mobile.html" className="nav-link">Mobile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
