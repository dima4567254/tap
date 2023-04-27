// надо будет удалить лишнеи файлы
// ----------------------------
// import './App.css';
// ----------------------------
// npm start
// ----------------------------
// npm run build
// ----------------------------
// заметки
// npm i react-router-dom
// ----------------------------
// это главная страница
// ----------------------------


// npm i axios
//https: yts.mx/
//https: yts.mx/api/v2/list_movies.json
// JSON Viewer - расширение для отоброжение текста
// ----------------------------

import React from "react";
// import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component {
    // state состояние загрузки .. загружается или уже загрузилась
    state = {
        isLoading: true, // по умолчанию загружается
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        );
        this.setState({
            movies,
            isLoading: false,
        });
    };
    // console.log(movies.data.date.movies);
    // console.log(movies);
    // короткая запись
    // async - значит что функция требует время на выполнения
    // await - место где требуется время

    componentDidMount() {
        //componentDidMount этап жизненого цикла
        // получает список фильмов
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text"> Загрузка...</span>
                        {/* в классы что в html нужна писать не класс а className */}
                    </div>
                    // ? "Загрузка..."
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            // console.log(movie);
                            // return (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}



export default Home;


// как оформлять label в реакт
{/* <label htmlFor=""></label> */ }
