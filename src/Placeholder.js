import "./styles.css";
import logo from "./Logo.png";
import menu from "./menu.png";
//import about from "./About2.png";
import about from "./About3.png";
import contact from "./Contact.png";

import FAQ from './faq'
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom'
import t1 from "./t1.png";
import t2 from "./t2.png";
import t3 from "./t3.png";
import t4 from "./t4.png";
import t5 from "./t5.png";
import Find from "./findTutor";
import Checklist from './Checklist';
import Chat from './Chat.png';
import ReactDOM from "react-dom";

import JSONDATA from "./data.json";
import App2 from "./App2";
import * as serviceWorker from "./serviceWorker";


export default function App() {
  const [searchText, setSearchText] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const listItems = [
    { id: 0, text: "Trignometry" },
    { id: 1, text: "Geometry" },
    { id: 2, text: "Calculus" },
    { id: 3, text: "Algebra" },
    { id: 3, text: "Statistics" },
  ];
  const [checked, setChecked] = useState([]);

  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };
  function Book() {
    alert("Booking confirmed")
    }
    function sub() {
      //stuff

  <img class="img-thumbnail" src={t1} alt="Logo"></img> 
      }

  return (
    <>
      <div className="navbar">
        <a>The World's Best Community of Educators Blha Blah blah blah blah</a>
        <a>The World's Best Community of Educators </a>
        <a id = "logo"> <img class="img-thumbnail" src={logo} alt="Logo"></img></a>
        
        <div id = "menu" className="dropdown">
          <button className="dropbtn">      
<img class="img-thumbnail" src={menu} alt="Logo"></img> <br></br><br></br><br></br><h3>The World's Best Community of Educators</h3> </button> 
          <div className="dropdown-content">
          <a href="/findTutor.html">Find a Tutor</a>
            <a href="#home">Chat</a>
            <a href="#home">Contact Us</a>

          </div>
        </div>
        <button id = "log" className="dropbtn"><a>Login</a></button>
        

      </div>
      
      <p id = "stuff"><img class="img-thumbnail" src={about} alt="Abouts"></img></p>
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div class = "findTutor">
      <Header2 />
      
      <div className="dropdown">
          <button className="dropbtn">Search/Filter By:</button>
          <div className="dropdown-content">
            <button id ='sub' onclick = {sub}>  <img class="img-thumbnail" src={t4} alt="Logo"></img> <a id = 'sub' href="#home">Subject</a></button>
            <button id ='sub' onclick = {sub}>  <img class="img-thumbnail" src={t3} alt="Logo"></img> <a id = 'sub' href="#home">Price</a></button>
            <button id ='sub' onclick = {sub}>  <img class="img-thumbnail" src={t2} alt="Logo"></img> <a id = 'sub' href="#home">Grades</a></button>
          </div>
        </div>
        <div class="containered">
       <p> <br></br><br></br><br></br><br></br><br></br><br></br> <div class="bottom-right">Bottom Right</div> <img class="img-thumbnail" src={t5} alt="Logo"></img> </p>
       </div>
       <button id = "book" onClick={Book}>Book Now</button>
      </div>


      <div class = "checklist">
        
      <div className="App" style={{ maxWidth: "1080px", margin: "0 auto", padding:"30px", textAlign:"left" }}>
      <Header3 />
      <Checklist listItems={listItems} checked={checked} setChecked={setChecked} />
    </div>
     
      </div>
      <div class = 'img'>
        <br></br><br></br>
      <Header4 /> 
               <p id = 'chat'><img class="img-thumbnail" src={Chat} alt="Logo"></img> </p>
</div>
<div class = 'cont'>
      <p><img class="img-thumbnail" src={contact} alt="Logo"></img> </p>
      </div>

      <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>

    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <div>
        <ul>
          {JSONDATA.filter((val) => {
            if (searchText === "") {
              return val;
            } else if (
              val.first_name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            } else {
              return "";
            }
          }).map((data, index) => (
            <li key={index}>{data.first_name}</li>
          ))}
        </ul>
      </div>
    </div>


    </>

  );
}
ReactDOM.render(<App2 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/*

      
    <button id = "book" onClick={Book}>Book Now</button>
      <p> <img class="img-thumbnail" src={t1} alt="Logo"></img> </p>

      <button id = "book" onClick={Book}>Book Now</button>
      <p> <img class="img-thumbnail" src={t2} alt="Logo"></img> </p>
      <button id = "book" onClick={Book}>Book Now</button>
      <p> <img class="img-thumbnail" src={t3} alt="Logo"></img> </p>
       <button id = "book" onClick={Book}>Book Now</button>
       <p> <img class="img-thumbnail" src={t4} alt="Logo"></img> </p>


        <a href="App.js" id = "menu"> <img class="img-thumbnail" src={menu} alt="Logo"></img> <h3>The World's Best Community of Educators</h3></a>

import "./styles.css";
import logo from "./Logo.png";
import menu from "./menu.png";
import about from "./About.png";
import React from 'react';

export default function App() {
  return (
    <>
      <div className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a> <img class="img-thumbnail" src={logo} alt="Logo"></img></a>
        <a> <img class="img-thumbnail" src={menu} alt="Menu"></img></a>
        <a href="#home">About</a>
        <a href="#home">Services</a>
        <div className="dropdown">
          <button className="dropbtn">Options</button>
          <div className="dropdown-content">
            <a href="#home">Link1</a>
            <a href="#home">Link2</a>
            <a href="#home">Link3</a>
          </div>
        </div>
      </div>

      <h3 id = "title">The World's Best Community of Educators</h3>
      <br></br>
      <br></br>
      
      <p id = "stuff"><img class="img-thumbnail" src={about} alt="Abouts"></img></p>
    </>
  );
}
*/