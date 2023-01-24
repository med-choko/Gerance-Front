import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Home
 from './Components/Home';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">

      <Routes>

         <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />


        <Route path="/login" element={<Login />} />









      </Routes>

    </div>
  );
}

export default App;
