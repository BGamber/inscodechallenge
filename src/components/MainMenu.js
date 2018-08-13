import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import "../styles/MainMenu.css";

let MainMenu = () => (
  <div>
    <Header content="Acquisition Tools" />
    <div className="menu">
      <Link className="menu-button" to="/view">
        View Targets
      </Link>
      <Link className="menu-button" to="/edit">
        Edit/New Target
      </Link>
    </div>
  </div>
);

export default MainMenu;
