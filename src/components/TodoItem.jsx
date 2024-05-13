import React, { useState } from "react";
import Confetti from "react-confetti";

const TodoItem = ({ todo, DeleteTodo }) => {
  const [saved, setSaved] = useState(todo.text);

  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(false)


  const handleSave = (todo) => {
    setIsEditing(false);
    setText(e.target.value);
  };

  const editTodo = () => {
    setIsEditing(true);
  };
  const handleChecked = () => {
    setChecked(!checked)
   
  }

  return (
    <div className="flex  item-center p-2 justify-between  rounded-2xl w-full gap-3 ">
      {checked? <Confetti   recycling={false} /> : null}
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      
      {isEditing ? (
        <input
          className="flex justify-center "
          type="text"
          value={saved}
          onChange={(e) => setSaved(e.target.value)}
        ></input>
      ) : (
        <p className="p-2 rounded-md hover:bg-blue-50 border-1 hover:border-2 w-full">
          {todo.text}
        </p>
      )}
      <div className="flex gap-2 ">
        <button
          className="p-2 hover:bg-red-500 hover:text-white rounded-2xl"
          onClick={() => DeleteTodo(todo.id)}
        >
          Delete
        </button>
        {isEditing ? null : (
          <button
            className="p-2 hover:bg-red-50 rounded-2xl"
            onClick={() => editTodo(todo.id)}
          >
            edit
          </button>
        )}

        {isEditing ? (
          <button
            className="p-2 hover:bg-red-50 rounded-2xl"
            onClick={handleSave}
          >
            save
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TodoItem;
