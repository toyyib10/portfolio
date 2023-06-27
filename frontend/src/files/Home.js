import React from 'react'
import Header from "../components/Header"

const Home = () => {
  return (
    <>
      <Header />
      <div className='mt-4 px-4 ms-3 d-flex justify-content-between'>
        <div className='col-md-6 col-12'>
          <p className='fs-1'>
            Hello, I am <span className='text-warning'>YEKEEN TOYYIB</span> .
          </p>
          <div className='fs-5'>
            I am a skilled MERN (MongoDB, Express.js, React.js, Node.js) developer with expertise in building dynamic web applications. Proficient in both back-end and front-end development, I excel in designing robust APIs, managing databases with MongoDB, and creating captivating user interfaces using React.js. I prioritize clean code, maintainable architecture, and thorough testing while adhering to Agile methodologies. With a strong foundation in JavaScript, I bring a comprehensive skill set to deliver high-quality code and exceptional user experiences. Collaborative and constantly learning, I am a valuable asset for any development team.
          </div>
        </div>
        <div className='col-md-6 col-12 p-5 bg-primary'>

        </div>
      </div>
    </>
  )
}

export default Home
