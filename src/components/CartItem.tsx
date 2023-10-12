import { FC } from "react";
import { CartItem } from "../util/util";

type ItemInCartProps = { item: CartItem };

const ItemInCart: FC<ItemInCartProps> = ({ item: { amount, product } }) => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "5px",
        width: "150px",
        margin: "5px",
        border: "2px solid black",
        backgroundColor: "aqua",
        borderRadius: "15px",
      }}>
      <span>name: {product.name}</span>
      <span>price: {Number.parseInt(product.price) * amount}</span>
      <span>quantity: {amount}</span>
    </div>
  );
};

export default ItemInCart;
