// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';

// export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
// 	return (
// 		<div className='Todo'>
// 			<p
// 				className={`${task.completed ? 'completed' : ''}`}
// 				onClick={() => toggleComplete(task.id)}
// 			>
// 				{task.task}
// 			</p>
// 			<div>
// 				<FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
// 				<FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
// 			</div>
// 		</div >
// 	)
// }


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }: TodoProps): JSX.Element => {
  const { id, task: taskName, completed } = task;

  return (
    <div className='Todo'>
      <p
        className={`${completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(id)}
      >
        {taskName}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare as IconDefinition} onClick={() => editTodo(id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};
