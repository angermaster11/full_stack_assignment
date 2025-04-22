import axios from 'axios'

export const register = (data: any) =>
  axios.post('http://localhost:5000/api/auth/register', data)

export const login = (data: any) =>
  axios.post('http://localhost:5000/api/auth/login', data)
