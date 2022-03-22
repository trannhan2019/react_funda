import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import swal from 'sweetalert';
import authApi from '../../../api/authApi';

import Navbar from '../../../layouts/frontend/Navbar';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    error_list: [],
  });

  const handleSubmit = (data) => {
    authApi.login(data).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('auth_name', res.data.username);
        swal('Success', res.data.message, 'success');
        navigate('/');
      } else if (res.data.status === 401) {
        swal('Warning', res.data.message, 'warning');
      } else {
        setLoginInput({
          ...loginInput,
          error_list: res.data.validation_errors,
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <LoginForm
        onSubmit={handleSubmit}
        error_list={loginInput.error_list}
      />
      ;
    </>
  );
};

export default Login;
