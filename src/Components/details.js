import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";

function Details() {
  const params = useParams();
  const id = params.id;
  const [dataDetail, setDataDetail] = useState([]);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=83fd9572&app_key=
      04a1666d82f57cbc4a92c29c7f488910`
    )
      .then((response) => response.json())
      .then((result) => {
        setDataDetail(result);
        setRecipe(result);
      })
      .catch((err) => {
        alert(err.message + ":  Check your Internet connection");
      });
  }, [id]);

  const saveHandler = () => {
    if (recipe) {
      const savedRecipes =
        JSON.parse(localStorage.getItem("savedRecipes")) || [];

      savedRecipes.push(recipe);

      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));

      alert("Recipe saved 🍟!");
    }
  };

  const name = dataDetail?.recipe?.label;

  return (
    <div className="details__container">
      <div>
        <img src={dataDetail?.recipe?.image} alt={dataDetail?.recipe?.label} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div>
          <button className="btn__detail" onClick={saveHandler}>
            Save 🤍
          </button>
        </div>

        <div className="ingredients">
          {dataDetail?.recipe?.ingredientLines.map((ele, i) => {
            return (
              <h4 key={i}>
                {" "}
                <span>{i + 1})</span> {ele}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Details;
