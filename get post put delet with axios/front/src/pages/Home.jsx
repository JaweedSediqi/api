import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
const Home = () => {
  let [books, setBooks] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5555/books').then((res) => setBooks(res.data.data)).catch((err) => console.log(err))
  }, [])
  return (
    <div className='container'>
      <h1 className='text-primary my-2 '>Book List</h1>
      <div className="  d-flex align-items-center justify-content-end gap-4">
        <Link to={'/books/create'} className='btn btn-outline-primary mb-4' >Add Book</Link>
      </div>
      <table className='table' >
        <thead>
          <th className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>No</th>

          <th className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>Title</th>

          <th className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>Author</th>

          <th className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>PublishYear</th>

          <th className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>Opetation</th>

        </thead>
        <tbody>
          {
            books.map((e, i) => (
              <tr>
                <td className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>{i + 1}</td>
                <td className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>{e.title}</td>
                <td className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>{e.author}</td>
                <td className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>{e.publishYear}</td>
                <td className='p-1 ' style={{ border: "1px solid rgb(1, 48, 124) ", textAlign: "center" }}>
                  <div className="  d-flex justify-content-center  gap-2">
                    <Link to={`/books/details/${e._id}`}  className=' btn-outline-primary'>Show</Link  >
                    <Link to={`/books/edit/${e._id}`}  className=' btn-outline-warning'>Edit</Link  >
                    <Link to={`/books/delete/${e._id}`}   className=' btn-outline-danger'>Delet</Link  >
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home
