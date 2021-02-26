import React from "react";
import { BrowserRouter as Router, Switch, Route,NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import FindYourAnswers from "./FindYourAnswers"
import Community from "./Community"
import Inspirations from "./Inspirations"
import "../App.css"

function Routes() {
  return (
    <>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active-link" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/findYourAnswers" activeClassName="active-link">Find your answers</NavLink>
            </li>
            <li>
              <NavLink to="/inspirations" activeClassName="active-link">Inspirations</NavLink>
            </li>
            <li>
              <NavLink to="/community" activeClassName="active-link">Community</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/findYourAnswers">
            <FindYourAnswers/>
          </Route>

          <Route path="/inspirations">
            <Inspirations/>
          </Route>

          <Route path="/community">
            <Community/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Routes;
