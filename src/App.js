import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Login from "./components/login"; // Import the Login component
import Dashboard from "./components/Dashboard";
import Register from "./components/register";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <FeaturesSection />
              <Testimonials />
              <Footer />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
