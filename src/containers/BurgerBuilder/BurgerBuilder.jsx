import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import IngredientsContext from "./IngredientsContext";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchasable: false,
  };

  updatePurchasableState = () => {
    const ingredients = { ...this.state.ingredients };
    const ingredientSum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    console.log(
      "BurgerBuilder -> updatePurchasableState -> ingredientSum",
      ingredientSum
    );
    this.setState({ purchasable: ingredientSum > 0 });
  };

  ingredientHandler = (type, add) => {
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
      this.setState(
        {
          ingredients: updatedIngredients,
          totalPrice: updatedPrice,
        },
        this.updatePurchasableState
      );
    }

    console.log(
      "BurgerBuilder -> ingredientHandler -> updatedIngredients",
      updatedIngredients
    );
    this.updatePurchasableState();
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
          <Modal>
            <OrderSummary ingredients={this.state.ingredients} />
          </Modal>
          <div class="modal fade" id="modal-id">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                  <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
          />
        </Aux>
      </IngredientsContext.Provider>
    );
  }
}

export default BurgerBuilder;
