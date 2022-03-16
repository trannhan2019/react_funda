import { useState } from 'react';
import { Link } from 'react-router-dom';
import authApi from '../../../api/authApi';
import Navbar from '../../../layouts/frontend/Navbar';
import Footer from './Footer';
const Register = () => {
  const [registerInput, setRegisterInput] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
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
      password_confirmation: registerInput.password_confirmation,
    };
    authApi
      .register(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
                              className="form-control"
                              id="inputLastName"
                              type="text"
                              placeholder="Enter your last name"
                              name="name"
                              value={registerInput.lastName}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Last name</label>
                          </div>

                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              type="email"
                              placeholder="name@example.com"
                              name="email"
                              value={registerInput.email}
                              onChange={(e) => handleInput(e)}
                            />
                            <label>Email address</label>
                          </div>

                          <div className="row mb-3">
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input
                                  className="form-control"
                                  id="inputPassword"
                                  type="password"
                                  placeholder="Create a password"
                                  name="password"
                                  value={registerInput.password}
                                  onChange={(e) => handleInput(e)}
                                />
                                <label>Password</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input
                                  className="form-control"
                                  type="password"
                                  placeholder="Confirm password"
                                  name="password_confirmation"
                                  value={registerInput.password}
                                  onChange={(e) => handleInput(e)}
                                />
                                <label>Confirm Password</label>
                              </div>
                            </div>
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
