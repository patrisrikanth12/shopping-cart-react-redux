import axios from "axios";

export function fetchCartItems() {
  return axios.get("http://localhost:3000/cart");
}

export function addCartItem(item) {
  return axios.post("http://localhost:3000/cart" , item);
}

export function updateCartItem(id, updatedItem) {
  return axios.patch(`http://localhost:3000/cart/${id}`, updatedItem);
}

export function deleteCartItem(id) {
  return axios.delete(`http://localhost:3000/cart/${id}`);
}