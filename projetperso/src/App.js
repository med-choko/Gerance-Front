import { Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Home
 from './Components/Home';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import AllUsers from './Components/AllUsers';

import 'semantic-ui-css/semantic.min.css'
import Profil from './Components/Profil';
import Formulaire from './Components/Formulaire';
import AddTelephones from './Components/AddTelephones';
import AllPhone from './Components/AllPhone';
import Phone from './Components/Phone';


function App() {
  return (
    <div className="App">

      <Routes>

         <Route path="/users/:name" element={<Profil />} />

         <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />


        <Route path="/*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />

        <Route path="/allusers" element={<AllUsers />} />

        <Route path="/formulaire" element={<Formulaire />} />


        <Route path="/addtelephones" element={<AddTelephones />} />

        <Route path="/allphones" element={<AllPhone />} />


        <Route path="/telephone/:reference" element={<Phone />} />

      </Routes>

    </div>
  );
}

export default App;
