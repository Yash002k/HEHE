import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">User ID:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <Link to="/Dashboard">
          <button type="submit">Login</button>
        </Link>
        <Link to="/Register">
          <button type="submit">Create New Account</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
