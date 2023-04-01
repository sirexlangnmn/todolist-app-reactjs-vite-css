// import React, { useState } from 'react';

// export const EditTodoForm = ({ editTodo, task }) => {
// 	const [value, setValue] = useState(task.task);

// 	const handleSubmit = e => {
// 		e.preventDefault();
// 		editTodo(value, task.id);
// 		setValue("");
// 	}
// 	return (
// 		<form className="EditTodoForm" onSubmit={handleSubmit}>
// 			<input
// 				type="text"
// 				className="todo-input"
// 				value={value}
// 				placeholder="Update Task"
// 				onChange={(e) => setValue(e.target.value)}
// 			/>
// 			<button type='submit' className='todo-btn'>Update Task</button>
// 		</form>
// 	);
// };


import React, { useState } from 'react';

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: TodoItem;
}

export const EditTodoForm = ({ editTodo, task }: EditTodoFormProps): JSX.Element => {
  const [value, setValue] = useState<string>(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  );
};
