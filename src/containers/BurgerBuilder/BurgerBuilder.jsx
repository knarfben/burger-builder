import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import IngredientsContext from "./IngredientsContext";

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  ingredientHandler = (type, add) => {
    console.log("state: ", this.state);
    let sign = 1;
    if (!add) {
      sign = -1;
    }
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + sign;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    if (updatedCount >= 0) {
      const priceAddition = INGREDIENTS_PRICES[type];
      const updatedPrice = this.state.totalPrice + priceAddition * sign;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedPrice,
      });
    }

    console.log("state: ", this.state);
  };

  addIngredientHandler = (type) => {
    this.ingredientHandler(type, true);
  };

  removeIngredientHandler = (type) => {
    this.ingredientHandler(type, false);
  };

  render() {
    return (
      <IngredientsContext.Provider value={this.state.ingredients}>
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
          />
        </Aux>
      </IngredientsContext.Provider>
    );
  }
}

export default BurgerBuilder;
