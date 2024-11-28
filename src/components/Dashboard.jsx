import React, { useState } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import "chart.js/auto"; // Required for Chart.js
import CardSection from "./Cardsection";

const Login = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform authentication logic here (if needed)
    // Redirect to Dashboard after login
    navigate("/dashboard");
  };
};

const lineChartData = {
  labels: Array.from({ length: 40 }, (_, i) => i + 1), // Numbers 1-40
  datasets: [
    {
      label: "Dataset 1",
      data: [1000, 2000, 1500, 3000, 2500, 4000, 3500, 2000, 3000, 4000], // Example data
      borderColor: "#20c997",
      backgroundColor: "rgba(32, 201, 151, 0.1)", // Semi-transparent fill
      fill: true,
      tension: 0.4, // Smooth curve
    },
    {
      label: "Dataset 2",
      data: [1500, 1800, 2200, 2900, 2800, 3500, 3000, 4000, 2500, 3000],
      borderColor: "#e63946",
      backgroundColor: "rgba(230, 57, 70, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
    },
    y: {
      grid: { display: false },
    },
  },
};

const Dashboard = () => {
  const data = {
    labels: ["Investment", "Rewards", "Top up", "Transfer"],
    datasets: [
      {
        data: [25, 25, 25, 25], // Adjust percentages as needed
        backgroundColor: ["#5f3dc4", "#20c997", "#f77f00", "#e63946"], // Colors for each section
        borderWidth: 0, // No border for clean look
      },
    ],
  };

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

          <div className="details">
            <div className="chart">
              <h3>All Profits</h3>
              <div className="pie-chart">
                <Doughnut
                  data={data}
                  options={{
                    plugins: {
                      tooltip: { enabled: false },
                      legend: { display: false },
                    },
                    cutout: "70%", // Creates the donut hole
                  }}
                />
                <div className="chart-center">100%</div>
              </div>

              <div className="legend">
                {data.labels.map((label, index) => (
                  <div key={index} className="legend-item">
                    <span
                      className="legend-dot"
                      style={{
                        backgroundColor:
                          data.datasets[0].backgroundColor[index],
                      }}
                    ></span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
            {/* Line Chart Section */}
            <div className="graph">
              <h2>Graph or Tree for Users</h2>
              <div className="line-chart">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>
          </div>
          <CardSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
