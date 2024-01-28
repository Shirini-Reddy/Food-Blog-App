import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { FoodSelectors } from '../store/foodData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodRecipe from '../component/foodrecipe';
import {
    getfoodData
} from '../services/getfoodData'

import LatestNews from '../component/LatestDisplay';

const Home = () => {
    const dispatch = useDispatch();

    const foodItemsList = useSelector(
        FoodSelectors.getfoodData
    )

  

    

    useEffect(()=> {
        dispatch(getfoodData())
         
    },[])
    

    return(
        <div>
            <LatestNews ldata={foodItemsList?.data}/>
            
        </div>
    )

}

export default Home