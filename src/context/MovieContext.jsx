import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://freetestapi.com/api/v1/movies');
      setMovies(response.data);
      console.log(response.data)
      setError(null);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MovieContext.Provider value={{
      movies: filteredMovies,
      loading,
      error,
      setSearchTerm,
      refreshMovies: fetchMovies
    }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovieContext = () => useContext(MovieContext);