import ReactDOM from "react-dom/client";
import "./style.css";
import { useEffect, useState } from "react";

import State from "./Components/State";


const App = () => {

  return (
    <>
      <State/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;
