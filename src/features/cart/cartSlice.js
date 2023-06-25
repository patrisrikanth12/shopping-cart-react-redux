import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCartItem, deleteCartItem, fetchCartItems, updateCartItem } from './CartAPI';

const initialState = {
  items: [],
  status: 'idle',
};


export const fetchCartItemsAsync = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    const response = await fetchCartItems();
    return response.data;
  }
);

export const addCartItemAsync = createAsyncThunk(
  'cart/addCartItem',
  async (item) => {
    const {id, title, thumbnail, price} = item;
    const response = await addCartItem({id, title, thumbnail, price, quantity: 1});
    return response.data;
  }
);

export const deleteCartItemAsync = createAsyncThunk(
  'cart/deleteCartItem',
  async (id) => {
    await deleteCartItem(id);
    return id;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItemsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(addCartItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCartItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items.push(action.payload);
      })
      .addCase(deleteCartItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCartItemAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.items.findIndex(item => item.id == action.payload);
        state.items.splice(index, 1);
      });
  },
});

export const {  } = cartSlice.actions;

export default cartSlice.reducer;
