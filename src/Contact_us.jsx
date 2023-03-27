import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "./foto/house_logo.png";
import logo2 from "./foto/mail_logo.png";
import logo3 from "./foto/phone_logo.png";
import Sidebar from './Sidebar';


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
          <p id="ContactText">Contact Me</p>
        
          </div>
       

      
      </div>
     <div className="hi">
      <div className="contact-titel">
        <div className="form w3-animate-bottom2">
        <h2 className="i5">Get in Touch</h2>
      <textarea className="i4" name="message" id="message"   placeholder="Enter Message" ></textarea> <br />
      <input className="imput i1" type="text" id="name" placeholder="Enter your name" />
      <input className="imput i2" type="text" id="email" placeholder="Email" /> <br />
      <input className="imput i3" type="text" id="subject" placeholder="Enter Subject" />
      
      <button className="sibmit-bt" type="submit">Send</button>
  </div>
 
  <div className="info w3-animate-bottom3">
    <div className="adress info-tex">
      <div> <img src={logo1} alt="" /></div>
 
  <div> <h3 className="btex">Germany, Bayern</h3>
  <p className="htex">München, 81671</p></div>
 
    </div>
    <div className="phone info-tex">
      <div><img src={logo2} alt="" /></div>
      <div><h3 className="btex">+4912345678912</h3>
      <p className="htex">Mon to Fri 9am to 6pm</p></div>
      
    </div>
    <div className="email info-tex">
      <div><img src={logo3} alt="" /></div>
      <div> <h3 className="btex">shqiprim.mala@gmail.com</h3>
      <p className="htex">Send us your query anytime!</p></div>
     
    </div>
  </div>
  
  </div></div>
    </>
  );
};
export default Home;
