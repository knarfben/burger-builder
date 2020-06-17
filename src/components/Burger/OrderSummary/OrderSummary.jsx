import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../../components/UI/Button/Button";

const orderSummary = ({ ingredients, cancelPurchase, continuePurchase }) => {
  const ingredientsSummary = Object.keys(ingredients).map((igKey) => (
    <li key={igKey}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
      {ingredients[igKey]}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={cancelPurchase}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={continuePurchase}>
        Order
      </Button>
    </Aux>
  );
};

export default orderSummary;
