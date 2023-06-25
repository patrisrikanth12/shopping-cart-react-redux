import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  './Cart.css';
import { fetchCartItemsAsync, deleteCartItemAsync } from './cartSlice';

export function Cart() {
  const cartItems  = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItemsAsync());
  }, []);

  return (
    <div>
      <h1 className='products-title'>Cart</h1>
      <div className="card-container">{
        cartItems.map((item) => {
          return (
            <div className='cartitem__card'>
              <button className="delete-btn" onClick={() => dispatch(deleteCartItemAsync(item.id))}> X </button>
              <img src={item.thumbnail} alt='product thumbnail'/>
              <h2 className='cartitem__title'>{item.title}</h2>
              <p className='cartitem__price'>price: ${item.price}</p>
              <div>
              <p>Quantity: 
                <button>+</button> {item.quantity} <button>-</button></p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}
