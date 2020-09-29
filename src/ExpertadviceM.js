import { Button, Link } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";
import React, { useState } from "react";
import Axios from "axios";
import ExpertM from "./ExpertM";
import { v4 as uuidv4 } from "uuid";
import "./ExpertAdviceM.css";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";

const ExpertadviceM = () => {
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
    <div className="expert__main">
      <div className="expert__top">
        <h2>Nutrition Information</h2>
        <a href="#search" className="scroll__icon">
          <ArrowDropDownRoundedIcon />
        </a>
      </div>
      <div className="expert" id="search">
        <div className="expert__Message">
          <h1 onClick={getData}>Find Nutritional recipes!</h1>

          <form className="expert__input" onSubmit={onSubmit}>
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
        <a href="#result" className="scroll__icon2">
          <ArrowDropDownRoundedIcon />
        </a>
      </div>
      <div className="search__recipes" id="result">
        {recipes !== [] &&
          recipes.map((recipe) => <ExpertM key={uuidv4} recipe={recipe} />)}
      </div>
    </div>
  );
};

export default ExpertadviceM;
