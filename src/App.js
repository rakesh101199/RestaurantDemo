import React ,{ Fragment , useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";


const App = () => {

  const [ cartOpen, setCartOpen ] = useState(false);


  const cartHandler = () =>
  {
    setCartOpen(true);
    console.log('cart clicked');
  };

  const cartCloseHandler = () =>
  {
    setCartOpen(false);
  };


  return (
    <Fragment>
      { cartOpen && <Cart onClick={cartCloseHandler}/> }
      <Header onClick={cartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
