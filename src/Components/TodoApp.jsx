// import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const TodoApp = () => {
//   const [open, setOpen] = useState(false);
//   const [todo, setTodo] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [dialog, setDialog] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [editedTodo, setEditedTodo] = useState("");
//   const [editedStatus, setEditedStatus] = useState(false);
//   const [newTask, setNewTask] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredTodos, setFilteredTodos] = useState([]);

//   const FetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("https://dummyjson.com/todos");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       setTodo(data.todos);
//       setFilteredTodos(data.todos);
//       toast.success("Todos loaded successfully!");
//     } catch (error) {
//       console.log(error);
//       setError(true);
//       toast.error("Failed to load todos.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const filtered = todo.filter((item) =>
//       item.todo.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setFilteredTodos(filtered);
//   }, [searchQuery, todo]);

//   const handleDelete = (id) => {
//     setTodo((prevTodos) => {
//       const updatedTodos = prevTodos.filter((item) => item.id !== id);
//       return updatedTodos.map((item, index) => ({ ...item, id: index + 1 }));
//     });
//     setFilteredTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
//     if (dialog && dialog.id === id) {
//       setDialog(null);
//     }
//     toast.info("Task deleted successfully!");
//   };

//   const handleAddTask = () => {
//     if (newTask.trim() === "") {
//       toast.warn("Task cannot be empty!");
//       return;
//     }
//     const newTaskObj = {
//       id: todo.length + 1,
//       todo: newTask,
//       completed: false,
//     };
//     setTodo((prevTodos) => [...prevTodos, newTaskObj]);
//     setFilteredTodos((prevTodos) => [...prevTodos, newTaskObj]);
//     setNewTask("");
//     toast.success("Task added successfully!");
//   };

//   const handleSave = () => {
//     setTodo((prevTodos) =>
//       prevTodos.map((item) =>
//         item.id === dialog.id
//           ? { ...item, todo: editedTodo, completed: editedStatus }
//           : item
//       )
//     );
//     setFilteredTodos((prevTodos) =>
//       prevTodos.map((item) =>
//         item.id === dialog.id
//           ? { ...item, todo: editedTodo, completed: editedStatus }
//           : item
//       )
//     );
//     setDialog({ ...dialog, todo: editedTodo, completed: editedStatus });
//     setEditMode(false);
//     toast.success("Task updated successfully!");
//   };

//   return (
//     <div className="font-sans p-6 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen">
//       <ToastContainer />
//       <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-8 drop-shadow-lg">
//         🌟 My Todo List 🌟
//       </h1>
//       <div className="text-center">
//         <button
//           onClick={() => {
//             FetchData();
//             setOpen(!open);
//           }}
//           className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-transform transform hover:scale-105"
//         >
//           View Todos
//         </button>
//         {open && (
//           <div className="mt-8">
//             <h2 className="text-4xl font-semibold text-center text-purple-700 mb-6">
//               📝 Your Todos
//             </h2>
//             <div className="flex flex-col sm:flex-row justify-center mb-6 gap-4">
//               <input
//                 type="text"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 placeholder="Enter new task"
//                 className="border rounded-full p-4 w-full sm:w-2/3 shadow-lg focus:ring-4 focus:ring-purple-500 text-lg text-gray-700 placeholder-gray-500 transition-transform transform hover:scale-105"
//               />
//               <button
//                 onClick={handleAddTask}
//                 className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-transform transform hover:scale-105"
//               >
//                 ➕ Add Task
//               </button>
//             </div>

//             <div className="flex justify-center mb-6">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 placeholder="🔍 Search tasks..."
//                 className="border rounded-full mr-36 p-4 w-full sm:w-2/3 shadow-lg focus:ring-4 focus:ring-purple-500 text-lg text-gray-700 placeholder-gray-500 transition-transform transform hover:scale-105"
//               />
//             </div>

