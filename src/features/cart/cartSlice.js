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
    decreaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity === 1) cartSlice.caseReducers.deleteItem(state, action);
      else {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    increaseItem(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, clearCart, deleteItem, decreaseItem, increaseItem } =
  cartSlice.actions;

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
