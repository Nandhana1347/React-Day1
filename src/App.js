import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Registration } from './components/Registration';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
      
      </Routes>

      

      
     

    </div>
    
  );
}

export default App;
