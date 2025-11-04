import React, { useState } from "react";

function ToDoApp() {
  const [todo, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
   console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      //  console.log("oldTodos", todo);  
      setTodos([...todo, inputValue]);
      // console.log("newTodos", todo);  
      setInputValue('');
    }
  };
    const handleDelete = (id) => {
    setTodos(todo.filter(todo => todo.id !== id)); //selected id chara bakigula retain korbe
  };


  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-5xl font-bold text-indigo-700 mb-8">To-Do List</h1>

    <div className="flex w-full mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-dashed focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={handleAddTodo}
        className="bg-indigo-500 text-white px-5 py-2 rounded-r-md hover:bg-indigo-600"
      >
        Add
      </button>
    </div>

    <div>
    <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700 text-sm font-medium ml-4"
            >
              Delete
            </button>
            </div>

    <ul className="bg-red-40 rounded-md w-full">
      {todo.map((todo, index) => (
        <li
          key={index}
          className="px-4 py-3 text-lg text-gray-800 hover:bg-gray-50"
        >
          {todo}
        </li>
      ))}
    </ul>
  </div>
);
}
export default ToDoApp;