import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";
import Footer from "./components/Footer";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="App">
      <h2 className="logo">MyRecipe</h2>
      <Vision />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
