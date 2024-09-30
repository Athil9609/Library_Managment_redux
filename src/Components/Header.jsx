import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
<>

<Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <i className="fa-solid fa-book" /> 
           {' '}
Library Managment          </Navbar.Brand>
        </Container>
      </Navbar>

</>
  )
}

export default Header