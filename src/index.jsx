import ReactDOM from "react-dom/client";
import "./style.css";
import { useEffect, useState } from "react";
import TodoItem from "./Components/TodoItem";
import ProductLayout from "./Components/ProductLayout";
import ProductCard from "./Components/ProductCard";
import TodoList from "./Components/TodoItem";
import State from "./Components/State";
import TodoApp from "./Components/TodoApp";

const App = () => {
  //   const [loading, setLoading] = useState(false);
  //   const [todoList, setTodoList] = useState([]);
  //   const [errorMsg, setErrorMsg] = useState(null);
  //   const [todoDetails, setTodoDetails] = useState(null);
  //   const [openDialog, setOpenDialog] = useState(false);

  //   async function fetchListOfTodos() {
  //     try {
  //       setLoading(true);
  //       const apiResponse = await fetch("https://dummyjson.com/todos");
  //       const result = await apiResponse.json();

  //       if (result?.todos && result?.todos?.length > 0) {
  //         setTodoList(result?.todos);
  //         setLoading(false);
  //         setErrorMsg("");
  //       } else {
  //         setTodoList([]);
  //         setLoading(false);
  //         setErrorMsg("");
  //       }
  //     } catch (e) {
  //       console.log(e);
  //       setErrorMsg("Some error occured");
  //     }
  //   }

  //   async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
  //     console.log(getCurrentTodoId);

  //     try {
  //       const apiResponse = await fetch(
  //         `https://dummyjson.com/todos/${getCurrentTodoId}`
  //       );
  //       const details = await apiResponse.json();
  //       if (details) {
  //         setTodoDetails(details);
  //         setOpenDialog(true);
  //       } else {
  //         setTodoDetails(null);
  //         setOpenDialog(false);
  //       }

  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   useEffect(() => {
  //     fetchListOfTodos();
  //   }, []);

  //   if (loading) return <div>Loading...</div>;
  //   return (
  //     <div>
  //       <h1>Simple Todo APP Using Material UI</h1>
  //       <div>
  //         {todoList && todoList.length > 0
  //           ? todoList.map((todoItem) => (
  //               <TodoItem
  //                 fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
  //                 todo={todoItem}
  //               />
  //             ))
  //           : null}
  //       </div>
  //       <todoDetails
  //         setOpenDialog={setOpenDialog}
  //         openDialog={openDialog}
  //         todoDetails={todoDetails}
  //         setTodoDetails={setTodoDetails}
  //       />
  //     </div>
  //   );

  return (
    <>
      <p>Hello</p>
      {/* <ProductLayout /> */}
      {/* <TodoList/> */}
      <State/>
      {/* <TodoApp/> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
