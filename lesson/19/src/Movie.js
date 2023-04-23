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
    poster
}) {
    return (
        <div class="muvie">
            <img src={poster} alt="{title}" title="{title}" />
            <div class="movie__column">
                <h3 class="movie__title" style={{ backgroundColor: "transporent" }}>{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
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
};

export default Movie;