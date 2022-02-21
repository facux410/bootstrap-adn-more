import "bootstrap/dist/css/bootstrap.min.css";
import Header from './redux/actions/header'
import Imagen from './redux/actions/hero'
import Cards from "./redux/actions/cards";

import './redux/styles/css.css'
function App() {
  return (
    <>
     <Header/>
     <Imagen/>
     {/* <Cards/> */}
    </>
  );
}

export default App;
// 