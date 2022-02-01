import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createUser = (newUser) => API.post('/api/user', newUser);
export const getUsers = () => API.get('/api/users');
export const deleteUser = (username) => API.delete(`/api/${username}`);
