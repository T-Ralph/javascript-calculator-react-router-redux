//Import React, Link from React-Router
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/input">
            Input
          </Link>
        </li>
        <li>
          <Link to="/expression">
            Expression
          </Link>
        </li>
        <li>
          <Link to="/history">
            History
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;