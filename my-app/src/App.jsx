import './App.css'
import Glav from './pages/Glav';
import About from './Components/About';
import Register from './pages/Register';
import { Route,Routes } from 'react-router-dom';


function App(){
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Glav />} />
        <Route path='/about' element={<About />} />
        <Route path='/reg' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
