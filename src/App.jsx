import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if(storedTodos){
     setTodos(storedTodos);
    }else{setTodos([])}
 } ,[])


  const [text, setText] = useState("");

  const AddTodo = (text) => {
    setTodos((prevTodos) => [ ...prevTodos  ,  {   id: uuidv4() , text} ,]);
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  };
  const DeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(todos[1].id);
  };

  return (
    <div>
      <AddTodoForm Addtodo={AddTodo} todos={todos} text={text} />
      <TodoList
        todos={todos}
        DeleteTodo={DeleteTodo}
        text={setText}
        setText={setText}
      />
    </div>
  );
};

export default App;
