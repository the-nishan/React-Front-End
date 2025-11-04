import React, { useState } from "react";

function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-5xl font-bold text-indigo-700 mb-8">To-Do List</h1>

      <div className="flex w-full max-w-md mb-6">
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

      <ul className="bg-white rounded-md shadow-md w-full max-w-md divide-y divide-gray-200">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center px-4 py-3 text-lg text-gray-800 hover:bg-gray-50"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700 text-sm font-medium ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
