import { createBrowserRouter } from "react-router-dom";
import Layout from "../compenents/Layout";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Home  from "../pages/Home";

export const router=createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/",
        element:<Layout/>,
        childre:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/products",
                element:<Product/>
            }
        ]

    }
]);