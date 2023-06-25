import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from "react";
import { fetchAsync } from './productsSlice';
import { addCartItemAsync } from '../cart/cartSlice';
import  './Products.css';

export function Products() {
  const products  = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync());
  },[]);

  return (
    <div>
      <h1 className='products-title'>Products</h1>
      <div className="card-container">{
        products.map((product) => {
          return (
            <div className='product-card'>
              <img src={product.thumbnail} alt='product thumbnail'/>
              <h2>{product.title}</h2>
              <p>price: ${product.price}</p>
              <button className="btn" onClick={(_) => dispatch(addCartItemAsync(product))}>Add to Cart</button>
            </div>
          )
        })
      }
      </div>
    </div>
  );
}
