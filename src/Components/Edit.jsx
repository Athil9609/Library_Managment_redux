import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {  useDispatch } from 'react-redux';
import { editBooks } from '../Store/Slice/BookSlice';

function Edit({ bookToEdit }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(bookToEdit);

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        // setData(bookToEdit); 
        setShow(true);
    };

    const handleUpdate = () => {
        dispatch(editBooks(data)); 
        handleClose();
    };

    return (
        <>
            <button className='btn btn-secondary rounded-5 py-2 ps-3' onClick={handleShow}>
                <i className="fa-solid fa-file-pen text-primary" />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                        <Form.Control
                            type="text"
                            value={data?.title }
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                            placeholder="Title"
                            className='rounded-4'
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Author" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.author }
                            onChange={(e) => setData({ ...data, author: e.target.value })}
                            placeholder="Author"
                            className='rounded-4'
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Genre" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.genre }
                            onChange={(e) => setData({ ...data, genre: e.target.value })}
                            placeholder="Genre"
                            className='rounded-4'
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Language" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.language }
                            onChange={(e) => setData({ ...data, language: e.target.value })}
                            placeholder="Language"
                            className='rounded-4'
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Shelf Location" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.location }
                            onChange={(e) => setData({ ...data, location: e.target.value })}
                            placeholder="Shelf Location"
                            className='rounded-4'
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="Image URL" className='mb-3'>
                        <Form.Control
                            type="text"
                            value={data?.imageUrl }
                            onChange={(e) => setData({ ...data, imageUrl: e.target.value })}
                            placeholder="Image URL"
                            className='rounded-4'
                        />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" className='px-5 p-3 rounded-5' onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edit;
