import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
  
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setTitle(response.data.title)
        
      }).catch((error) => {
        
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
      
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
      
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
    
      <h1 className='text-3xl my-4'>Edit Book</h1>
     
      <div className='col-md-6 offset-md-3' style={{border:"1px solid blue "}}>
        <div className='my-4 p-3'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='form-control  p- '
          />
        </div>
        <div className='my-4 p-3'>
          <label className='text-xl mr-4 text-gray-500'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='form-control '
          />
        </div>
        <div className='my-4 p-3'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='form-control '
          />
        </div>
        <div className="d-grid">
          <button className='p-2  bg-primary btn text-light  my-4 m-8' onClick={handleEditBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditBook

