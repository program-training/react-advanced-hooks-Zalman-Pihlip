export interface Item {
    id: number;
    price: string;
    name: string;
  }
export  interface CartItem {
    product: Item;
    amount: number;
  }
export  type StateType = Array<CartItem>;
  
  export const initialState: Array<CartItem> = [];
  
  type ActionType = "increment" | "decrement" | "reset" | "add" | "remove";
  
export  interface ActionInterface {
    type: ActionType;
    id?: number;
    newItem?: Item;
  }
  
  export const reducer = (currentState: Array<CartItem>, action: ActionInterface) => {
    const { id, type, newItem } = action;
    if (type === "increment")
      return currentState.map((item) =>
        id === item.product.id ? { ...item, amount: item.amount + 1 } : item
      );
    if (type === "decrement") {
      const updatedState = currentState.map((item) =>
        id === item.product.id && item.amount >= 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      return updatedState.filter((item) => item.amount > 0);
    }
  
    if (
      type === "add" &&
      newItem &&
      !currentState.find((item) => item.product.id === newItem.id)
    )
      return [...currentState, { product: newItem, amount: 1 }];
    if (type === "remove")
      return currentState.filter((item) => item.product.id !== id);
    if (type === "reset") return initialState;
    return currentState;
  };