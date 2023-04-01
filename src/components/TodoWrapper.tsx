// import React, { useState } from 'react'
// import { TodoForm } from './TodoForm'
// import { v4 as uuidv4 } from 'uuid';
// import { Todo } from './Todo';
// import { EditTodoForm } from './EditTodoForm';
// uuidv4();

// export const TodoWrapper = () => {
//   const [todos, setTodos] = useState([]);
//   const addTodo = todo => {
//     setTodos([
//       ...todos,
//       { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
//   }

//   const toggleComplete = id => {
//     setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
//   }

//   const deleteTodo = id => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   }

//   const editTodo = id => {
//     setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
//   }

//   const updateTask = (task, id) => {
//     setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
//   }

//   return (
//     <div className='TodoWrapper'>
//       <h1>Get Things Done</h1>
//       <TodoForm addTodo={addTodo} />
//       {todos.map((todo, index) => (
//         todo.isEditing
//           ? (
//             <EditTodoForm editTodo={updateTask} task={todo}/>
//           )
//           : (
//             <Todo
//               task={todo}
//               key={index}
//               toggleComplete={toggleComplete}
//               deleteTodo={deleteTodo}
//               editTodo={editTodo}
//             />
//           )

//       ))}
//     </div>
//   )
// }


import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export const TodoWrapper = (): JSX.Element => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string): void => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (task: string, id: string): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={updateTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
