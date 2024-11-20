import { createSlice } from "@reduxjs/toolkit";

export const countSlice=createSlice({
    name:"my-count",
    initialState :{
        count:0
    }
});