//             {loading ? (
//               <div className="text-center mt-6">
//                 <div className="loader border-t-4 border-purple-700 w-12 h-12 rounded-full mx-auto animate-spin"></div>
//                 <p className="text-lg mt-4 text-gray-700">Loading...</p>
//               </div>
//             ) : error ? (
//               <p className="text-red-600 text-center mt-6 text-lg">
//                 ❌ Error loading data. Please try again later.
//               </p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
//                 {filteredTodos.map((item) => (
//                   <div
//                     key={item.id}
//                     className="border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow transform hover:scale-105"
//                   >
//                     <h3 className="font-semibold text-xl mb-3 text-gray-800">
//                       {item.todo}
//                     </h3>
//                     <p
//                       className={`mb-3 text-lg ${
//                         item.completed ? "text-green-600" : "text-orange-600"
//                       }`}
//                     >
//                       Status: {item.completed ? "✅ Completed" : "⏳ Pending"}
//                     </p>
//                     <div className="flex justify-between">
//                       <button
//                         onClick={() => {
//                           setDialog(item);
//                           setEditedTodo(item.todo);
//                           setEditedStatus(item.completed);
//                         }}
//                         className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-5 py-2 rounded-full hover:from-red-700 hover:to-pink-700 transition-transform transform hover:scale-105"
//                       >
//                         🔍 View Details
//                       </button>
//                       <button
//                         onClick={() => handleDelete(item.id)}
//                         className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-5 py-2 rounded-full hover:from-gray-700 hover:to-gray-800 transition-transform transform hover:scale-105"
//                       >
//                         🗑️ Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//         {dialog && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg shadow-2xl p-8 w-96">
//               <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
//                 📝 Todo Details
//               </h2>
//               {editMode ? (
//                 <div>
//                   <input
//                     type="text"
//                     value={editedTodo}
//                     onChange={(e) => setEditedTodo(e.target.value)}
//                     className="w-full border rounded-lg p-3 mb-4 shadow-md focus:ring-2 focus:ring-purple-500"
//                   />
//                   <select
//                     value={editedStatus}
//                     onChange={(e) => setEditedStatus(e.target.value === "true")}
//                     className="w-full border rounded-lg p-3 mb-4 shadow-md focus:ring-2 focus:ring-purple-500"
//                   >
//                     <option value="true">Completed</option>
//                     <option value="false">Pending</option>
//                   </select>
//                   <button
//                     onClick={handleSave}
//                     className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full w-full hover:from-green-700 hover:to-teal-700 transition-transform transform hover:scale-105"
//                   >
//                     💾 Save
//                   </button>
//                 </div>
//               ) : (
//                 <div>
//                   <p className="font-semibold mb-3 text-gray-800">
//                     ID: {dialog.id}
//                   </p>
//                   <p className="mb-3 text-gray-700">Todo: {dialog.todo}</p>
//                   <p
//                     className={`mb-6 text-lg ${
//                       dialog.completed ? "text-green-600" : "text-orange-600"
//                     }`}
//                   >
//                     Status: {dialog.completed ? "✅ Completed" : "⏳ Pending"}
//                   </p>
//                   <button
//                     onClick={() => setEditMode(true)}
//                     className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full w-full hover:from-yellow-600 hover:to-orange-600 transition-transform transform hover:scale-105 mb-4"
//                   >
//                     ✏️ Edit
//                   </button>
//                 </div>
//               )}
//               <button
//                 onClick={() => setDialog(null)}
//                 className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-6 py-3 rounded-full w-full hover:from-blue-800 hover:to-purple-800 transition-transform transform hover:scale-105"
//               >
//                 ❌ Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [taskdata, setTaskdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Add Task
  const handleAddTask = () => {
    if (task.trim() === "") {
      toast.warn("Please enter a task");
      return;
    }

    const newTask = {
      id: taskdata.length + 1,
      task: task,
      completed: false,
    };

    setTaskdata((prev) => [...prev, newTask]);
    setTask("");
    toast.success("Task added successfully!");
  };

  // Search filter logic
  useEffect(() => {
    const filtered = taskdata.filter((item) =>
      item.task.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchQuery, taskdata]);

  // Delete Task
  const handleDelete = (id) => {
    setTaskdata((prevTodos) => {
      const updatedTodos = prevTodos.filter((item) => item.id !== id);
      return updatedTodos.map((item, index) => ({ ...item, id: index + 1 }));
    });

    setFilteredTodos((prev) => prev.filter((item) => item.id !== id));
    toast.info("Task deleted successfully!");
  };

  // Complete/Undo Task
  const handleToggleComplete = (id) => {
    setTaskdata((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

    setFilteredTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );

    toast.success("Task status updated!");
  };
  return (
    <div>
      <ToastContainer />
      <h1 className="text-center text-3xl font-bold mb-6">TodoApp</h1>

      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="border rounded-full p-4 w-full sm:w-2/3 shadow-lg focus:ring-4 focus:ring-purple-500 text-lg text-gray-700 placeholder-gray-500 transition-transform transform hover:scale-105"
        />
        <button
          onClick={handleAddTask}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-green-700 hover:to-teal-700 transition-transform transform hover:scale-105 ml-4"
        >
          Add Task
        </button>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="🔍 Search tasks..."
        className="border ml-30 m-5 rounded-full p-4 w-full sm:w-2/3 shadow-lg focus:ring-4 focus:ring-purple-500 text-lg text-gray-700 placeholder-gray-500 transition-transform transform hover:scale-105"
      />
      

      <div className="max-w-2xl mx-auto">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          <ul className="space-y-4">
            {filteredTodos.map((item) => (
              <li
                key={item.id}
                className={`flex justify-between items-center p-4 border rounded-lg shadow-md ${
                  item.completed ? "bg-green-100" : "bg-white"
                }`}
              >
                <span
                  className={`text-lg ${
                    item.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {item.task}
                </span>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleToggleComplete(item.id)}
                    className={`px-4 py-2 rounded-full text-white ${
                      item.completed
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    {item.completed ? "Undo" : "Complete"}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
     
    </div>
  );
};

export default TodoApp;
