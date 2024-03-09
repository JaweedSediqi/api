import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack'

const CreateBooks = () => {
  let [title, setTitle] = useState('')
  let [author, setAuthor] = useState('')
  let [publishYear, setPublishYear] = useState('')
  let Navigate = useNavigate()
  let { enqueueSnackbar } = useSnackbar();

  const handelClick = () => {
    const data = {
      title, author, publishYear
    }
    axios.post('http://localhost:5555/books', data)
      .then(() => {
        enqueueSnackbar('Book created successfully', { variant: 'success' });
        Navigate('/')
      })
      .catch((err) => {
        enqueueSnackbar('Error creating book', { variant: 'error' });
        console.log(err)
      })
  }

  return (
    <div className='col-md-6 p-5 offset-md-3 mt-5' style={{ border: "1px solid " }}>
      <input type="text" className='form-control'
        placeholder='write the title'
        value={title} onChange={(e) => setTitle(e.target.value)}
      />

      <input type="text" className='form-control my-3 '
        placeholder='write the author'
        value={author} onChange={(e) => setAuthor(e.target.value)}
      />

      <input type="number" className='form-control'
        placeholder='write the publishYear'
        value={publishYear} onChange={(e) => setPublishYear(e.target.value)}
      />
      <div className="d-grid my-3">
        <button onClick={handelClick} className='btn btn-outline-primary' >Add</button>
      </div>

    </div>
  )
}

export default CreateBooks
