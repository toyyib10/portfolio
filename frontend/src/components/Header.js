import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <section className='d-flex w-100 px-4 justify-content-between pt-2 align-items-center flex-shrink'>
        <div className='d-flex align-items-center'>
          <h2 className='text-white toyyib'>TO<span style={{"color":"grey"}}>YY</span>IB</h2>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/home" className='btn rounded-0 mx-2 border-0 border-bottom border-white' style={{"color":"grey"}}>
            Home
          </Link>
          <Link className='btn mx-2 text-white rounded-0'>
            About Me
          </Link>
          <Link className='btn mx-2 text-white rounded-0'>
            Skills
          </Link>
          <Link className='btn mx-2 text-white rounded-0'>
            Project
          </Link>
          <Link to="/get in touch" className='btn mx-2 text-white rounded-0'>
            Get In touch
          </Link>
        </div>
        <div>
          <button className='btn p-2 shadow text-white rounded-0' style={{"backgroundColor":"grey"}}>Download CV</button>
        </div>
      </section>
    </>
  )
}

export default Header;
