import React from "react";
import { Link } from "react-router-dom";
import "./Started.css";

import logo from "./assets/logo.svg";

const Started = () => {
  return (
      <div className="page01">
        <img className="logo" src={logo} alt="Logo Floter" />

        <div className="text">
          <h1>Let’s Get Started</h1>
          <p>
            Enjoy the best radio stations from your home, don't miss out on
            anything
          </p>
        </div>

        <div className="button">
          <Link to="/sign-up"><button>Get Started</button></Link>
        </div>
      </div>
  );
};

export default Started;
