import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import{
    FOOD_DATA
} from '../store/foodData/actionType'

const baseUrl = "http://localhost:3500";
export const getfoodData = () => {
    return dispatch => {
        dispatch({
            type:FOOD_DATA,
            payload:{data:[]}
        })

        return axios.get(`${baseUrl}/food`).then((response) => {
            const respData = response.data;
            dispatch({
                type:'FOOD_DATA',
                payload:{data:respData}
            })
        })
    }
}