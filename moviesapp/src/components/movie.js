import React from 'react'

const MovieList = (movie) => {

    return(
        <>
            {movie.movies.map((movie, index) => (
				<div className='grid-item'>
					<img src={movie.Poster} alt='movie'></img>
                    <p>Title: {movie.Title}</p>
                    <p>Year: {movie.Year}</p>
					</div>
			))}
        </>
    )
}

export default MovieList;