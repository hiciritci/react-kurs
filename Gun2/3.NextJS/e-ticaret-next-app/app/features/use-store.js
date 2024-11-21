import { api } from "@/utilities/constants";
import axios from "axios";
import { create } from "zustand";

export const useStore=create((set)=>({
    count:0,
    isLoading:false,
    error:null, 
    increment: ()=>set ((state)=>({count:state.count+1})),
    decrement: ()=> set ((state)=>({count:state.count-1})),
    get: async ()=>{
        set(()=>{isLoading:true})
        try{
            var result=await axios.get(`${api}/api/ShoppingCarts/count`);
            set(()=>{count:result.data;isLoading:false})
        }
        catch{
            set(()=>{error:result.error.message; isLoading :false})
        }
    }
}));