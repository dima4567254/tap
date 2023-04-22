// import './App.css';
// ----------------------------
// npm start
// ----------------------------
// 
// ----------------------------

// npm i axios
//https: yts.mx/
//https: yts.mx/api/v2/list_movies.json
// JSON Viewer - расширение для отоброжение текста
// ----------------------------
import React from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
// 2.54 ошибка 


class App extends React.Component {
  // state состояние загрузки .. загружается или уже загрузилась
  state = {
    isLoading: true, // по умолчанию загружается
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({
      movies,
      isLoading: false
    });
  };
  // console.log(movies.data.date.movies);
  // console.log(movies);
  // короткая запись
  // async - значит что функция требует время на выполнения 
  // await - место где требуется время


  componentDidMount() { //componentDidMount этап жизненого цикла
    // получает список фильмов
    this.getMovies();
  }

  render() {
    const {
      isLoading,
      movies
    } = this.state;
    return ( <
      div > {
        isLoading ?
        "Загрузка..." : movies.map(movie => {
          console.log(movie);
          return ( <
            Movie key = {
              movie.id
            }
            id = {
              movie.id
            }
            year = {
              movie.year
            }
            title = {
              movie.title
            }
            summary = {
              movie.summery
            }
            poster = {
              movie.medium_cover_image
            }
            />
          );
        })
      } </div>
      
    );
  }
}


// вместо конструкции с ?
// if (isLoading {
// "Loading..."
// }  else {
// "страница звгружена"
// }



export default App;