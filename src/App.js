import React from "react";
import "./App.css";
import Search from "./Search";
import Header from "./Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpertadviceM from "./ExpertadviceM";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/nutrition">
            <Header />
            <ExpertadviceM />
          </Route>
          <Route path="/">
            <Header />
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
