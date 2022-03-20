import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');

  config.headers.Authorization = token ? `Bearer ${token}` : '';
  // config.headers.common = {
  //   'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json'
  // }

  return config;
});

export default axiosClient;
