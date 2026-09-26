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
  },
});

export default cartSlice.reducer;
export const { addItem } = cartSlice.actions;

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((price, curr) => {
    return price + curr.totalPrice;
  }, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((q, curr) => {
    return q + curr.quantity;
  }, 0);
