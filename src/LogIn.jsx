// src/Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Sidebar from './Sidebar';


const Contact = (props) => {
  const navigate = useNavigate();
  return (
    <> <div className="App">
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="body-MyPlan">
        <div className="navbar font-face">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/About")}>About</a>
          <a onClick={() => navigate("/My_Plan")}>My Plan</a>
          <a onClick={() => navigate("/Contact_us")}>Contact us</a>
        </div>
      </div>{" "}
      <form className="w3-animate-fading">
       <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button className="log-bu" onClick={() => navigate("/My_Plan")}>Log In</button>
        <div class="social">

            <a class="go" href="https://www.google.com">Googel </a>
          <a class="fb" href="https://www.facebook.com/">  Facebook</a>
        </div>
      </form>
      <br />
      </div>
    </>
  );
};

export default Contact;
