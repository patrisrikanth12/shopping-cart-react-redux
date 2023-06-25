import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  './Cart.css';
import { fetchCartItemsAsync } from './cartSlice';

export function Cart() {
  const cartItems  = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItemsAsync());
  }, []);

  return (
    <div>
      <h1 className='products-title'>Cart</h1>
      {
        cartItems.map((item) => {
          return (
            <div className='cartitem__card'>
              <img src={item.thumbnail} alt='product thumbnail'/>
              <h2 className='cartitem__title'>{item.title}</h2>
              <p className='cartitem__price'>price: ${item.price}</p>
            </div>
          )
        })
      }
    </div>
  );
}
