import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log("Adding to cart in reducer:", item);
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.product === existItem.product ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return {
          ...state,
          cartItems: state.cartItems.concat([item]),
        };
      }
      console.log("Cart items after adding:", state.cartItems);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
