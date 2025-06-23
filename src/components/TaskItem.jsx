// src/components/TaskItem.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskItem({ task }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{task.title}</span>
      <div>
        <button className="btn btn-sm btn-success me-2">✔</button>
        <button className="btn btn-sm btn-danger">🗑</button>
      </div>
    </li>
  );
}

export default TaskItem;
