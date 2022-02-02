import axios from 'axios';

const API = axios.create({ baseURL: 'https://jekaloassessment.herokuapp.com/' });

export const createUser = (newUser) => API.post('/api/user', newUser);
export const getUsers = () => API.get('/api/users');
export const deleteUser = (username) => API.delete(`/api/${username}`);
