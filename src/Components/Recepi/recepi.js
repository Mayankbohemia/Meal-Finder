import React from "react";
import "./recepi.css";
import { Link } from "react-router-dom";
function Recepi(props) {
  const uri = props.recepiDetails.recipe.uri.split("_");

  const finalID = uri[1];

  const str = `/details/${finalID}`;

  return (
    <div className="recepi__container">
      <img
        className="recepi__img"
        src={props.recepiDetails.recipe.image}
        alt={props.recepiDetails.recipe.label}
        loading="lazy"
      />
      <div className="recepi__name">
        <h3>{props.recepiDetails.recipe.label} </h3>
        <h3 className="dish__country">
          {props.recepiDetails.recipe.cuisineType[0]}
        </h3>
      </div>
      <div className="btns">
        <Link to={str}>
          {" "}
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Recepi;
