import React, { useState } from "react";
import "./landing.css"; 
import { Link } from "react-router-dom";  

export default function LoadingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="page-body">
      <header className="page-header">
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <div className="logo">
          <span>  Rc  </span>UNIVERSITY
          <br/> RESEARCH CELL
        </div>
        <div className="user-icon" onClick={toggleLogin}>&#128100;</div>
      </header>

      {menuOpen && (
        <div className="menu-dropdown">
          <ul>
            <li>Home</li>
            <li>Browse</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      <div className="main-content">
        <h1>
           UNIVERSITY
           <br/> RESEARCH CELL
        </h1>

        <div className="search-container">
          <div className="search-wrapper" >
            <input
              type="text"
              className="search-box"
              placeholder="Search"
              readOnly
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>

        <div className="card">
          <h2>Welcome to the<br/> University Research Cell </h2>
          <p>
            <em>
              A community engaged with a repository of resources to support
              computing research and practice
            </em>
          </p>
          <p>
            Please explore and use the <span className="feedback-highlight">[Feedback]</span> button on any
            page to help us
            <br />
            shape the new site.
          </p>
        </div>
      </div>

      {showLogin && (
        <div className="login-popup">
          <div className="login-modal">
            <span className="close-button" onClick={closeLogin}>
              &times;
            </span>
          
            <h2>LOGIN</h2>
          
            <input type="email" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button className="login-button">Continue</button>
            <p className="login-or">or</p>
            <button className="google-button">
              <span className="google-icon">G</span> Sign in with Google
            </button>
            
            <p className="login-footer">
              Are you new here? <Link to="/signup">Get started</Link> {/* <-- Use Link */}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
