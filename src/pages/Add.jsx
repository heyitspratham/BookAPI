import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ file: add.jsx ~ line 18 ~ handleClick ~ error", error);
    }
  };

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log("🚀 ~ file: add.jsx ~ line 12 ~ Add ~ book", book);

  return (
    <div className="flex flex-col gap-9 ">
      <h1 className="text-4xl" >Add New Book</h1>
      <input
        type="text"
        placeholder="Book Name.."
        onChange={handleChange}
        name="title"
        className="border w-80 p-2 border-gray-300 "
      />
      <input
        type="text"
        placeholder="Description.."
        onChange={handleChange}
        name="desc"
        className="border w-80 p-2 border-gray-300 "
      />
      <input
        type="number"
        placeholder="Price.."
        onChange={handleChange}
        name="price"
        className="border w-80 p-2 border-gray-300 "
      />
      <input
        type="text"
        placeholder="Cover"
        onChange={handleChange}
        name="cover"
        className="border w-80 p-2 border-gray-300 "
      />

      <button onClick={handleClick} className="p-[10px] bg-[rgb(244,142,74)] font-bold text-white ">Add</button>
    </div>
  );
};

export default Add;
