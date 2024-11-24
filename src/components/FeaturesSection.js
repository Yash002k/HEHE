import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const FeaturesSection = () => {
  const features = [
    {
      title: "Track your savings",
      description: "Track your savings and build better spending habits",
      icon: img1,
    },
    {
      title: "Accomplish your goals",
      description: "Accomplish your savings goals",
      icon: img2,
    },
    {
      title: "Redeem rewards",
      description: "Redeem rewards when you accomplish your savings goals",
      icon: img3,
    },
  ];

  return (
    <section id="how-it-works" className="features">
      <h3>How It Works</h3>
      <h1>Making finance simple, effective, and accessible.</h1>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} alt={feature.title} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
