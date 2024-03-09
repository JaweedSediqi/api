import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
const DeleteBook = () => {
  let {id }=useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate=useNavigate()
  const handelClick=()=>{
    axios.delete(`http://localhost:5555/books/${id}`)
    .then((res)=>{
      enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
    })
    .catch((err)=>{
      
    })
  }
  const handelNo=()=>{
    navigate('/');
  }
  return (
    <div className='col-md-4 offset-md-4 p-5  mt-5' style={{ border: '1px solid' }}>
      <p className='text-center text-danger' >Are you shoure you want to deleted</p>
      <div className="text-center">
        <button onClick={handelNo} className='btn btn-outline-success mx-5' >No</button>
        <button  onClick={handelClick} className='btn btn-outline-danger mx-5 ' >OK</button>
      </div>
    </div>
  )
}

export default DeleteBook
