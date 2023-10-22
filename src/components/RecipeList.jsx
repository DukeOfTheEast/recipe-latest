import React, { useState } from "react";
import RecipeModal from "./RecipeModal";
import AddRecipeForm from "./AddRecipeForm";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    {
      name: "Spaghetti Carbonara",
      ingredients: [
        "spaghetti",
        "guanciale",
        "pecorino cheese",
        "eggs",
        "black pepper",
      ],
      instructions:
        "Cook spaghetti al dente. Meanwhile, fry guanciale until crispy. Mix eggs, cheese, and pepper. Combine everything and serve.",
    },
    {
      name: "Chicken Alfredo Pasta",
      ingredients: [
        "chicken breasts",
        "fettuccine pasta",
        "heavy cream",
        "parmesan cheese",
        "garlic",
        "butter",
        "salt",
        "black pepper",
      ],
      instructions:
        "Season and cook chicken. Cook pasta. In a saucepan, melt butter, add garlic and cream. Stir in parmesan cheese until melted. Combine with cooked pasta and sliced chicken.",
    },
    {
      name: "Margherita Pizza",
      ingredients: [
        "pizza dough",
        "tomato sauce",
        "fresh mozzarella cheese",
        "fresh basil leaves",
        "olive oil",
        "salt",
      ],
      instructions:
        "Preheat oven and pizza stone to 500°F. Roll out dough and transfer to stone. Spread sauce, add cheese, and bake until crust is golden and cheese is bubbly. Garnish with fresh basil, drizzle with olive oil, and sprinkle with salt.",
    },
    {
      name: "Caesar Salad",
      ingredients: [
        "romaine lettuce",
        "croutons",
        "parmesan cheese",
        "caesar dressing",
        "lemon juice",
        "Worcestershire sauce",
        "garlic",
        "olive oil",
        "salt",
        "black pepper",
      ],
      instructions:
        "Toss lettuce with dressing, croutons, and parmesan cheese. In a bowl, whisk together lemon juice, Worcestershire sauce, garlic, olive oil, salt, and pepper. Drizzle over the salad and serve.",
    },
    {
      name: "Beef Tacos",
      ingredients: [
        "ground beef",
        "taco seasoning",
        "taco shells",
        "lettuce",
        "tomatoes",
        "cheddar cheese",
        "sour cream",
        "salsa",
      ],
      instructions:
        "Cook ground beef, add taco seasoning and water. Warm taco shells. Assemble tacos with beef, lettuce, tomatoes, cheese, sour cream, and salsa.",
    },
    {
      name: "Chocolate Chip Cookies",
      ingredients: [
        "flour",
        "baking soda",
        "salt",
        "butter",
        "sugar",
        "brown sugar",
        "eggs",
        "vanilla extract",
        "chocolate chips",
      ],
      instructions:
        "Preheat oven to 350°F. In a bowl, combine flour, baking soda, and salt. In another bowl, cream together butter, sugar, and brown sugar. Beat in eggs and vanilla. Gradually add dry ingredients, then stir in chocolate chips. Drop rounded tablespoons onto ungreased baking sheets. Bake for 10-12 minutes or until edges are golden.",
    },
    {
      name: "Vegetable Stir-Fry",
      ingredients: [
        "broccoli",
        "bell peppers",
        "carrots",
        "snap peas",
        "garlic",
        "ginger",
        "soy sauce",
        "sesame oil",
        "vegetable oil",
        "rice",
      ],
      instructions:
        "Stir-fry broccoli, bell peppers, carrots, and snap peas in vegetable oil. Add minced garlic and ginger. Pour in soy sauce and sesame oil. Cook until vegetables are tender-crisp. Serve over cooked rice.",
    },
    {
      name: "Caprese Salad",
      ingredients: [
        "tomatoes",
        "fresh mozzarella cheese",
        "fresh basil leaves",
        "balsamic glaze",
        "olive oil",
        "salt",
        "black pepper",
      ],
      instructions:
        "Slice tomatoes and mozzarella. Arrange on a plate with fresh basil leaves. Drizzle with balsamic glaze and olive oil. Season with salt and black pepper. Serve.",
    },
    {
      name: "Pancakes",
      ingredients: [
        "flour",
        "baking powder",
        "salt",
        "sugar",
        "milk",
        "eggs",
        "butter",
        "vanilla extract",
        "maple syrup",
      ],
      instructions:
        "In a bowl, whisk together flour, baking powder, salt, and sugar. In another bowl, mix milk, eggs, melted butter, and vanilla extract. Combine wet and dry ingredients. Pour batter onto a hot, greased griddle. Cook until bubbles form on the surface, then flip and cook until golden brown. Serve with maple syrup.",
    },
    {
      name: "Chicken Noodle Soup",
      ingredients: [
        "chicken breasts",
        "chicken broth",
        "carrots",
        "celery",
        "onion",
        "garlic",
        "egg noodles",
        "salt",
        "black pepper",
        "parsley",
      ],
      instructions:
        "Cook chicken in chicken broth. Remove chicken, shred it, and return to the pot. Add carrots, celery, onion, and minced garlic. Cook until vegetables are tender. Add cooked egg noodles. Season with salt, black pepper, and chopped parsley. Serve hot.",
    },
  ]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  return (
    <div className="recipe-list">
      <AddRecipeForm addRecipe={addRecipe} />
      <div className="recipe-items">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="recipe-item"
            onClick={() => openModal(recipe)}
          >
            <h2>{recipe.name}</h2>
          </div>
        ))}
      </div>
      <RecipeModal
        isOpen={selectedRecipe !== null}
        closeModal={closeModal}
        recipe={selectedRecipe}
      />
    </div>
  );
};

export default RecipeList;
