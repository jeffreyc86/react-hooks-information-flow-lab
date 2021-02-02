import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header"
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick(e) {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    if (e.target.innerText === "Light Mode") {
      e.target.innerText = "Dark Mode"
    } else {
      e.target.innerText = "Light Mode"
    }
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
        onDarkModeClick={handleDarkModeClick}/>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
