import axios from 'axios';

// Base URL of your backend API
const API_URL = 'http://localhost:8080/api/tasks';

export const getTasks = () => axios.get(API_URL);

export const createTask = (task) => axios.post(API_URL, task);

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);

export const updateTask = (id, updatedTask) => axios.put(`${API_URL}/${id}`, updatedTask);
