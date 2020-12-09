import React, { useState } from "react";
import "./Recipe.css";
import NutrientDetail from "./NutrientDetail";

const ExpertM = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, calories, digest } = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>

      <a href={url} target="_blnak" rel="noopener noreferrer">
        <img src={image} alt={label} />
      </a>
      <h3>Calories:{calories}</h3>
      <button onClick={() => setShow(!show)}>Details</button>
      {show && (
        <div className="nut__box">
          <NutrientDetail digest={digest} />
        </div>
      )}
    </div>
  );
};

export default ExpertM;
