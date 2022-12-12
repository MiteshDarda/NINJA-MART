import React from "react";

const CartContext = React.createContext({
  items: [],
  changeItems: () => {},
});

export default CartContext;
