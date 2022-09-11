import ToDoList from "./ToDoList";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import ToDoSingle from "./ToDoSingle";
import ToDoPostByOne from "./ToDoPostByOne"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/todos" element={<ToDoList />} />
          <Route path="/todos/:id" element={<ToDoSingle />} />
          <Route path="/postsby1" element={<ToDoPostByOne />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
