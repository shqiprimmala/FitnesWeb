// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import {Animated} from "react-animated-css";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <><div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="body">
        
        <div className="navbar font-face">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/About")}>About</a>
          <a onClick={() => navigate("/My_Plan")}>My Plan</a>
          <a onClick={() => navigate("/Contact_us")}>Contact us</a>
        </div>
        <div className="text">
       
   

          
    <div>
    <p className="trasparent w3-animate-left">hi this is Mala</p>
          <p className="bold w3-animate-left2">Gym trainer</p>
    </div>

          <button className="Button1 w3-animate-left3"  onClick={() => navigate("/login")}><span>Join Us</span></button> 
          </div>
      </div></div>
    </>
  );
};

export default Home;
