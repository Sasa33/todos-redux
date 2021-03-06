import React from "react";
import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import DoneListContainer from "./containers/DoneListContainer";
import {Route, Link, HashRouter} from "react-router-dom";

function App() {
  return (
      <React.Fragment>
          <header className="App-header">
              <p>Hello React!</p>
          </header>
          <HashRouter>
              <ul>
                  <li><Link to="/">go to list page</Link></li>
                  <li><Link to="/done">go to done page</Link></li>
              </ul>
              <Route exact path="/" component={TodoListContainer}/>
              <Route path="/done" component={DoneListContainer}/>
          </HashRouter>
      </React.Fragment>
  );
}

export default App;
