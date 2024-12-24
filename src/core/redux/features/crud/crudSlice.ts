import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addItem, deleteItem, fetchItems, updateItem } from "./crudThunks";

interface CrudSlice {
  items: ICrudItem[];
  status: "idle" | "succeded" | "fail";
  error: string | null;
}

const initialState: CrudSlice = {
  items: [],
  status: "idle",
  error: null,
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addItem.fulfilled, (state, action: PayloadAction<ICrudItem>) => {
        state.items.push(action.payload);
        console.log(action.payload);
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<ICrudItem[]>) => {
        state.items = action.payload;
        state.status = "succeded";
      })
      .addCase(updateItem.fulfilled, (state, action: PayloadAction<ICrudItem>) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index >= 0) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteItem.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default crudSlice.reducer;
