import React from "react";
import "./App.css";
import Search from "./Search";
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Search />
          </Route>
          <Route path="/about"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
