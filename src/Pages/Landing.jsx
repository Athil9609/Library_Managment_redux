import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center p-5' style={{ height: '100vh' }}>
        <div className=' align-items-center d-flex justify-content-center'>
          <div >
            <div className=' align-items-center d-flex justify-content-center'>

              <img src='https://cdni.iconscout.com/illustration/premium/thumb/man-working-in-library-illustration-download-svg-png-gif-file-formats--work-staff-librarian-business-pack-illustrations-7048863.png?f=webp' className='img-fluid ' alt="" />

            </div>
            <p style={{ textAlign: 'justify', cursor: 'default' }} className='mt-md-5 mt-sm-2 text-info'>
              Effortlessly manage your library’s collection with our simple and intuitive Library Management System, designed to streamline book organization and administration.
            </p>

            <div className='d-grid'> <Link to={'/home'} className='btn btn-info rounded-5 mt-3'>View Books</Link></div>
          </div>
        </div>



      </div>
    </>
  )
}

export default Landing