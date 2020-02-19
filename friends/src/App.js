import React from 'react';
import './App.css';
import FriendsList from "./FriendsList";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <ProtectedRoute exact path="/protected" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
