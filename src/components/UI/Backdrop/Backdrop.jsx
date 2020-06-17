import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = ({ cancelPurchase }) => (
  <div className={classes.Backdrop} onClick={cancelPurchase}></div>
);

export default backdrop;
