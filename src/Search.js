import { Button } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import "./Search.css";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const APP_KEY = "ae47328795e4fcdba3acd7abd071985d";
  const APP_ID = "ca001017";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);

    setQuery("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="search__main">
      <div className="search__Foodies">
        <h1>Foodies</h1>
        <a href="#search" className="scroll__icon4">
          <ArrowDropDownRoundedIcon />
        </a>
      </div>
      <div className="search" id="search">
        <div className="search__Message">
          <h1 onClick={getData}>Hello There!</h1>
          <p> How can i help you?</p>

          <form className="search__input" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Find recipes"
              autoComplete="off"
              onChange={onChange}
              value={query}
            />
            <SearchRounded />
            <Button type="submit" />
          </form>
        </div>
        <a href="#result" className="scroll__icon3">
          <ArrowDropDownRoundedIcon />
        </a>
      </div>
      <div className="search__recipes" id="result">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default Search;
