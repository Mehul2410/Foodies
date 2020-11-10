import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Menu />
      </div>
      <div className="header__right">
        <h3>Follow us</h3>
        <Link to="/">
          <Facebook className="fa fa-facebook" />
        </Link>
        <Link to="/">
          <Twitter className="fa fa-twitter" />
        </Link>
        <Link to="/">
          <Instagram className="fa fa-instagram" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
