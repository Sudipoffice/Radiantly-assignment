import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            MovieDB
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;