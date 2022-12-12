import { useState } from "react";
import Body from "./components/body/Body";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="App">
        <Header setShowCart={setShowCart} />
        <Body />
        <Cart showCart={showCart} setShowCart={setShowCart} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
