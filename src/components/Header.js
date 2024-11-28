import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <span className="grow">Grow:</span>organicIndia
        </h1>
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                <a href="#home">Home</a>
              </Link>
            </li>
            {/* Conditionally render <hr> for mobile view */}
            {isMenuOpen && window.innerWidth <= 768 && (
              <hr className="mobile-divider" />
            )}
            <span className="divider">|</span>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
            {/* Conditionally render <hr> for mobile view */}
            {isMenuOpen && window.innerWidth <= 768 && (
              <hr className="mobile-divider" />
            )}
            <span className="divider">|</span>
            <li>
              <a href="#products" onClick={closeMenu}>
                Products
              </a>
            </li>
          </ul>
        </nav>
        <Link to="/login">
          <button className="login-btn" onClick={closeMenu}>
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
