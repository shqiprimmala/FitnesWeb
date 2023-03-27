import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';

function My_plan(props) {
  const navigate = useNavigate();
  return (
    <div className="App">
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="body-MyPlan">
        <div className="navbar font-face">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/About")}>About</a>
          <a onClick={() => navigate("/My_Plan")}>My Plan</a>
          <a onClick={() => navigate("/Contact_us")}>Contact us</a>
        </div>
      </div>

      <div className="inner nav">
        <div className="box w3-animate-bottom">
          <a onClick={() => navigate("/Day1")}id="1">Day1</a>
        </div>
        <div className="box w3-animate-bottom">
          <a onClick={() => navigate("#")}>
            Day2 <br />
            Free
          </a>
        </div>
        <div className="box w3-animate-bottom1">
          <a onClick={() => navigate("/Day3") } id="3" >Day3</a>
        </div>
        <div className="box w3-animate-bottom1">
          <a onClick={() => navigate("#")}>
            Day4 <br />
            Free
          </a>
        </div>
        <div className="box w3-animate-bottom2">
          <a onClick={() => navigate("/Day5")}id="5">Day5</a>
        </div>
        <div className="box w3-animate-bottom2">
          <a onClick={() => navigate("#")}>
            Day6 <br />
            Free
          </a>
        </div>
        <div className="box w3-animate-bottom3">
          <a onClick={() => navigate("#")}>
            Day7 <br />
            Free
            </a>
        </div>
       
      </div>

      <h1 className="week">1 Week</h1>
    </div>
  );
}

export default My_plan;
