import React ,{ useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";


const App = () => {

  const [ cartOpen, setCartOpen ] = useState(false);


  const cartHandler = () =>
  {
    setCartOpen(true);
    //console.log('cart clicked');
  };

  const cartCloseHandler = () =>
  {
    setCartOpen(false);
  };


  return (
    <CartProvider>
      { cartOpen && <Cart onClick={cartCloseHandler}/> }
      <Header onClick={cartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
