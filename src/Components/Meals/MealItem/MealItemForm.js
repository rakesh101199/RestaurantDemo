import React , { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const inputRef = useRef();
  const [validAmount , setValidAmount] = useState(true);


  const submitHandler = event =>{
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber > 5 || enteredAmountNumber < 1){
      setValidAmount(false);
      return ;
    }

    props.onAddCart(enteredAmountNumber);

  };

  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          id: "amount",
        }}
      />
      <div>
        <button className={classes.button}>+ Add</button>
      </div>
      {!validAmount && <p>Please enter valid amount (1-5)!</p>}
    </form>
  );
};

export default MealItemForm;
