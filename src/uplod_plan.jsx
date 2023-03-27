import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Use from "./use.json";
import { useState } from 'react';
import Sidebar from './Sidebar';








function Ulpod_plan() {
  const navigate = useNavigate();
  const [agreement, setAreement] = useState();
  const handlechange = (event) => {
    setAreement(event.target.checked);
  }
  return (
    
   
    <div className="bodyDay">
       <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="body-MyPlan">
        <div className="navbar font-face">
          <a onClick={() => navigate("/")}>Home</a>
          <a onClick={() => navigate("/About")}>About</a>
          <a onClick={() => navigate("/My_Plan")}>My Plan</a>
          <a onClick={() => navigate("/Contact_us")}>Contact us</a>
        </div>
      </div>
     
      
    </div>
  );
}

export default Ulpod_plan;
