import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Logout from './components/Logout'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/logout">
            Logout
          </a>
        </header>
      
      <Switch>
        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
        <Route path="/logout" component={Logout}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Login}></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
