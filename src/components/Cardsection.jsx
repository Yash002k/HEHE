import React from "react";
import "./Cardsection.css";
import image from "../assets/image.png";
import image3 from "../assets/image3.png";
import image2 from "../assets/image2.png";

const CardSection = () => {
  return (
    <div className="card-section">
      <div className="recent-transactions">
        <h3>Recent Transactions</h3>
        <ul>
          <li>
            <div className="transaction-item">
              <img src={image3} alt="Rumi Sharma" className="avatar" />
              <div>
                <p className="name">Rumi Sharma</p>
                <p className="date">15 Nov 2013</p>
              </div>
              <p className="amount">INR 10,000</p>
            </div>
          </li>
          <li>
            <div className="transaction-item">
              <img src={image2} alt="Aman Jain" className="avatar" />
              <div>
                <p className="name">Aman Jain</p>
                <p className="date">10 Oct 2013</p>
              </div>
              <p className="amount">INR 10,000</p>
            </div>
          </li>
          <li>
            <div className="transaction-item">
              <img src={image} alt="Rasel Ahmed" className="avatar" />
              <div>
                <p className="name">Rasel Ahmed</p>
                <p className="date">21 Sep 2013</p>
              </div>
              <p className="amount">INR 10,000</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card-info">
        <h3>Card Information</h3>
        <ul>
          <li>
            <span>Status:</span> <span className="active">Active</span>
          </li>
          <li>
            <span>Card:</span> Credit
          </li>
          <li>
            <span>Card Type:</span> Visa
          </li>
          <li>
            <span>Card Number:</span> 223456****
          </li>
          <li>
            <span>Expire Date:</span> 12-12-2026
          </li>
          <li>
            <span>Currency:</span> <span className="currency">INR</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardSection;
