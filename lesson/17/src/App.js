// import PropTypes from 'prop-types';
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
import axios from 'axios';


class App extends React.Component {
// state состояние загрузки .. загружается или уже загрузилась
state = {
  isLoading: true,// по умолчанию загружается
  movies: []
};

gerNovies = async () => {
  const movies = await axios.get('https: yts.mx/api/v2/list_movies.json');
// async - значит что функция требует время на выполнения 
// await - место где требуется время
}

componentDidMount() { //componentDidMount этап жизненого цикла
// получает список фильмов
this.gerNovies ();
} 

render() {
  const {isLoading} = this.state;
  return <div>{isLoading ? "Загрузка..." : "страница звгружена" }</div>
}
}


// вместо конструкции с ?
// if (isLoading {
// "Loading..."
// }  else {
// "страница звгружена"
// }



export default App;

