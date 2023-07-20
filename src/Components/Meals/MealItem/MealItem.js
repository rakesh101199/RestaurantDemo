import React ,{ useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const AddCartHandler = amount => {

    cartCtx.addItem({
      id:props.id,
      price:props.price,
      amount:amount,
      name:props.name
    });

  };


  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={AddCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
