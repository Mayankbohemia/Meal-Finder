import React, { useState, useEffect } from "react";
import Recepi from "../Recepi/recepi";
import "./saved.css";
import image from "./empty.webp";

function Saved() {
  const [cart, setCart] = useState(true);

  const data = JSON.parse(localStorage.getItem("savedRecipes"));

  useEffect(() => {
    if (data) {
      setCart(false);
    }
  }, [data]);

  return (
    <div className="main">
      <h2>Saved Recipes</h2>
      <div className="saved__container">
        {data?.map((curr, i) => {
          return <Recepi key={i} recepiDetails={curr} />;
        })}
      </div>

      {cart && <img loading="lazy" src={image} alt="" />}
    </div>
  );
}

export default Saved;
