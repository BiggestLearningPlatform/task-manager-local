// src/components/TaskList.jsx
import React from 'react';

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p className="text-center text-muted">No tasks yet. Add one!</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? 'list-group-item-success' : ''
          }`}
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="form-check-input me-2"
              id={`task-${task.id}`}
            />
            <label
              htmlFor={`task-${task.id}`}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {task.title}
            </label>
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
