import { Header } from './Header';
import { Hero } from './Hero';
import { fetchMovies } from 'source/api';
import { useState, useEffect } from 'react';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchMovies().then(movies => {
      setMovies(movies.results);
    });
  }, []);

  const handleToTheNextMovie = () => {
    setCurrentPage(prevState => {
      if (prevState === movies.length - 1) {
        return prevState;
      }
      return (prevState += 1);
    });
  };

  const handleToThePrevMovie = () => {
    setCurrentPage(prevState => {
      if (prevState === 0) {
        return prevState;
      }
      return (prevState -= 1);
    });
  };

  const currentMovie = movies[currentPage];

  console.log(currentMovie);

  return (
    <div
      style={{
        backgroundColor: '#111111',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header></Header>
      {currentMovie ? <Hero movie={currentMovie} /> : <p>Loading...</p>}
      <button onClick={() => handleToTheNextMovie()}>Next</button>
      <button onClick={() => handleToThePrevMovie()}>Prev</button>
    </div>
  );
};
