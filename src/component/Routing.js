import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Main from "./main";
import Home from "../container/Home";
import FoodRecipe from "./foodrecipe";
import FoodDetails from "./fooddetails";

const Routing=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}>
              <Route index element={<Home/>}/>
              <Route path="/foodRecipe/:itemId" Component={FoodRecipe}/>
              <Route path="/foodDetails/:itemId" Component={FoodDetails}/>
            </Route>
        </Routes>
        </BrowserRouter>
       
    )
}
export default Routing;