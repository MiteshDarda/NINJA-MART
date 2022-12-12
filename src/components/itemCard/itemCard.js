import { useContext } from "react";
import { useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Box from "../utility/Box";
import Button from "../utility/Button";

function ItemCard(props) {
  const { quantities, setQuantities } = props;
  const [quantity, setQuantity] = useState(0);
  const imgLink = props.img;

  const ctx = useContext(CartContext);

  useEffect(() => {
    ctx.changeItems(quantity, props.unique_id);
  }, [quantity]);

  function decrementHandler() {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  }
  function incrementHandler() {
    if (quantity === props.limit) return;
    setQuantity((prev) => prev + 1);
  }

  return (
    <Box className="box-shadow hover-increase-size">
      <img className="iteam-card-img" src={imgLink} alt="IteamCard" />
      <div className="flex-row" style={{ justifyContent: "space-between" }}>
        <h1>{props.name}</h1>
        <h3>
          {props.cur} {props.cost}
        </h3>
      </div>
      <div className="flex-row">
        <Button
          disabled={quantity === 0 ? true : false}
          onClick={decrementHandler}
        >
          -
        </Button>
        {quantity}
        <Button
          disabled={quantity === props.limit ? true : false}
          onClick={incrementHandler}
        >
          +
        </Button>
      </div>
    </Box>
  );
}

export default ItemCard;
