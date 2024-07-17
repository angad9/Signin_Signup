import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
          />
          <label htmlFor="name">Linkdin Id </label>
          <input
            type="text"
            id="linkdinid"
            name="linkdinid"
            autoComplete="off"
            placeholder="Linkdin Id Email"
          />
          <label htmlFor="Password">Linkdin Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
          />
          <label htmlFor="name">Naukri User Name or Email</label>
          <input
            type="text"
            id="naukriusername"
            name="naukriusername"
            autoComplete="off"
            placeholder="Enter your Naukri user name"
          />
          <label htmlFor="Password">Naukri Password:</label>
          <input
            type="password"
            id="naukripassword"
            name="naukripassword"
            autoComplete="off"
            placeholder="Enter Password"
          />
          
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account? </p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
