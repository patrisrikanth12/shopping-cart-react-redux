import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart';

function App() {
  console.log("App started");
  return (
    <div className="App">
      <Products />
      <Cart />
    </div> 
  );
}

export default App;
