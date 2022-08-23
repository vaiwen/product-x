import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

import { Routes, Route } from 'react-router-dom'
import Ghost from './pages/Ghost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Ghost />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
