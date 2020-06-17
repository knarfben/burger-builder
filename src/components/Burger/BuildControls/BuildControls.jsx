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
      <p>
        Current Price: <strong>{props.price.toFixed(2)}€</strong>
      </p>
      {controls.map((c) => (
        <BuildControl
          key={c.type}
          label={c.label}
          lessDisabled={contextValue[c.type] === 0}
          onAddIngredient={() => props.addIngredient(c.type)}
          onRemoveIngredient={() => props.removeIngredient(c.type)}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.initPurchase}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
