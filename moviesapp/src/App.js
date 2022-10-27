import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movie';
import Search from './components/search';
import Heading from './components/heading';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovies = async (search) => {
    const baseURL = `http://www.omdbapi.com/?s=${search}&apikey=1db3287d`;

		const results = await fetch(baseURL);
		const resJSON = await results.json();

		if (resJSON.Search) {
			setMovies(resJSON.Search);
		}

  }

  useEffect(() => {
		getMovies(search);
	}, [search]);


	return (
    <>
      <Search searchValue={search} setSearchValue={setSearch} />
      <Heading heading='Searched Movies' />
      <div className='grid-container'>
				<MovieList 
        movies={movies} />
      </div>
    </>
		
	);
};

export default App;