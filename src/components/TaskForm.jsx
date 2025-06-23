// src/components/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
