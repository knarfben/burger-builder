import React, { useContext } from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.module.css";
import IngredientsContext from "../../../containers/BurgerBuilder/IngredientsContext";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  const contextValue = useContext(IngredientsContext);

  return (
    <div className={classes.BuildControls}>
      {controls.map((c) => (
        <BuildControl
          key={c.type}
          label={c.label}
          lessDisabled={contextValue[c.type] === 0}
          onAddIngredient={() => props.addIngredient(c.type)}
          onRemoveIngredient={() => props.removeIngredient(c.type)}
        />
      ))}
    </div>
  );
};

export default BuildControls;
