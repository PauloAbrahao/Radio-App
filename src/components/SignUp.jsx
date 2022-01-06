import React from "react";
import "./SignUp.css";

import play from "./assets/play.svg";
import poligono from "./assets/poligono.svg";

const SignUp = () => {
  return (
    <div className="page02">
      <div className="elements-up">
        <img className="play" src={play} alt="" />
        <img className="poligono" src={poligono} alt="" />
      </div>

      <div className="text-page02">
        <h1>Sign up</h1>
        <p>to start play</p>
      </div>

      <div className="input">
        <label className="label-phone" htmlFor="phone-input">Phone Number</label>
        <input id="phone-input" type="text" placeholder="Your phone number" />
      </div>
    </div>
  );
};

export default SignUp;
