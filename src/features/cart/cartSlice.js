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
    const response = await addCartItem(item);
    console.log(response);
    return response.data;
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
      });
  },
});

export const {  } = cartSlice.actions;

export default cartSlice.reducer;
