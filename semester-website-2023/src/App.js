
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home page/home";
import './App.css';
import Backend from './components/back end/backend';
import Frontend from "./components/front end/frontend";


function App() {
  return (

    <>
      <Router>
        <Routes>
            <Route path='/backend' element={<Backend/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/frontend' element={<Frontend/>} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
