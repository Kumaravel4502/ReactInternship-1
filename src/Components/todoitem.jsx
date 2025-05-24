import React, { useState } from "react";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        text: inputValue,
        checked: false,
      };
      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleDeleteLast = () => {
    setItems(items.slice(0, -1));
  };

  const handleCheckboxChange = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-2xl font-semibold text-center mb-4">My Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
        <button
          onClick={handleDeleteLast}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete Last
        </button>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 border-b pb-2 last:border-b-0"
          >
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
              className="w-5 h-5 text-blue-500 focus:ring-blue-400"
            />
            <span
              className={`text-lg ${
                item.checked ? "line-through text-gray-400" : ""
              }`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
