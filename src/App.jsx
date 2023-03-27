

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import'./App.css';
import "./font/static/Oswald-Bold.ttf";
import Home from "./Home";
import Login from "./LogIn";
import About from "./About";
import My_plan from "./My_plan";
import Contact_us from "./Contact_us";
import Day1 from "./Day1";
import SocialFollow from "./SocialFollow";
import Day3 from "./Day3";
import Day5 from "./Day5";
import { useMediaQuery } from "react-responsive";



const App = () => {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/My_Plan" element={<My_plan />} />
          <Route path="/Contact_us" element={<Contact_us />} />
          <Route path="/LogIn" element={<Login />} />
          <Route path="/Day1" element={<Day1/>}/>
          <Route path="/Day3" element={<Day3/>}/>
          <Route path="/Day5" element={<Day5/>}/>
        </Routes>
        <SocialFollow />
      </Router>
    </div>
  );
};

export default App;



