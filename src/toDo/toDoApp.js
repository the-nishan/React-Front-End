import React, { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);

      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">📝 To-Do App</h1>

      {/* Input Section */}

      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task..."
          className="flex-grow px-4 py-2 border border-indigo-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={handleAdd}
          className="bg-indigo-500 text-white px-5 py-2 rounded-r-md hover:bg-indigo-600 transition"
        >
          Add
        </button>
      </div>

      {/* Task List */}

      <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 transition"
          >
            <span className="text-gray-800">{task}</span>

            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
