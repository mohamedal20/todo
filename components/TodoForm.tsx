
import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow bg-slate-700/50 border-2 border-slate-600 rounded-lg py-3 px-4 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-slate-500 disabled:cursor-not-allowed shadow-lg"
        disabled={!text.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
