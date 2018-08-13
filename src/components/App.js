import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./MainMenu.js";
import ViewList from "./ViewList.js";
import EditEntry from "./EditEntry.js";
import "../styles/App.css";

import { reducer } from "./reducers.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let App = () => (
  <div className="app">
    <Router className="test">
      <Switch>
        <Route exact path="/" component={(props) =>
          <MainMenu {...props} />} />
        <Route path="/view" component={(props) =>
          <ViewList {...props} />} />
        <Route path="/edit" component={(props) => 
          <EditEntry {...props} />} />
      </Switch>
    </Router>
  </div>
);

let ReduxApp = () =>
  <Provider store={store}>
    <App />
  </Provider>

export default ReduxApp;
