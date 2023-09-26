import { Header } from './Header';
import { Hero } from './Hero';
// import { fetchMovies } from 'source/api';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'redux/operations';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { getMovies } from 'redux/selectors';

export const App = () => {
  // const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchMovies().then(movies => {
  //     setMovies(movies.results);
  //   });
  // }, []);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const moviesObj = useSelector(getMovies);
  const movies = moviesObj ? moviesObj.results || [] : [];

  console.log(movies);

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
      {currentMovie ? (
        <Hero
          movie={currentMovie}
          handleToThePrevMovie={handleToThePrevMovie}
          handleToTheNextMovie={handleToTheNextMovie}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
