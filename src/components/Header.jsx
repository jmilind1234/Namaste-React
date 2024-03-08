import { useState } from "react";
import { platformLogo } from "../data/const";
import { Link } from "react-router-dom";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={platformLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button onClick={() => setLoggedIn(!loggedIn)}>
              {loggedIn ? "LOGOUT" : "LOGIN"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
