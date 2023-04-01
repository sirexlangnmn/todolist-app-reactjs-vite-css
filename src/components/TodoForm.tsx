// import React, { useState } from 'react';

// export const TodoForm = ({ addTodo }) => {
// 	const [value, setValue] = useState("");

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		addTodo(value);
// 		setValue("");
// 	}
// 	return (
// 		<form className="TodoForm" onSubmit={handleSubmit}>
// 			<input
// 				type="text"
// 				className="todo-input"
// 				value={value}
// 				placeholder="What is the task today?"
// 				onChange={(e) => setValue(e.target.value)}
// 			/>
// 			<button type='submit' className='todo-btn'>Add Task</button>
// 		</form>
// 	);
// };


import React, { useState } from 'react';

interface Props {
  addTodo: (todo: string) => void;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  );
};
