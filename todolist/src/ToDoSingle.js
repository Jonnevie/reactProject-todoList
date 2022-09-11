import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const ToDoSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todo } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
const handleClick = (e) => {
    navigate('/todos');
}

  return (
    <div>
      {todo && (
        <div>
          <h2>PostID: {todo.id}</h2>
          <h1>{todo.title}</h1>
          <article>{todo.body}</article>
          <footer>Written by {todo.userId}</footer>
        </div>
      )}
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default ToDoSingle;
