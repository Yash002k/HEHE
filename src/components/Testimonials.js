import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3>What they say</h3>
      <h1>What our customers say about us?</h1>
      <div className="testimonial-card">
        <p>
          "Your one-stop destination for smarter financial decisions, tailored
          solutions, and effortless wealth management."
        </p>
        <p>~ Marry from Bihar</p>
        <div className="testimonial-nav">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
