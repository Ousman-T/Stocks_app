import {Routes, Route} from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About'
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Stock from './components/Stock';
import { useState } from 'react';
import data from './data'

function App() {
  const [stocks, setStocks] = useState(data)
  return (
    <div className="App">
      <Navbar />
      <Routes>

      <Route path='/' element={<Homepage />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
      <Route path='/stock/:symbol' element={<Stock data={data}/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
