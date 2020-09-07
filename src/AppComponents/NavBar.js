import React from "react";
import "../Navigation.css";

function NavBar() {
  return (
    <div>
      <header>
        <img
          className="logo"
          src={require("../images/thunder-svgrepo-com.svg")}
          alt="logo"
        ></img>
        <h1 className="pageName">Weather Monkey</h1>
        <nav>
          <ul className="nav_links">
            <li>
              <a href="https://www.linkedin.com/in/saheeldas21">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/xSaheel">GitHub</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
