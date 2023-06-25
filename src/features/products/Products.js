import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './productsSlice';
import { addCartItemAsync } from '../cart/cartSlice';
import  './Products.css';

export function Products() {
  const products  = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className='products-title'>Products</h1>
      <button className='refresh-btn' onClick={(_) => dispatch(fetchAsync())}>refresh</button>
      {
        products.map((product) => {
          return (
            <div className='product-card'>
              <img src={product.thumbnail} alt='product thumbnail'/>
              <h2>{product.title}</h2>
              <p>price: ${product.price}</p>
              <button onClick={(_) => dispatch(addCartItemAsync(product))}>Add to Cart</button>
            </div>
          )
        })
      }
    </div>
  );
}
