import React from "react";
import burgerLogo from "../../../assets/images/burger-builder-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="Burger Builder Logo" />
  </div>
);

export default logo;
