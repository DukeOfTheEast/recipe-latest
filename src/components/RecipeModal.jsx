import React from "react";

const RecipeModal = ({ isOpen, closeModal, recipe }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default RecipeModal;
