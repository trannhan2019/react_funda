import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import authApi from '../../../api/authApi';
import axiosClient from '../../../api/axiosClient';
import Navbar from '../../../layouts/frontend/Navbar';
import Footer from './Footer';
const Login = () => {
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };

    axiosClient.get('/sanctum/csrf-cookie').then((response) => {
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
    });
  };

  return (
    <div>
      <Navbar />
      <div className="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-4">
                          Login
                        </h3>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-floating mb-3">
                            <input
                              className={
                                loginInput.error_list.email
                                  ? 'form-control is-invalid'
                                  : 'form-control'
                              }
                              id="inputEmail"
                              type="email"
                              placeholder="name@example.com"
                              name="email"
                              value={loginInput.email}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Email address</label>
                            {loginInput.error_list.email && (
                              <span className="invalid-feedback">
                                {loginInput.error_list.email}
                              </span>
                            )}
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              className={
                                loginInput.error_list.password
                                  ? 'form-control is-invalid'
                                  : 'form-control'
                              }
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={loginInput.password}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Password</label>
                            {loginInput.error_list.password && (
                              <span className="invalid-feedback">
                                {loginInput.error_list.password}
                              </span>
                            )}
                          </div>
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              id="inputRememberPassword"
                              type="checkbox"
                              value=""
                            />
                            <label className="form-check-label">
                              Remember Password
                            </label>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <Link className="small" to="#">
                              Forgot Password?
                            </Link>
                            <button
                              className="btn btn-primary"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small">
                          <Link to="#">
                            Need an account? Sign up!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Login;
