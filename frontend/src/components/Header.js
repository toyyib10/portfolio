import React from 'react'

const Header = () => {
  return (
    <>
      <div className='col-12 d-flex align-items-center justify-content-between ps-3 pe-4 bg-light shadow'>
        <div>
          <img src="images/logo.png" height={"70"} alt="d" />
        </div>
        <div className='d-flex col-8 justify-content-between align-items-center'>
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Contact</h2>
          <h2>Skills</h2>
          <h2>Projects</h2>
        </div>
      </div>
    </>
  )
}

export default Header
