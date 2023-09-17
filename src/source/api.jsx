const API_KEY = 'a20001fba40fff44345e5993730d4bd9';
const BASE_URL = 'https://api.themoviedb.org/3/';

export function fetchMovies() {
  return fetch(
    `${BASE_URL}trending/movie/day?per_page=1&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      Promise.reject(new Error('No matches with entered data'));
    }
    console.log(response.json);
    return response.json();
  });
}
