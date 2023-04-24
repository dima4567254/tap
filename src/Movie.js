import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
// import axios from 'axios';

// тут  можно использовать компанент на основе функции
function Movie({
    id,
    year,
    title,
    summary,
    poster,
    genres
}) {
    return (
        <div className="muvie">
            <img src={poster} alt="{title}" title="{title}" />
            <div className="movie__column">
                <h3 className="movie__title" style={{ backgroundColor: "transporent" }}>{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
                <ul className="genres">
                    {genres.map((genre, index) => {
                      return  <li key={index} className="genres__genre">{genre}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;


// { index }. как вывести счетчик