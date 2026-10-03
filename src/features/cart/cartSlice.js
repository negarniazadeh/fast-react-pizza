import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, deleteItem } = cartSlice.actions;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity || 0;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((price, curr) => {
    return price + curr.totalPrice;
  }, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((q, curr) => {
    return q + curr.quantity;
  }, 0);
