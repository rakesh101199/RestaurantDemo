import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
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
    </form>
  );
};

export default MealItemForm;
