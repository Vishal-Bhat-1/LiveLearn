import "./styles.css";
import logo from "./Logo.png";
import menu from "./menu.png";
//import about from "./About2.png";
import about from "./About2.png";
import contact from "./Contact.png";
import rating from "./rating.png";
import FAQ from './faq'
import Header from "./Header";
import Header2 from "./Header2";
import Header3 from "./Header3";
import Header4 from "./Header4";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom'
import Madge from "./Madge.png";
import Jack from "./Jack.png";
import Alfred from "./Alfred.png";
import Alma from "./Alma.png";
import Harry from "./Harry.png";
import Terry from "./Terry.png";
import English from "./English.png";
import Math from "./Math.png";
import Science from "./Science.png";
import lowR from "./lowR.png";
import midR from "./midR.png";
import twenty from "./twenty.png";
import twenty5 from "./twenty5.png";
import thirty from "./thirty.png";
import t1 from "./t1.png";
import t2 from "./t2.png";
import t3 from "./t3.png";
import t4 from "./t4.png";
import t5 from "./t5.png";
import Find from "./findTutor";
import Checklist from './Checklist';
import Chat from './Chat.png';
import ReactDOM from "react-dom";
import { animated, useSpring, config } from "react-spring";
import bookbt from "./bookbt.png";
import JSONDATA from "./data.json";

import App2 from "./App2";
import * as serviceWorker from "./serviceWorker";
import { useEffect } from "react";

const google = window.google



