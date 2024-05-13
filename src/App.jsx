import React , {useState} from 'react'
import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"



const App = () => {
  const [todos, setTodos]= useState([])

  const  [text, setText] = useState('')   
   
  function AddTodo(text) {
    setTodos((prevTodos) => 
    [
    
      { id: Date.now(), text, isCompleted: false },  ...prevTodos
    ]);
  }
  function DeleteTodo(id){

    setTodos(todos.filter((todo) => todo.id !== id));
  }



  return (
    <div>
    
         <AddTodoForm Addtodo={AddTodo} text={text} />  
         <TodoList   todos={todos}  DeleteTodo={DeleteTodo} text={setText} setText={setText} />
    </div>
  )
}

export default App
