import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here (if needed)
    // Redirect to Dashboard after login
    navigate("/dashboard");
  };
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">A</div>
        <nav className="menu">
          <ul>
            <li>
              <i className="fas fa-dashboard"></i>
            </li>
            <li>
              <i className="fas fa-wallet"></i>
            </li>
            <li>
              <i className="fas fa-chart-bar"></i>
            </li>
            <li>
              <i className="fas fa-users"></i>
            </li>
            <li>
              <i className="fas fa-gear"></i>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main">
        <header className="header1">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="header-actions">
            <i className="fas fa-bell"></i>
            <i className="fas fa-user"></i>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="summary-cards">
            <div className="card">
              <h4>Total Balance</h4>
              <h2>$4,156.45</h2>
            </div>
            <div className="card">
              <h4>Income</h4>
              <h2>$3,146.45</h2>
            </div>
            <div className="card">
              <h4>Expenses</h4>
              <h2>$1,146.45</h2>
            </div>
          </div>

          <div className="summary-cards">
            <div className="card">
              <h4>All Profits</h4>
              <h2>$4,156.45</h2>
            </div>
            <div className="card">
              <h4>Graph</h4>
              <h2>$3,146.45</h2>
            </div>
            <div className="card">
              <h4>User Tree</h4>
              <h2>$1,146.45</h2>
            </div>
          </div>
          <div className="summary-cards">
            <div className="card">
              <h4>Total Balance</h4>
              <h2>$4,156.45</h2>
            </div>
            <div className="card">
              <h4>Income</h4>
              <h2>$3,146.45</h2>
            </div>
            <div className="card">
              <h4>Expenses</h4>
              <h2>$1,146.45</h2>
            </div>
          </div>

          {/* <div className="details">
            <div className="chart">
              <h3>All Profits</h3>
              <div className="pie-chart"></div>
            </div>
            <div className="graph">
              <h3>Graph or Tree for Users</h3>
              <div className="line-chart"></div>
            </div>
          </div> */}

          {/* <div className="transactions-and-card">
            <div className="recent-transactions">
              <h3>Recent Transactions</h3>
              <ul>
                <li>Rumi Aktar - $10,000</li>
                <li>Alamin Sarkar - $10,000</li>
                <li>Rasel Ahmed - $10,000</li>
              </ul>
            </div>
            <div className="card-info">
              <h3>Card Information</h3>
              <ul>
                <li>Status: Active</li>
                <li>Card Type: Visa</li>
                <li>Number: 223456****</li>
                <li>Expire Date: 12-12-2026</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
