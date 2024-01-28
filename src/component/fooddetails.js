import React,{useState,useEffect} from "react";
import foodData from './foodDatabase.json';
import { useParams } from "react-router-dom";
import './fooditems.css';

const FoodDetails=()=>{
    const { itemId } = useParams();
    const [itemDetails, setItemDetails] = useState(null);

    useEffect(() => {
      const getItemDetailsById = (itemId) => {
        const item = foodData.food.find((item) => item.id === itemId);
        return item || null;
      };
  
      const details = getItemDetailsById(itemId);
      setItemDetails(details);
    }, [itemId]);
  
    return (
      <div>
        {itemDetails ? (
            <div style={{display:'flex'}}>
          <div className="food-details">
            <img src={itemDetails.image}/>
            <h4>{itemDetails.item_name}</h4>
          </div>
          <div className="food-description">
              <h2>Description:</h2>
              <p>{itemDetails.description}</p>
              <p>  <li>
                {itemDetails.meal_type}
              </li></p>
              <p>Price:{itemDetails.item_price}</p>
          </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
}
export default FoodDetails;