import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addBook } from '../Store/Slice/BookSlice';
import { toast } from 'react-toastify';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()


    const[book,SetBook]=useState({
       isnb:'', title:'',author:'',genre:'',language:'',imageUrl:"",location:''
    })

    const handleDispatch=()=>{
        const{isnb,title,author,genre,language,imageUrl,location}=book
        if(!isnb || !title || !author || !genre || !language || !imageUrl || !location)
        {
            alert("enter valid inputs")
        }
        else{
          console.log(book);
          dispatch(addBook(book))
          handleClose()
          toast.success("Book added succesfully!")

        }
        
    }
    return (
        <>
            <button className='btn btn-outline-info px-5 p-3 rounded-5 my-3' onClick={handleShow}>Add Book{' '}<i className="fa-solid fa-book-medical text-info"  /></button>


<Modal 
                
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton >
                    
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
            
                <FloatingLabel
                        controlId="floatingInput"
                        label="ISNB(International standard book No)"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{SetBook({...book,isnb:e.target.value})}} className='rounded-4' />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{SetBook({...book,title:e.target.value})}} className='rounded-4' />
                    </FloatingLabel>
            
                    <FloatingLabel controlId="floatingInput" label="Author" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{SetBook({...book,author:e.target.value})}} className='rounded-4 '/>
                    </FloatingLabel>
            
                    <FloatingLabel controlId="floatingInput" label="Genre" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{SetBook({...book,genre:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Language" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{SetBook({...book,language:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Shelf Location" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{SetBook({...book,location:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="image url" className='mb-3'>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{SetBook({...book,imageUrl:e.target.value})}} className='rounded-4'/>
                    </FloatingLabel>
            
            
                </Modal.Body>
                <Modal.Footer>
            
                    <Button variant="success" className='px-5 p-3 rounded-5' onClick={handleDispatch}>Add</Button>
                </Modal.Footer>
            </Modal>
           
        </>
    )
}

export default Add