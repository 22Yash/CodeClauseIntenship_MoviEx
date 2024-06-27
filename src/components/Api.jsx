import axios from 'axios';

const apiUrl = 'https://omdbapi.com/';
const apiKey = 'apikey=b175cc';

const fetchMovies = async (searchQuery) => {
  const response = await axios.get(`${apiUrl}?${apiKey}&s=${searchQuery}`);
  return response.data.Search;
};

const fetchMovieDetails = async (imdbID) => {
  const response = await axios.get(`${apiUrl}?${apiKey}&i=${imdbID}`);
  return response.data;
};

export { fetchMovies, fetchMovieDetails };