// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartCount: 0,
//   },
//   reducers: {
//     incrementCart: (state) => {
//       state.cartCount += 1;
//     },
//     decrementCart: (state) => {
//       state.cartCount -= 1;
//     },
//   },
// });

// export const { incrementCart, decrementCart } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementCart: (state, action) => {
      const dishId = action.payload;
      const existingItem = state.items.find((item) => item.dishId === dishId);
      if (existingItem) {
        existingItem.count++;
      } else {
        state.items.push({ dishId, count: 1 });
      }
    },
    decrementCart: (state, action) => {
      const dishId = action.payload;
      const existingItem = state.items.find((item) => item.dishId === dishId);
      if (existingItem && existingItem.count > 1) {
        existingItem.count--;
      } else {
        const index = state.items.findIndex((item) => item.dishId === dishId);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      }
    }
  }
});

export const { incrementCart, decrementCart } = cartSlice.actions;

export const selectCount = (state) => state.cart.items;

export default cartSlice.reducer;


