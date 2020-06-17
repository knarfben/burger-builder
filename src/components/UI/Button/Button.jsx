import React from "react";
import classes from "./Button.module.css";

const button = ({ clicked, buttonType, children }) => (
  <button
    className={[classes.Button, classes[buttonType]].join(" ")}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
