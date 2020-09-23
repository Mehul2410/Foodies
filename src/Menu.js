import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Menu.css";
import { IconContext } from "react-icons";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

function Menu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <h3 className="header3">Follow us</h3>
            <div className="menu__follow">
              <Link to="/">
                <Facebook className="fa fa-facebook1" />
              </Link>
              <Link to="/">
                <Twitter className="fa fa-twitter1" />
              </Link>
              <Link to="/">
                <Instagram className="fa fa-instagram1" />
              </Link>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
