import {Outlet} from "react-router-dom"
import Menu from './Components/Menu/Menu'
import Search from "./Components/Search/Search";
import Saerch from "./Components/Search/Search"
function App() {
  return (
   <div className="d-flex flex-row">
    <Menu />
    <div>
      <Search/>
    <Outlet/>
    </div>
   </div>
  );
}

export default App;
