import { createSlice } from "@reduxjs/toolkit";

export const couterSlice = createSlice({
    name: "count",
    initialState: {
        value: 0
    },

    reducers: {
        increment: (state) =>{
          state.value += 1
        },
        decrement: (state) =>{
          state.value -= 1
        },
        IncreaseByAmount: (state, action) =>{
          state.value += action.payload
        },
    }
})


export const {increment, decrement, IncreaseByAmount} = counterSlice.action
export default counterSlice.reducers