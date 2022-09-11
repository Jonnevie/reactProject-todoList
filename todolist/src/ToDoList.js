import ToDo from "./ToDo";
import useFetch from "./useFetch";

const ToDoList = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/posts");
  {
    data && console.log({ data });
  }
  return <div>{data && <ToDo todos={data} />}</div>;
};

export default ToDoList;
