//слайс содержит действия для добавления и удаления фильмов из списка избранных
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
};

const favoriteMoviesSlice = createSlice({
    name: 'favoriteMovies',
    initialState,
    reducers: {
        addMovie: (state,action) => {
            const isAlreadyadded = state.movies.find(
                (movie) => movie.id === action.payload.id
            );

            if(!isAlreadyadded) {
                state.movies.push(action.payload);
            }
        },

        findMovieByTitle: (state, action) => {
            state.movies = state.movies.filter(
                (movie) => movie.title.toLowerCase().includes(action.payload.toLowerCase));

        },
        removeMovie:(state, action) => {
            state.movies = state.movies.filter(
                (movie) => movie.id !==action.payload
            );
        },

        clearMovies: (state) => {
            state.movies =[]

        }
    },
});

export const {addMovie, findMovieByTitle, removeMovie, clearMovies } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;