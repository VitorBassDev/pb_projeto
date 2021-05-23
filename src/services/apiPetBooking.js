import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers:{
    'X-Application-token': process.env.REACT_APP_TOKEN,
    'Content-Type': 'application/json'
    }
});

export default api