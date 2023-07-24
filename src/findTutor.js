import "./styles.css";
import logo from "./Logo.png";
import menu from "./menu.png";
import FAQ from './faq'
import Header from "./Header";
import React, { useState } from "react";

export default function findTutor() {
  return (
    <>     
<div className="navbar">
        <a id = "logo"> <img class="img-thumbnail" src={logo} alt="Logo"></img></a>
        
        <div id = "menu" className="dropdown">
          <button className="dropbtn">      
<img class="img-thumbnail" src={menu} alt="Logo"></img> <br></br><br></br><br></br><h3>The World's Best SDASDasdADS Community of Educators</h3> </button> 
          <div className="dropdown-content">
            <a href="#home">Login</a>
            <a href="#home">Find a Tutor</a>
            <a href="#faqs">FAQ</a>
            <a href="#home">Chat</a>
            <a href="#home">Contact Us</a>

          </div>
          
        </div>
      </div>
      
      
      
    </>
  );
}