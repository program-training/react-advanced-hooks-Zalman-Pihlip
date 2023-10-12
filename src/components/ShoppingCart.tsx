import { useState } from "react";
import {CartItem } from "../util/util";
import Products from "./Products";
import ItemsInCart from "./CartItems";

const ShoppingCart = () => {
  const [cart, setCart] = useState<Array<CartItem> | null>(null);
 return(<>
<Products setCart={setCart}/> 
  {cart && <ItemsInCart items={cart}/>}
 </>  
  );
};

export default ShoppingCart;

// { cart && <div style={{
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   }}>{ cart.map((item, i) => <ItemInCart key={i} item={item}/>)}</div>}