import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
// import { Home as Contact } from "./routes/Home";
// import { About as Contact } from "./routes/About";
// можно по разному называть импорт и обьявлять

// exact = { true} отоброжать страницу при точном совподении адреса
function App() {
  // return <span>что-то</span>;
  return (
    <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
    </HashRouter>
  );
}
/* <Route path="/home">
        <h1>Главная страница</h1>
      </Route>
      <Route path="/about">
        <h1>о проекте</h1>
      </Route>
      <Route path="/home/page">
        <h1>Дочерняя страница</h1>
      </Route> */
/* еще один способ подключения */ 





export default App;