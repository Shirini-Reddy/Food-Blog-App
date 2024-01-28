import {FOOD_DATA} from './actionType';

export const initialState = {};


export default(state=initialState,action) => {
    switch(action.type){
        case FOOD_DATA:{
            return{
                ...state,
                foodList:action.payload
            }
        }
       
        default: 
            return state
    }
}