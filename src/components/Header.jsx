import { useState } from "react";
import { platformLogo } from "../data/const";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={platformLogo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
