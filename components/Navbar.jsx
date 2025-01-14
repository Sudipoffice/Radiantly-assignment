import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMovieContext } from '../src/context/MovieContext';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { setSearchTerm } = useMovieContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            MovieDB
          </Link>
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search movies..."
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;