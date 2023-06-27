import React from 'react'
import {Route, Routes} from "react-router-dom"
import About from './files/About';
import Contact from './files/Contact';
import Error from './files/Error';
import Index from './files/Index';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    </>
  )
}

export default App;
