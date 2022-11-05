import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([{cover:"",id:""}]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
        console.log(
          "🚀 ~ file: books.jsx ~ line 14 ~ fetchAllBooks ~ res.data",
          res.data
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id)=>{
    try {
      await axios.delete("http://localhost:8800/books/"+id);
      window.location.reload();
    } catch (err) {
      console.log("🚀 ~ file: books.jsx ~ line 29 ~ handleDelete ~ err", err)
      
    }
  }

  return (
    <div>
      <h1 className="text-4xl font-bold " >Book Shop</h1>
      <div className="flex gap-2">
        {books?.map((book) => (
          <div className="flex-1 flex flex-col gap-1 " key={book.id}>
            {book.cover && <img src={book.cover} alt="" className="w-[200px] h-[300px] bg-[aquamarine] object-cover"/>}
            <h2 className="text-xl font-bold" >{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="px-[3px] py-[6px] border-solid border-[1px] bg-white m-1 text-[rgb(242,100,100)] border-[rgb(242,191,191)] " onClick={()=> handleDelete(book.id)}>Delete</button>
            <button className="px-[3px] py-[6px] border-solid border-[1px] bg-white m-1 text-[rgb(139,139,234)] border-[rgb(204,204,243)]"  ><Link to={`/update/${book.id}`} >Update</Link></button>
          </div>
        ))}
      </div>

      <button className="border m-5 border-black p-3 rounded-md" >
        <Link to="/add">Add Books</Link>
      </button>
    </div>
  );
};

export default Books;
