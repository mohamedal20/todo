
import React, { useCallback } from 'react';
import type { Todo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }, [setTodos]);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [setTodos]);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, [setTodos]);

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 sm:pt-20 px-4">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Gemini To-Do List
          </h1>
          <p className="text-slate-400 mt-2 text-lg">Stay organized, one task at a time.</p>
        </header>

        <main className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-2xl ring-1 ring-white/10">
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        </main>
        
        <footer className="text-center mt-10 text-slate-500 text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
