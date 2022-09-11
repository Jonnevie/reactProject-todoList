import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ToDo = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} id={todo.id}>
          <Link to={`/todos/${todo.id}`}> {todo.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
