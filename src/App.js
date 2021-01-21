import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CountryInfo from "./components/countryInfo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:countryName" component={CountryInfo} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
