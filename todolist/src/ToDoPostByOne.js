import useFetch from "./useFetch";
import { useParams, useNavigate, Link } from "react-router-dom";

const ToDoPostByOne = () => {
  const { data:todos } = useFetch("https://jsonplaceholder.typicode.com/posts/");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate ('/')
  }

  return (
    <div>
      {todos &&
      todos.filter(todo => todo.userId === 1)
      .map(filteredtodo => (
<div key={filteredtodo.id}><Link to={`/todos/${filteredtodo.id}`}>{filteredtodo.title}</Link></div>
      ) 
  
  )}
  <button onClick={handleClick}>Go Back to Home</button>
  </div>)}

export default ToDoPostByOne;
