import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const countSlice = createSlice({
    name: "my-count",
    initialState: {
        count: 0
    },
    reducers: {
        increment: state => {
            state.count += 1
        },
        decrement: state => {
            state.count -= 1
        }
     
    }
});

export const getCount=createAsyncThunk(
    "get-shopping-cart-count",
    async()=>{
        return await axios.get(` `)
    }
)
export const getCountSlice=createSlice({
    name:"getshop",
    initialState :{
        data: 0,
        isLoading:false,
        error:null 
    },
    extraReducers :builder =>{
        builder
        .addCase(getCount.pending,(state)=>(state.isLoading=true))
        .addCase(getCount.fulfilled,(state,action)=>(state.isLoading=false)
    
    )
    }
})

export const {increment,decrement} = countSlice.actions;
export default countSlice.reducer;