import {Outlet} from "react-router-dom"
import Menu from './Components/Menu/Menu'
import SingleProducts from "./Components/Products/Single_products";
import Saerch from "./Components/Search/Search"
function App() {
  return (
   <div className="d-flex flex-row">
    <header>hello mehroj</header>
    {/* <Menu />
    <div>
      <Search/>
      <Outlet/>
    </div> */}
    <SingleProducts/>
   </div>
  );
}

export default App;
