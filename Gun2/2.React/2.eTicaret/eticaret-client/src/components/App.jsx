import { RouterProvider } from "react-router-dom";
import { router } from "../utilities/router";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";


function App() {
    return (
        <>
            <RouterProvider router={router} future={{ v7_startTransition: true }} />
        </>
    )
}
  

export default App;