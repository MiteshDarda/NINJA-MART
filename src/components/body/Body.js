import data from "../../API/data";
import ItemCard from "../itemCard/itemCard";
import Box from "../utility/Box";

const Body = (props) => {
  return (
    <Box
      className="flex-row"
      style={{ justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {/* <ItemCard {...data[0]} /> */}
      {data.map((product) => {
        return (
          <ItemCard
            key={product.unique_id}
            {...product}
            quantities={props.quantities}
            setQuantities={props.setQuantities}
          />
        );
      })}
    </Box>
  );
};

export default Body;
