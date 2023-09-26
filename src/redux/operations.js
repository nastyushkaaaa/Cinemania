import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'a20001fba40fff44345e5993730d4bd9';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async () => {
    try {
      const res = await fetch(
        `${BASE_URL}trending/movie/day?per_page=1&api_key=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error('No matches with entered data');
      }
      const data = await res.json();
      // console.log(data);
      return data;
    } catch (error) {
      throw new Error('Error fetching trending movies: ' + error.message);
    }
  }
);

// export const fetchMovies = createAsyncThunk(
//   'movies/fetchTrendingMovies',
//   async () => {
//     try {
//       const res = await fetch(
//         `${BASE_URL}trending/movie/day?per_page=1&api_key=${API_KEY}`
//       );
//       if (!res.ok) {
//         Promise.reject(new Error('No matches with entered data'));
//       }
//       console.log(res.json());
//       return res.json();
//     } catch (error) {
//       throw new Error('Error fetching trending movies: ' + error.message);
//     }
//   }
// );
