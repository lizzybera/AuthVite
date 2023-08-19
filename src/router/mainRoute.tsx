import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import Register from "../pages/auth/Register"
import HomeScreen from "../pages/screen/HomeScreen"
import SignIn from "../pages/auth/SignIn"
import Landingpage from "../pages/screen/Landingpage"
import DonateBooks from "../pages/screen/DonateBooks"
import PrivateRoute from "./PrivateRoute"
import BooksAdded from "../pages/screen/BooksAdded"

export const mainRoute = createBrowserRouter([
    {
       path : "/",
       element : <Layout />,
       children : [
        {
            index : true,
            element :
             <PrivateRoute>
                <HomeScreen /> 
               // </PrivateRoute>,
               
        },
        {
            path: "/donate",
            element : <DonateBooks />
        },
        {
            path: "/add",
            element : <BooksAdded />
        },
       ] 
    },
    {
        path : "/register",
        element : <Register />
    },
    {
        path : "/signin",
        element : <SignIn />
    },
    {
        path : "/landing",
        element : <Landingpage />
    },
]) 