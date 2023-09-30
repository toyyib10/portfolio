import React from 'react'
import Header from "../components/Header"

const Home = () => {
  return (
    <>
      <section className="section">
        <Header />
        <div className='w-100 px-md-4 pt-3 d-flex flex-wrap justify-content-between'>
          <div className='col-md-6 col-12 ps-md-4 ms-md-3'>
            <h1 className='text-white' style={{"fontSize":"3.5em", "letterSpacing":"5px", "lineHeight":"1.2"}}>
              Hello, <br/> I am <span style={{"color":"grey"}}>T</span>oyyib <br/> Yekeen.
            </h1>
            <p className='mt-4' style={{"color":"grey"}}>I'm a MERN stack developer specializing in MERN stack (MONGODB, EXPRESS, REACT and NODE) with over 2 years of experience building scalable web application. I have worked on variety of projects and I'm always eager to learn new technologies and improve my skills.</p>
            <div className='w-100 d-flex pt-3'>
              <button className='btn text-white rounded-0 shadow me-4' style={{"backgroundColor":"grey"}}>Get in touch</button>
              <button className='btn bg-white rounded-0 shadow ms-4' style={{"color":"grey"}}>About Me</button>
            </div>
          </div>
          <div className='col-md-5 col-12 d-flex align-items-center justify-content-center'>
            <img height={"400"} src='images/toy.png' alt='toyyib'/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
