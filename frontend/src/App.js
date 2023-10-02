import React from 'react'
import {Route, Routes} from "react-router-dom"
import About from './files/About';
import Contact from './files/Contact';
import Error from './files/Error';
import Home from './files/Home';
import Index from './files/Index';
import Skills from './files/Skills'
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about me" element={<About />} />
        <Route path="/get in touch" element={<Contact />}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    </>
  )
}

export default App;
