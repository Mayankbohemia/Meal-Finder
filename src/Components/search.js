import React, { useState, useEffect } from "react";
import "./search.css";
import Recepi from "./Recepi/recepi";

function Search() {
  const [input, setInput] = useState("");

  const [data, setData] = useState([]);
  const [error, setError] = useState(true);

  const inputValueHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const request = setTimeout(() => {
      fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=83fd9572&app_key=
        04a1666d82f57cbc4a92c29c7f488910`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then((result) => {
          setData(result);
          setError(false);
        })
        .catch((err) => {
          alert(err.message + ":  Check your Internet connection");
          setError(true);
        });
    }, 300);

    return () => clearInterval(request);
  }, [input]);

  return (
    <>
      <div className="search__container">
        <div>
          <h3>
            <span>ForkUP</span> recipes with us
          </h3>
        </div>
        <div className="input__container">
          <h5>Search your favourite recipes</h5>
          <div className="search__feild">
            <input
              className="input"
              type="text"
              placeholder="e.g. Chicken"
              value={input}
              onChange={inputValueHandler}
            />
          </div>
        </div>
      </div>
      <div className="recepis">
        {data?.hits?.map((curr, i) => {
          return <Recepi key={i} recepiDetails={curr} />;
        })}
      </div>

      {error && (
        <div className="error">
          <h1> Loading...</h1>
        </div>
      )}
    </>
  );
}

export default Search;
