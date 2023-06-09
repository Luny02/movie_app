import React from "react";
import PropTypes, { func, string } from "prop-types";
import "./Movie.css";

function Movie({id, year,  title, summary, poster, genres}) {
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie_column"> 
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary.slice(0, 200)}</p> 
            <ul className="genres">
                {genres.map((genre, index) => {
                return <li key={index} className="genres__genre">{genre}</li>}
                )}
            </ul>
        </div>
          </div>
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, 
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie