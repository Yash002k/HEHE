import React from "react";
import img from "../assets/img.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="containerHero">
        <h2>Earning rewards has never been so easy</h2>
        <div className="app-buttons">
          <button className="app-store">Download on the App Store</button>
          <button className="google-play">Download on Google Play</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={img} alt="App Preview" />
      </div>
    </section>
  );
};

export default HeroSection;
