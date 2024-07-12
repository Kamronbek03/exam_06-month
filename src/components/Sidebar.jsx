import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

import logo from "../assets/images/logo.svg";
import settings from "../assets/images/settings.svg";
import shop from "../assets/images/shop.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} className="logo" alt="Logo..." />
      </Link>
      <div className="pages">
        <NavLink to="/" activeClassName="active">
          <img src={settings} className="icon" alt="Settings..." />
        </NavLink>
        <NavLink to="/add-product" activeClassName="active">
          <img src={shop} className="icon" alt="Shop..." />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
