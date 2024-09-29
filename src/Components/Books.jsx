import React from 'react'
import Card from 'react-bootstrap/Card';
import Edit from './Edit';
import { useSelector,useDispatch } from 'react-redux';
import { removeBook } from '../Store/Slice/BookSlice';


function Books() {
  const{Books}=useSelector((state)=>state.bookReducer)
  const dispatch=useDispatch()

  return (
<>

{
    Books?.length>0 ?

    Books.map(item=>(

<Card style={{ width: '18rem' }} className='rounded-5 text-light shadow'>
      <Card.Img style={{height:'300px'}} variant="top" src={item.imageUrl} className='img-fluid rounded-top-5' />
      <Card.Body className='bg-primary rounded-bottom-5'>
        <Card.Title className='text-center mb-3'>{item.title}</Card.Title>
        <Card.Text>
         <div className='d-flex flex-column' >
             <span>ISNB:{item.isnb}</span>
             <span>Author:{item.author}</span>
             <span>Genre:{item.genre}</span>
             <span>Language:{item.language}</span>
             <span>Shelf Location:{item.location}</span>
         </div>
         <div className='d-flex justify-content-between mt-3'>
            <Edit bookToEdit={item}/>
            <button className='btn btn-secondary rounded-5 py-2 px-3' onClick={()=>{dispatch(removeBook(item.isnb))}}><i className="fa-solid fa-trash" style={{color: "#ff0000"}} /></button>
         </div>
        </Card.Text>
      </Card.Body>
    </Card>


    ))

    

:
<h1 className='text-center text-primary'>No Books Added yet!</h1>

}
</>  )
}

export default Books