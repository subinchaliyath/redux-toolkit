import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 1,
};

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
