import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BinarySearch from './Projects/BinarySearch';
import DuplicateNumber from './Projects/DuplicateNumber';
import FirstLastPosition from './Projects/FirstLastPosition';
import Functional from './Projects/Functional';
import InsertPosition from './Projects/InsertPosition';
import TicTacToe from './Projects/TicTacToe';

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Projects/binary-search">Binary Search</Link>
            </li>
            <li>
              <Link to="/Projects/duplicate-number">Duplicate Number</Link>
            </li>
            <li>
              <Link to="/Projects/first-last-position">First & Last Position</Link>
            </li>
            <li>
              <Link to="/Projects/functional">Functional</Link>
            </li>
            <li>
              <Link to="/Projects/insert-position">Insert Position</Link>
            </li>
            <li>
              <Link to="/Projects/tic-tac-toe">Tic Tac Toe</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Projects/binary-search" component={BinarySearch} />
          <Route path="/Projects/duplicate-number" component={DuplicateNumber} />
          <Route path="/Projects/first-last-position" component={FirstLastPosition} />
          <Route path="/Projects/functional" component={Functional} />
          <Route path="/Projects/insert-position" component={InsertPosition} />
          <Route path="/Projects/tic-tac-toe" component={TicTacToe} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;