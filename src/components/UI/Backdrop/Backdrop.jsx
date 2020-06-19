import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = ({ show, clicked }) => (
  <div className={classes.Backdrop} onClick={clicked}></div>
);
export default backdrop;
