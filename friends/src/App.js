import React from 'react';
import './App.css';
import FriendsList from "./FriendsList";
import Login from "./Login";


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import NewFriend from './NewFriend';

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
        <li>
          <Link to="/newfriend">New Friend</Link>
        </li>
      </ul>
      <Switch>
        <ProtectedRoute exact path="/protected" component={FriendsList} />
        <ProtectedRoute exact path="/newfriend" component={NewFriend} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
