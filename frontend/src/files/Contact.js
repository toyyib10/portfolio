import React from 'react'
import Header from "../components/Header"

const Contact = () => {
  return (
    <>
      <section className='section'>
        <Header/>
        <div className='d-flex px-md-4 pt-3'>
          <div className='col-md-6 col-12 ms-md-4 pe-md-4'>
            <h1 className='text-white mb-4'>
              Get In Touch
            </h1>
            <p style={{"color":"grey","lineHeight":"1.8"}}>
              Thanks for visiting my portfolio! If you have any questions or would like to work with me, please feel free to get in touch. I'm always happy to chat.
            </p>
            <form className='mt-4 pt-3'>
              <input className='form-control form-control-lg mb-3 rounded-0' style={{"color":"grey"}} placeholder='Name'/>
              <textarea placeholder="Type in a message" className='col-12 form-control rounded-0'></textarea>
              <button className='btn mt-4 text-white rounded-0 shadow' style={{"backgroundColor":"grey"}}>Send message</button>
            </form>
          </div>
          <div className='col-md-6 col-12 d-flex flex-column align-items-center justify-content-center'>
            <button className='shadow col-10 btn bg-light my-3 rounded-0' style={{"height":"80px","color":"grey"}}>
              ifi 
            </button>
            <button className='shadow col-10 btn bg-light my-3 rounded-0' style={{"height":"80px","color":"grey"}}>
              ifi 
            </button>
            <button className='shadow col-10 btn bg-light my-3 rounded-0' style={{"height":"80px","color":"grey"}}>
              ifi 
            </button>
            <button className='shadow col-10 btn bg-light mt-2 rounded-0' style={{"height":"80px","color":"grey"}}>
              ifi 
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
