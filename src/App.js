import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import FindLocal from './pages/find-local.jsx';
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path = '/about' element={<About />} />
        <Route path = '/find-local' element={<FindLocal />} />
        <Route path = '*' element  = {<h1>404</h1>} />
        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
