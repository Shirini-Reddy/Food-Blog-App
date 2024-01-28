// FoodRecipe.jsx
import React, { useEffect, useState } from "react";
import foodData from './foodDatabase.json';
import { useParams } from "react-router-dom";
import './fooditems.css';

const FoodRecipe = () => {
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
        <>
          <h1>{itemDetails.item_name} Recipe</h1>

          <h3>Ingredients:</h3>
          <ul>
            {itemDetails.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>Instructions:</h3>
          <ol>
            {itemDetails.recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodRecipe;
