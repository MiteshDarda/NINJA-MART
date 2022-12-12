import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "CHANGE") {
    let updatedItems = [];
    let indexIfExitst = state.items.findIndex(
      (product) => product.unique_id === action.unique_id
    );
    if (action.quantity === 0) {
      if (indexIfExitst !== -1) {
        updatedItems = state.items.filter(
          (i) => i.unique_id !== action.unique_id
        );
      }
    } else {
      if (indexIfExitst !== -1) {
        updatedItems = state.items;
        updatedItems[indexIfExitst].quantity = action.quantity;
      } else {
        updatedItems = state.items;
        updatedItems.push({ unique_id: action.unique_id, quantity: 1 });
      }
    }
    return {
      items: updatedItems,
    };
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const changeItemsHandler = (quantity, unique_id) => {
    dispatchCartAction({ type: "CHANGE", quantity, unique_id });
  };

  const contextValue = {
    items: cartState.items,
    changeItems: changeItemsHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
