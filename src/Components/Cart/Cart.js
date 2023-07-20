import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {

    const cartItems = [{id:'m1',name:'Sushi' ,amount:'2' ,price:'30'}].map(item => <li>{item.name}</li>)

    return (
        <Modal>
            <ul className={classes['cart-items']}>
            {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.78</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );

};

export default Cart;