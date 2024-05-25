
import React, { useEffect } from 'react'
import TodoItem from './TodoItem'


const TodoList =({ todos, toggleTodo, DeleteTodo }) => {


 


  return (

    <div>
    <div className='flex justify-center'>
      <p className='p-5 text-lg '>Tasks For Today</p>
      </div>
     
      <div className='flex  justify-center rounded-2xl mt-1'>
      
    <ol className='p-10 border-2 w-[800px] rounded-2xl flex flex-col gap-3 '>
    {todos.length === 0? <p className='text-center text-xl font-sans text-blue-200'>No task Added Yet!</p> : null}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          DeleteTodo={DeleteTodo}
        />
      ))}
    </ol>
    </div>

    <p className='font-bold text-lg text-blue-800 text-center  mt-20 '>copyright 😎 </p>
    </div>
    
  );
}
export default TodoList;