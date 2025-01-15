import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MovieList from '../components/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<MovieList />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;