import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((c) => (
      <BuildControl
        key={c.type}
        label={c.label}
        onAddIngredient={() => props.addIngredient(c.type)}
        onRemoveIngredient={() => props.removeIngredient(c.type)}
      />
    ))}
  </div>
);

export default buildControls;
