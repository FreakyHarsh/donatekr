import React from "react";
import "./App.less";
import { Route, Switch } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";

const App = () => (
  <div className='App'>
    <Switch>
      <Route path='/'>
        <HomeScreen />
      </Route>
    </Switch>
  </div>
);

export default App;
