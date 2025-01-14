import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
        <img
          src={movie.poster || `https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.title)}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x450?text=${encodeURIComponent(movie.title)}`;
          }}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
          <div className="flex flex-col gap-2">
            <span className="text-gray-600">Released: {movie.release_date}</span>
            <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm inline-block">
              {movie.genre}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">★</span>
              <span>{movie.rating}/10</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default MovieCard;