import cartLogo from "../../img/shopping-cart.png";

function Header({ setShowCart }) {
  function showCartHandler() {
    setShowCart(true);
  }
  return (
    <header className="flex-row header">
      <h1>Ninja Mart</h1>
      <img
        src={cartLogo}
        alt="logo"
        className="cart-logo"
        onClick={showCartHandler}
      />
    </header>
  );
}

export default Header;
