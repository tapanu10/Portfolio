import React from 'react';
import './index.css'
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App()
{
    return(
        <Router>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Project" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </Router>
    )
}
export default App;