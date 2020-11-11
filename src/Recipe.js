import React, { useState } from "react";
import "./Recipe.css";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>

      <a href={url} target="_blnak" rel="noopener noreferrer">
        <img src={image} alt={label} />
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && (
        <RecipeDetails className="ingredient__body" ingredients={ingredients} />
      )}
    </div>
  );
};

export default Recipe;
