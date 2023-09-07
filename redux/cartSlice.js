import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    incrementCart: (state) => {
      state.cartCount += 1;
    },
    decrementCart: (state) => {
      state.cartCount -= 1;
    },
  },
});

export const { incrementCart, decrementCart } = cartSlice.actions;
export default cartSlice.reducer;