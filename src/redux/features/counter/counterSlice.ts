import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  count: number;
}
const initialState: counterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // state.count += 1
      state.count = state.count + 1;
    },
    decrement: (state) => {
      // state.count -= 1
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
