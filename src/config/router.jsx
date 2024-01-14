import {createBrowserRouter,RouterProvider,} from "react-router-dom";
// import { productDetails } from "../views/details/detail";
import { Productdetails } from "../views/details/detail";
import App from '../App'
const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,
    },
    {
      path: "/detail/:id",
      element:<Productdetails/>,
    },
  ]);


export default function RouterConfig(){
    return(
        <RouterProvider router={router} />
    )
}