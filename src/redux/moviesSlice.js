import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchMovies.pending]: handlePending,
    [fetchMovies.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchMovies.rejected]: handleRejected,
  },
});

export const moviesReducer = moviesSlice.reducer;
