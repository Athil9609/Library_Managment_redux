import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
  <MDBFooter className='bg-info text-light'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Library Managment</h5>

            <p className='text-light'>
            Effortlessly manage your library’s collection with our simple and intuitive Library Management System, designed to streamline book organization and administration.

            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              <Link to={'/'} className='text-light'>
                  Landing
                </Link>
              </li>
              <li>
              <Link to={'/home'} className='text-light'>
                  Home
                </Link>
            </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-3'>Feedback</h5>
            <textarea name="" className='form-control' id=""></textarea>
            <button className='btn btn-success mt-3 rounded-5 p-3 px-5 '>Send</button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      
    </MDBFooter>
    </>
  )
}

export default Footer