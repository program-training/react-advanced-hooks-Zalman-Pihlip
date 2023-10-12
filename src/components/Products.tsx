import { FC, useEffect, useReducer } from "react";
import { items } from "../data/items";
import { reducer, initialState, CartItem } from "../util/util";
type ProductProps = {
    setCart: React.Dispatch<React.SetStateAction<CartItem[] | null>>
}

const Products:FC<ProductProps> = ({setCart}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setCart(state);
  }, [state]);
useEffect(() => {
    const state = localStorage.getItem("cart")
    if (!state) return
    setCart(JSON.parse(state) as unknown as CartItem[] | null)
},[])
  const handleChangeState = () => {
    localStorage.setItem("cart", JSON.stringify(state));
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {items.map((item) => {
        const { id, name, price } = item;
        return (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              padding: "5px",
              width: "150px",
              margin: "5px",
              border: "2px solid black",
              backgroundColor: "aqua",
              borderRadius: "15px",
              alignItems: "center"
            }}
          >
            <span>name: {name}</span>
            <span>price: {price}</span>
            <button
              onClick={() => {
                handleChangeState();
                dispatch({ type: "add", id: id, newItem: item });
              }}
            >
              add to cart
            </button>
            <div>
            <button
              onClick={() => {
                dispatch({ type: "increment", id: id });
                handleChangeState();
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                dispatch({ type: "decrement", id: id });
                handleChangeState();
              }}
            >
              -
            </button>
            </div>
            <button
              onClick={() => {
                dispatch({ type: "remove", id: id });
                handleChangeState();
              }}
            >
              remove from cart
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch({ type: "reset" });
          localStorage.removeItem("cart")
        }}
      >
        clear cart
      </button>
    </div>
  );
};

export default Products;