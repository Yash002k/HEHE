import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <span className="grow">Grow:</span>organicIndia
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <a href="#home">Home</a>
              </Link>
            </li>
            <span>|</span>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <span>|</span>
            <li>
              <a href="#products">Products</a>
            </li>
          </ul>
        </nav>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
