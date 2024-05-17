import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const TodoItem = ({ todo, DeleteTodo }) => {
  const [text, setText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    {checked ?
      setChecked(!checked) : null
    }
    
  };

  const handleChecked = () => {
    setChecked(!checked);
    setShowConfetti(!showConfetti);
    if (checked == false) {
      alert("congrats on completing a task");
    }
  };

  const editTodo = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <div className="flex text-xl   item-center p-2 justify-between  rounded-2xl w-full gap-3 ">
      {showConfetti && <Confetti />}
      <input
        type="checkbox"
        className="text-green-800"
        checked={checked}
        onChange={handleChecked}
      />

      {isEditing ? (
        <input
          className="flex justify-start ml-[-300px]  rounded-md border-2 p-2 "
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p className="p-2 rounded-md hover:bg-blue-50 border-1 hover:border-2 w-full">
          {text}
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
            onClick={editTodo}
          >
            Edit
          </button>
        )}

        {isEditing ? (
          <button
            className="p-2 hover:bg-red-50 rounded-2xl"
            onClick={handleSave}
          >
            Save
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TodoItem;
