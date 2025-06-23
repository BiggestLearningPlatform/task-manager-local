// src/App.jsx
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage on every change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setTasks([task, ...tasks]);
    setNewTask('');
  };

  // Handle enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-center mb-4">📝 Task Manager</h2>

      {/* Input */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="btn btn-primary" onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
