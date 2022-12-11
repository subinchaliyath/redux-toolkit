import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk handles the pending, fulfilled, rejected actions
export const fetchUser = createAsyncThunk("user/fetchUser", async (count) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${count}`
  );
  return response.data;
});

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message || "something went wrong";
    });
  },
});
export default userSlice.reducer;
