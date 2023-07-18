import classes from './Input.module.css';

const Input = props => {

    return <form className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
    </form>
};

export default Input;