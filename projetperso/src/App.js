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





      </Routes>

    </div>
  );
}

export default App;
