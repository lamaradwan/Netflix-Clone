import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import NavbarMovies from './components/NavbarMovies';
import FavList from './components/FavList';


function App() {
  return (
    <>
      <NavbarMovies/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favMovies" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
