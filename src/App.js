import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';

function App() {
  const [cartVisiblity, setCartVisibility]= useState(false);

  const cartSize = useSelector((state) => state.cart.items.length);

  return (
    <div className="App">
      <header>
      <button className="toggle-screen-btn" onClick={() => setCartVisibility(!cartVisiblity)}>
        {cartVisiblity ? "Show Products" : `Show Cart (${cartSize})`}
      </button>
      </header>
      {!cartVisiblity ? <Products/> : <Cart />}
    </div> 
  );
}

export default App;
