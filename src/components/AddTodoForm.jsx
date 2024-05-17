
import React, { useState } from 'react'

const AddTodoForm = ({Addtodo}) => {

  const  [text, setText] = useState('')   

  function HandleChange (e){
    e.preventDefault();
    if(text  === ''){
      alert('enter a task!');
      
    }
    else{
       Addtodo(text)
    }
 setText("")
  };


  return (
    <div >
      <p  className='text-[25px] text-center p-10'>Welcome</p>
    <div>
      <form  className="flex justify-center border-t-2 p-10 gap-5 " onSubmit={HandleChange}>
      <input  className='p-4 rounded-2xl w-[500px] border-2'
      type='text'
      value={text}
      placeholder='enter Task for Today'
      onChange={(e)=>setText(e.target.value)}/>
      <button   className='hover:bg-blue-200 px-7 pt- rounded-2xl ' type='submit'>Add to List</button>
      </form>
     
      
    </div>
    
    </div>
  );
}

export default AddTodoForm;
