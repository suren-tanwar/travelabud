import React, { Component } from "react";
import "./App.css";
import { createBrowserHistory } from "history";
import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Backpacking from "./components/Backpacking";
import Trip from "./components/Trip";
import Header from "./components/Header";
const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <BrowserRouter>
            <Router history={hist}>
            <Header/>
              <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/packing" exact component={Backpacking} />
               <Route path="/trip" exact component={Trip} />
          
              </Switch>
             </Router>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
