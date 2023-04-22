// import PropTypes from 'prop-types';
// import './App.css';
// ----------------------------
// npm start
// ----------------------------
// 
// ----------------------------
import React from 'react';

class App extends React.Component {
// state состояние загрузки .. загружается или уже загрузилась
state = {
  isLoading: true,// по умолчанию загружается
  movies: []
};
//  если isLoading: true то страница загружается если нет то страница загружена
componentDidMount() { //componentDidMount этап жизненого цикла
  // setTimeout= вызывает таймаут
  setTimeout(() => {this.setState({isLoading: false})},6000);
}

render() {
  const {isLoading} = this.state;
  return <div>{isLoading ? "Loading..." : "страница звгружена" }</div>
}
}


// вместо конструкции с ?
// if (isLoading {
// "Loading..."
// }  else {
// "страница звгружена"
// }



export default App;

