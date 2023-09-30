import React from 'react'

const Header = () => {
  return (
    <>
      <section className='d-flex w-100 px-4 justify-content-between pt-2 align-items-center flex-shrink'>
        <div className='d-flex align-items-center'>
          <h2 className='text-white toyyib'>TOYYIB</h2>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <button className='btn rounded-0 mx-2 border-0 border-bottom border-white' style={{"color":"grey"}}>
            Home
          </button>
          <button className='btn mx-2 text-white rounded-0'>
            About Me
          </button>
          <button className='btn mx-2 text-white rounded-0'>
            Skills
          </button>
          <button className='btn mx-2 text-white rounded-0'>
            Project
          </button>
          <button className='btn mx-2 text-white rounded-0'>
            Get In touch
          </button>
        </div>
        <div>
          <button className='btn p-2 shadow text-white rounded-0' style={{"backgroundColor":"grey"}}>Download CV</button>
        </div>
      </section>
    </>
  )
}

export default Header;
