import CarList from "./components/Inventory"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Loginpage from "./pages/Loginpage";
import Logout from "./components/Logout";
import Register from "./pages/Register";
import NavBar from './components/NavBar';
import Home from "./components/Home";

function App() {


  return (
    <>
    
    <Header />
       
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/list" element={<CarList />}/>
        <Route path="/login" element={<Loginpage />}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App