import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login">
      <h2>Create New Account</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="name" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="contactNum">Contact Number:</label>
        <input type="contactNum" id="contactNum" name="contactNum" />
        <Link to="/Login">
          <button type="submit">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
