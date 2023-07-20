import CartContext from "./cart-context";


const CartProvider = props => {

    

    const addItemHandler = item => {

    };
    const removeItemHandler = id => {

    };

    const context = {
        items:[],
        totalAmount:0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };
    

    return <CartContext.Provider value={context} >
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;