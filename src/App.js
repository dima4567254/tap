// import logo from './logo.svg';
// import './App.css';
// ----------------------------
// npm start
// ----------------------------

// map - добовляет что то к каждому элементу
const foodILike = [{
    'name': 'борщ',
    'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg'
  },
  {
    'name': 'драники',
    'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg'
  },
  {
    'name': 'стейк',
    'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg'
  },
  {
    'name': 'хинкали',
    'image': 'https://lifehacker.ru/wp-content/uploads/2014/12/ob-05_1568611223.jpg'
  }
]

// dish-блюдо текуший элемент масива
function App() {
  return (
    <div>
      {/* <h1>Привет</h1>  */}
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
    </div>
  );
}

function Food({name, picture}) {
  return (
    <div>
      <h3>Я люблю {name}</h3>
      <img src={picture} alt=""/>
    </div>
  );
}

// export default MyName;
export default App;


// {
//  /* <food name='борщ' something={true} lalalal={['123454, 1231,']}/> */}
// <Food favourite='борщ'/>
// <Food favourite='бутерброды'/>
// <Food favourite='говядену'/>
// <Food favourite='баранину'/>
// <Food favourite='борщ'/>


// мы передеали значение через name