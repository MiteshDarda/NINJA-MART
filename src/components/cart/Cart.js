import Box from "../utility/Box";
import Button from "../utility/Button";
import Modal from "../utility/Modal";
import data from "../../API/data";
import Info from "./Info";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const [showInfo, setShowInfo] = useState(false);
  const ctx = useContext(CartContext);
  console.log(ctx.items);
  const quantities = ctx.items;
  return (
    <Modal flag={props.showCart} setShowModal={props.setShowCart}>
      {quantities.length !== 0 ? (
        <>
          <Box>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost</th>
                  <th>Quantity</th>
                  <th>Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {quantities.map((item) => {
                  const dataIndex = data.findIndex(
                    (i) => i.unique_id === item.unique_id
                  );
                  return (
                    <tr key={item.unique_id}>
                      <td>{data[dataIndex].name}</td>
                      <td>{data[dataIndex].cost}</td>
                      <td>{item.quantity}</td>
                      <td>{item.quantity * data[dataIndex].cost}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>
          <span className="cart-button-span">
            <Button onClick={() => setShowInfo(true)}>Checkout</Button>
          </span>
          {showInfo && <Info />}
        </>
      ) : (
        <Box>
          <div>Add Some Items Please</div>
        </Box>
      )}
    </Modal>
  );
}

export default Cart;
