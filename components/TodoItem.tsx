
import React from 'react';
import type { Todo } from '../types';
import TrashIcon from './icons/TrashIcon';
import CheckIcon from './icons/CheckIcon';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center bg-slate-800 p-3 rounded-lg shadow-md transition-all duration-300 hover:bg-slate-700/50 group">
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-7 h-7 flex-shrink-0 border-2 rounded-full flex items-center justify-center mr-4 transition-all duration-300 ${
          todo.completed
            ? 'border-green-500 bg-green-500'
            : 'border-slate-500 group-hover:border-blue-500'
        }`}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && <CheckIcon className="w-4 h-4 text-white" />}
      </button>
      <span className={`flex-grow text-lg transition-colors duration-300 ${
        todo.completed ? 'line-through text-slate-500' : 'text-slate-200'
      }`}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 p-2 text-slate-500 hover:text-red-500 transition-colors duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Delete todo"
      >
        <TrashIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TodoItem;
