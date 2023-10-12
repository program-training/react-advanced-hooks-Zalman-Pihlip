import { FC } from "react";
import { CartItem } from "../util/util";
import ItemInCart from "./CartItem";
import Payment from "./Payment";

type ItemsInCartProps = { items: CartItem[] };

const ItemsInCart: FC<ItemsInCartProps> = ({ items }) => {
  const payment = items.map(
    (item) => item.amount * Number.parseInt(item.product.price)
  );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {items.map((item, i) => (
        <ItemInCart key={i} item={item} />
      ))}
      <Payment payment={payment} />
    </div>
  );
};

export default ItemsInCart;
