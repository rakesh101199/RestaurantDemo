import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //console.log(action.item);
  //console.log(state.items);
  if (action.type === "Add") {
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
    const existedCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existedCartItem = state.items[existedCartItemIndex];
    let updatedItems;
    if (existedCartItem) {
      const updatedItem = {
        ...existedCartItem,
        amount: existedCartItem.amount + action.item.amount,
      };
      updatedItems = state.items;
      updatedItems[existedCartItemIndex] = updatedItem;
      //console.log("item Already exist");
    } else {
      updatedItems = state.items.concat(action.item);
      //console.log("new item");
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if(action.type==='Remove'){
    const existedCartItemIndex = state.items.findIndex((item)=> item.id === action.id);
    const existedCartItem = state.items[existedCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existedCartItem.price;
    const updatedAmount = existedCartItem.amount -1;
    let updatedItems;
    const updatedItem = {
      ...existedCartItem,
      amount: updatedAmount
    };
    updatedItems = state.items;
    updatedItems[existedCartItemIndex] = updatedItem;
    if(updatedItem.amount === 0){
      updatedItems.splice(existedCartItemIndex,1);
    };
    
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "Add",
      item: item,
    });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "Remove",
      id: id,
    });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
