import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import authApi from '../../../api/authApi';
import axiosClient from '../../../api/axiosClient';
import Navbar from '../../../layouts/frontend/Navbar';
import Footer from './Footer';

const Register = () => {
  const history = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    setRegisterInput({
      ...registerInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(registerInput);
    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    };

    axiosClient.get('/sanctum/csrf-cookie').then((response) => {
      // Login...
      authApi.register(data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal('Success', res.data.message, 'success');
          history('/');
        } else {
          setRegisterInput({
            ...registerInput,
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
                  <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-4">
                          Create Account
                        </h3>
                      </div>
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="form-floating mb-3">
                            <input
                              className={
                                registerInput.error_list.name
                                  ? 'form-control is-invalid'
                                  : 'form-control'
                              }
                              id="inputLastName"
                              type="text"
                              placeholder="Enter your last name"
                              name="name"
                              value={registerInput.name}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Full name</label>
                            {registerInput.error_list.name && (
                              <span className="invalid-feedback">
                                {registerInput.error_list.name}
                              </span>
                            )}
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              className={
                                registerInput.error_list.email
                                  ? 'form-control is-invalid'
                                  : 'form-control'
                              }
                              id="inputEmail"
                              type="email"
                              placeholder="name@example.com"
                              name="email"
                              value={registerInput.email}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Email address</label>
                            {registerInput.error_list.email && (
                              <span className="invalid-feedback">
                                {registerInput.error_list.email}
                              </span>
                            )}
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              className={
                                registerInput.error_list.password
                                  ? 'form-control is-invalid'
                                  : 'form-control'
                              }
                              type="password"
                              placeholder="Create a password"
                              name="password"
                              value={registerInput.password}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Password</label>
                            {registerInput.error_list.password && (
                              <span className="invalid-feedback">
                                {registerInput.error_list.password}
                              </span>
                            )}
                          </div>

                          <div className="mt-4 mb-0">
                            <div className="d-grid">
                              <button
                                className="btn btn-primary btn-block"
                                type="submit"
                              >
                                Create Account
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center py-3">
                        <div className="small">
                          <Link to="#">
                            Have an account? Go to login
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

export default Register;
