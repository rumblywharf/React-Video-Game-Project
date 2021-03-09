import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/home" class="mr-5">Home</Link>
          <Link to="/about" class="mr-5">About</Link>
          <Link to="/data">Data</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
