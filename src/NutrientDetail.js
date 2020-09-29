import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./RecipeDetails.css";

const NutrientDetails = ({ digest }) => {
  return digest.map((digests) => {
    return (
      <ul key={uuidv4} className="ingredient-list">
        <li className="ingredient-text">{digests.label}</li>
        <li className="ingredient-text">{digests.schemaOrgTag}</li>
        <li className="ingredient-text">{digests.tag}</li>
        <li className="ingredient-text">{digests.unit}</li>
      </ul>
    );
  });
};

export default NutrientDetails;
