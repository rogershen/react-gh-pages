import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router basename="/react-gh-pages">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <div>About</div>
            </Route>
            <Route path="/users">
              <div>Users</div>
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
