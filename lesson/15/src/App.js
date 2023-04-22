// import PropTypes from 'prop-types';
// import './App.css';
// ----------------------------
// npm start
// ----------------------------
// урок теория
// ----------------------------
import React from 'react';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log('конструктор');
  // }

  state = {
    count: 0
  };
// setState -перезаписывает состояние  и вызывает рендер
  add = () => {
    this.setState(current =>({count: current.count + 1}));
  }

  minus = () => {
    this.setState(current =>({count: current.count - 1}));
  }

  componentDidMount(){
    console.log('компонент отрендирися');
  }

  conponentDidUpdate() {
    console.log('компонент обновился');
  }

  conponentWilUpdate() {
    // console.log('компонент обновился');
    console.log('компонент умер');
  }


  // current = текущие состояние компонета
  render() {
    console.log('я рендеринг');
    return  <div> <h1>текущие число: {this.state.count}</h1>
    <button onClick={this.add} >плюс</button>
    <button onClick={this.minus}>минус</button>
    {/* способ найти элемент в реакте а если бы со скобачками то сразу выполснялась */}
    </div>
    // return 
  }
}



// у классов есть состояние 

export default App;

// ----------------------------
// map - добовляет что то к каждому элементу
// const foodILike = [{
//     'id':1,
//     'name': 'рщ',
//     'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
//     'rating': 4.8
//   },
//   {
//     'id': 2,
//     'name': 'драники',
//     'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
//     'rating': 4.5
//   },
//   {
//     'id': 3,
//     'name': 'стейк',
//     'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
//     'rating': 3.8,
//   },
//   {
//     'id': 4,
//     'name': 'хинкали',
//     'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg',
//     'rating': 2.8
//   }
// ]

// // dish-блюдо текуший элемент масива


// function renderFood(dish) {
//   return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
// }

// function App() {
//   return (
//     <div>
//       {/* {console.log(foodILike.map(renderFood))} */}
//       {/* <h1>Привет</h1>  */}
//       {/* {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)} */}
//       {foodILike.map(renderFood)}
//     </div>
//   );
// }



// function Food({name, picture,rating}) {
//   return (
//     <div>
//       <h3>Я люблю {name}</h3>
//       <h4> {rating} / 5.0</h4>
//       <img src={picture} alt=""/>
//     </div>
//   );
// }
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// export default MyName;



// {
//  /* <food name='борщ' something={true} lalalal={['123454, 1231,']}/> */}
// <Food favourite='борщ'/>
// <Food favourite='бутерброды'/>
// <Food favourite='говядену'/>
// <Food favourite='баранину'/>
// <Food favourite='борщ'/>


// мы передеали значение через name