export default function App() {


  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const [searchText, setSearchText] = useState("");


  const [progress, setProgress] = useState("0%");
  const props = useSpring({ width: progress, config: config.slow });

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState([])
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
    { id: 4, text: "Statistics" },
  ];
  const [checked, setChecked] = useState([]);

  const [faqs, setFaqs] = useState([
    {
      question: "My child is special needs and/or requires certain accomodations. How can I let the tutor know?",
      answer:
        "Tutors will usually mention in their description if they feel qualified to teach special needs students. Specifications can be requested through directly messaging the tutor.",
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
      var num = prompt("Enter Your Visa Number:");
      <p id = "msg"></p>
      while(num != null && num.length!= 10){ 
        num = prompt("Incorrect information. You enterted: " + num + " - Try again")
      }
			if (num != null && num.length == 10){
			alert("You enterted: " + num + " - BOOKING CONFIRMED")
      }
    }
    //alert("Booking confirmed")
  
    
    function sub() {
      //stuff

    function tutor(name){
      if (name == "Madge"){
      <a id = "logo"> <img class="img-thumbnail" src={Madge} alt="Logo"></img></a>
      }


    }
  <img class="img-thumbnail" src={t1} alt="Logo"></img> 
      }

  return (
    <>
    <div id="google_translate_element"></div>
      <div className="navbar">
        
        <a id = "logo"> <img class="img-thumbnail" src={logo} alt="Logo"></img></a>
        
        <div id = "menu" className="dropdown">
          <button className="dropbtn">      
<img class="img-thumbnail" src={menu} alt="Logo"></img> <br></br><br></br><br></br><h3>The World's Best Community of Educators</h3> </button> 
          <div className="dropdown-content">
          <a href="#findTutor">Find a Tutor</a>
            <a href="#cont">Contact Us</a>
            <button><a href="#login">Login</a></button>

          </div>
        </div>
        <div className="app" id = 'login'>
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>

      </div>
  

      <p id = "stuff"><img class="img-thumbnail" src={about} alt="Abouts"></img></p>
      <Header />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div class = "findTutor" id = "findTutor">
      <Header2 />

      <div className="Search">
      <input id = "srchinput"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <div classname = "srchul">
      
        <ul>
          {JSONDATA.filter((val) => {
  let x = val;
            if (searchText === "") {
              return null;
            } else if (val.first_name.concat(" ").concat(val.last_name).toLowerCase().includes(searchText.toLowerCase()) ) 
            {
              x = val;

              return val,x;
            } else {
              return "";
            }
            function tutor(name){
              if (name == "Madge"){
              <a id = "logo"> <img class="img-thumbnail" src={Madge} alt="Logo"></img></a>
              }
        
        
            }
          }).map((data, index) => ( //if index = 1; src = Madge  <li classname = "srchli" key={index}>{<img class="img-thumbnail" src={x} alt="Logo"></img>}</li>
          

          <>
            <button id = "fac" onClick={() => {
            if (data.first_name == "Madge"){
              document.getElementById('tu').src = Madge;
              } else if(data.first_name == "Jack"){
                document.getElementById('tu').src = Jack;
              } else if(data.first_name == "Alfred"){
                document.getElementById('tu').src = Alfred;
              } else if(data.first_name == "Alma"){
                document.getElementById('tu').src = Alma;
              } else if(data.first_name == "Harry"){
                document.getElementById('tu').src = Harry;
              } else if(data.first_name == "Terry"){
                document.getElementById('tu').src = Terry;
              }
          }} >Click to Learn More</button><li classname = "srchli" key={index}>{data.first_name + " " + data.last_name}</li>
            </>
          ))}
        </ul>
      </div>
    </div>  
     
      <div id = 'facs' className="dropdown">
          <button className="dropbtn">Filter By:</button>
          <div className="dropdown-content">
            <button className="dropbtn" id ='sub' onclick = {sub}>   <a id = 'sub' href="#home">Subject</a></button>
            <a onClick={() => {
            document.getElementById('tu').src = Math;
          }}  href="#findTutor">Math</a>
            <a onClick={() => {
            document.getElementById('tu').src = Science;
          }}href="#findTutor">Science</a>
            <a onClick={() => {
            document.getElementById('tu').src = Madge;
          }}href="#findTutor">English</a>
            <button className="dropbtn" id ='sub' onclick = {sub}>  <a id = 'sub' href="#home">Price</a></button>
            <a onClick={() => {
            document.getElementById('tu').src = twenty;
          }}  href="#findTutor">$20</a>
            <a onClick={() => {
            document.getElementById('tu').src = twenty5;
          }}href="#findTutor">$25</a>
            <a onClick={() => {
            document.getElementById('tu').src = thirty;
          }}href="#findTutor">$30</a>
            <button className="dropbtn" id ='sub' onclick = {sub}>   <a id = 'sub' href="#home">Rating</a></button>
            <a onClick={() => {
            document.getElementById('tu').src = lowR;
          }}  href="#findTutor">3.5 Stars</a>
            <a onClick={() => {
            document.getElementById('tu').src = midR;
          }}href="#findTutor">4 Stars</a>
            <a onClick={() => {
            document.getElementById('tu').src = thirty;
          }}href="#findTutor">4.5 Stars</a>
            <button className="dropbtn" id ='sub' onclick = {sub}>   <a id = 'sub' href="#home">Language</a></button>
            <a onClick={() => {
            document.getElementById('tu').src = English;
          }}  href="#findTutor">English</a>
            <a onClick={() => {
            document.getElementById('tu').src = Alma;
          }}href="#findTutor">Spanish</a>
            <a onClick={() => {
            document.getElementById('tu').src = thirty;
          }}href="#findTutor">French</a>
          </div>
        </div>

       <p> <br></br><br></br><br></br><br></br><br></br><br></br> <div class="bottom-right"></div> <img id = "tu" class="img-thumbnail" src={t4} alt="Logo"></img> </p>
       <button id = "book" onClick={Book}><img class="img-thumbnail" src={bookbt} alt="Logo"></img></button>
      </div>


      <div class = "checklist">
        
      <div className="Appsd" style={{ maxWidth: "1080px", margin: "0 auto", padding:"0px", textAlign:"left" }}>
      <Header3 />
      <Checklist listItems={listItems} checked={checked} setChecked={setChecked} />
    </div>
     
      </div>
      <div class = 'img'>
        <br></br><br></br>
      <Header4 /> 
               <p id = 'chat'> </p>
               <div className="Chat">
      <div className="history">
        {messages.map((m, idx) => (
          <p className="message" key={idx}>
            {m}
          </p>
        ))}
      </div>
      <div>
        <input
          placeholder="Write a reply..."
          type="text"
          value={draft}
          onChange={e => {
            setDraft(e.target.value)
          }}
        />
        <button
          onClick={() => {
            setMessages([...messages, draft])
            setDraft("")
          }}
        >
          Send
        </button>
      </div>
      <div className="suggestions">
        <button
          onClick={() => {
            setDraft("Hi, nice to meet you")
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setDraft("Can I discuss something with you?")
          }}
        >
          Can I discuss something with you?
        </button>
        <button
          onClick={() => {
            setDraft("Cancel next session?")
          }}
        >
          Cancel next session?
        </button>
      </div>
    </div>
</div>
<div class = 'cont' id = 'cont'>
      <p><img class="img-thumbnail" src={contact} alt="Logo"></img> </p>
      </div>

      <div className="app" id = 'login'>
      <div className="login-form">
        <div className="title">Login</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
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