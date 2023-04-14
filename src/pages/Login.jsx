import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://imgs.search.brave.com/KG4aOB3IozuOykhf0bB5_01oSh-MX2z904X1WGRi5Tg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/ZGtRR21oQjljMlNy/ODRGZUREOWVnSGFF/SyZwaWQ9QXBp"
            alt=""
          />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
            <h5>Email</h5>
            <input type="text" />
            <h5>Password</h5>
            <input type="password" />
            <button className="login__signInButton">Sign In</button>
          </form>
          <p>*T&C apply</p>
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
