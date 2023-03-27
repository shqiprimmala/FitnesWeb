import "./App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Use from "./use.json";
import { useState } from 'react';
import Sidebar from './Sidebar';








function Day1() {
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
     
      <div className="inner">
        
        {Use &&
          Use.map((use) => {
            return (
              
              <div className="use" key={use.id}>
                <div className="use-NE use-name use-email ">
                  <div className="use-name ">{use.name}</div>
                  <br />
                  <div className="use-email">Email: {use.email}</div>
                </div>
                <br />
                {use.day1.map((getday1) => (
                  <div className="workup" key={getday1.id}>
                    <>
                      <img className="images" src={getday1.foto} alt="" />
                      <br />
                      <p className="text1">{getday1.title}</p>
                      <br />

                      <p className="text1">
                        {" "}
                        {getday1.set} <sub>Set</sub>{" "}
                      </p>
                      <p className="text1">
                        {getday1.reps}
                        <sub>Raps</sub>
                      </p>
                      <p className="text1">
                        {getday1.kg}
                        <sub>Kg</sub>
                      </p>
                      
                   
                  
 
                    </>
                  
                    <div class="Button2">
                    <p className="checkbox1">Click here if you're done</p><input type="checkbox"  className="checkbox1" name="agreement" onChange={handlechange} />
                      <button className="button3" onClick={() => navigate("/My_Plan")}  disabled={!agreement}><span>Done</span></button>
                      <button className="button3" onClick={() => navigate("/My_Plan")}><span>Cancel</span></button>
                        
                     
                    </div>
                  
                  </div>
                  
                        
                        
                     
                ))}
                ;
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Day1;
