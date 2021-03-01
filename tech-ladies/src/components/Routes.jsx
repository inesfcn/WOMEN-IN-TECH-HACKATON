import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route,NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import FindYourAnswers from "./FindYourAnswers"
import Community from "./Community"
import Inspirations from "./Inspirations"
import "../App.css"

function Routes() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false)

  function handleToggle(){
    setToggleDarkMode(!toggleDarkMode)
  }

  console.log(toggleDarkMode);

  return (
    <>
    <Router>
      <div className={!toggleDarkMode?"main-div": "main-div dark-mode-main "}>
        <div className="dark-mode" onClick={handleToggle}>
          {!toggleDarkMode && <img src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/moon_dark_mode_night-2-512.png" alt="moon dark mode"/>}
          {toggleDarkMode && <img src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png" alt="sun light mode"></img>}
          </div>
        
        <nav>

          <ul className={toggleDarkMode&&"dark-mode-style"}>
            <li>
              <NavLink to="/WOMEN-IN-TECH-HACKATHON/" activeClassName="active-link" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/WOMEN-IN-TECH-HACKATHON/findYourAnswers" activeClassName="active-link">Find your answers</NavLink>
            </li>
            <li>
              <NavLink to="/WOMEN-IN-TECH-HACKATHON/inspirations" activeClassName="active-link">Inspirations</NavLink>
            </li>
            <li>
              <NavLink to="/WOMEN-IN-TECH-HACKATHON/community" activeClassName="active-link">Community</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/WOMEN-IN-TECH-HACKATHON/findYourAnswers">
            <FindYourAnswers
            toggleDarkMode={toggleDarkMode}
            />
          </Route>

          <Route path="/WOMEN-IN-TECH-HACKATHON/inspirations">
            <Inspirations/>
          </Route>

          <Route path="/WOMEN-IN-TECH-HACKATHON/community">
            <Community
            toggleDarkMode={toggleDarkMode}
            />
          </Route>

          <Route path="/WOMEN-IN-TECH-HACKATHON">
            <HomePage
            toggleDarkMode={toggleDarkMode}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Routes;
