import React from 'react'
import Add from '../Components/Add'
import Books from '../Components/Books'

function Home() {
  return (
    <>
    <div className='container-fluid p-2' >
      <Add/>
      <div className='border rounded-5 d-flex flex-wrap gap-2 border-primary p-md-5 p-2 shadow'>
        <Books/>

      </div>
    </div>
    </>
  )
}

export default Home