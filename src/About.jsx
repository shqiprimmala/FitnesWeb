import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "./foto/team1.png";
import logo2 from "./foto/team2.png";
import logo3 from "./foto/team3.png";
import Sidebar from './Sidebar';
import "./App.css";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="body-MyPlan">
        <div className="navbar font-face">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/About")}>About</a>
          <a onClick={() => navigate("/My_Plan")}>My Plan</a>
          <a onClick={() => navigate("/Contact_us")}>Contact us</a>
        </div>
        <div className="text">
          <p id="ContactText">About</p>
        </div>
      </div>
      <div className="about">
        <div className="about-box w3-animate-bottom">
          <img src={logo1} alt="" />
          <h1>Body building</h1>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
              Rem perferendis saepe autem quae, 
              ex mollitia nemo corrupti dolorem blanditiis, 
              odit fugit doloribus natus fugiat id nobis omnis sit iusto. 
              Facere.</p>
        </div>
        <div className="about-box w3-animate-bottom1">
          <img src={logo2} alt="" />
          <h1>muscle gain</h1>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
              Rem perferendis saepe autem quae, 
              ex mollitia nemo corrupti dolorem blanditiis, 
              odit fugit doloribus natus fugiat id nobis omnis sit iusto. 
              Facere.</p>
        </div>
        <div className="about-box w3-animate-bottom2">
          <img src={logo3} alt="" />
          <h1>weight loss</h1>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
              Rem perferendis saepe autem quae, 
              ex mollitia nemo corrupti dolorem blanditiis, 
              odit fugit doloribus natus fugiat id nobis omnis sit iusto. 
              Facere.</p>
        </div>
      </div>
    </>
  );
};
export default Home;
