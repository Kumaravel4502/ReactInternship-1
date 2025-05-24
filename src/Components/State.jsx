import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const State = () => {
  const [todos, setTodos] = useState("");
  const [inputData, setInputData] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todos.trim() === "") {
      toast.error("Please enter a task!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: todos,
      completed: false,
    };
    setInputData([{ ...newTodo }, ...inputData]);
    setTodos("");
    toast.success("Task Added Successfully!");
  };

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=8");
    const jsonData = await response.json();
    setInputData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleComplete = (id) => { 
    setInputData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeTodo = (id) => {
    setInputData((prev) => prev.filter((item) => item.id !== id));
    toast.info("Task Removed!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-extrabold text-teal-700 text-center mb-2 tracking-tight drop-shadow-lg">
          TODO LIST
        </h1>
        <p className="text-center text-gray-500 mb-8 text-lg">
          Manage your tasks efficiently and stay productive!
        </p>
        <form
          onSubmit={handleAddTodo}
          className="flex justify-center items-center gap-4 mb-10"
        >
          <ToastContainer />
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 border-2 border-teal-400 focus:border-teal-600 outline-none rounded-full px-6 py-3 text-lg shadow-sm transition-all duration-200"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition-transform transform hover:scale-105"
          >
            Add Task
          </button>
        </form>
        <div className="space-y-5">
          {inputData.length === 0 && (
            <div className="text-center text-gray-400 text-xl py-10">
              No tasks yet. Add your first task!
            </div>
          )}
          {inputData.map((item) => (
            <div
              key={item.id}
              className={`flex items-center justify-between bg-gradient-to-r from-white via-teal-50 to-green-50 p-5 rounded-xl shadow-md transition-all duration-200 ${
                item.completed ? "opacity-70" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleComplete(item.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    item.completed
                      ? "bg-teal-500 border-teal-500"
                      : "border-gray-400"
                  }`}
                  title="Toggle Complete"
                >
                  {item.completed && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <span
                  className={`text-lg font-medium ${
                    item.completed ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.completed
                      ? "bg-green-200 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.completed ? "Completed" : "Pending"}
                </span>
                <button
                  onClick={() => removeTodo(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                  title="Delete Task"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default State;
