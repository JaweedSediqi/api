import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
const ShowBook = () => {
  let [book,setBook]=useState('');
  let {id}=useParams()
  useEffect(()=>{
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res)=>setBook(res.data))
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <div className='col-md-6 offset-md-3 mt-4 p-1 ' style={{border:'1px solid'}}>
      <p>The book id is ___________  {book._id}  </p>
      <p>The book title is ___________  {book.title}  </p>
      <p>The book author is ___________  {book.author}  </p>
      <p>The book id publishYear ___________  {book.publishYear}  </p>
      <p>The book createdAt is ___________ 
         {new Date(book.createdAt).toString()}  </p>
         <p>The book createdAt is ___________ 
         {new Date(book.updatedAt).toString()}  </p>
    </div>
  )
}

export default ShowBook
