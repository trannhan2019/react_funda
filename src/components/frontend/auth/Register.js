import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';
import Footer from './Footer';
const Register = () => {
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
                        <form>
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input
                                  className="form-control"
                                  id="inputFirstName"
                                  type="text"
                                  placeholder="Enter your first name"
                                  name="firstName"
                                  value=""
                                />
                                <label>First name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  className="form-control"
                                  id="inputLastName"
                                  type="text"
                                  placeholder="Enter your last name"
                                  name="lastName"
                                  value=""
                                />
                                <label>Last name</label>
                              </div>
                            </div>
                          </div>
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputEmail"
                              type="email"
                              placeholder="name@example.com"
                              name="email"
                              value=""
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
                                  value=""
                                />
                                <label>Password</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-floating mb-3 mb-md-0">
                                <input
                                  className="form-control"
                                  id="inputPasswordConfirm"
                                  type="password"
                                  placeholder="Confirm password"
                                  name="confirm_password"
                                  value=""
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
                          <Link to="login.html">
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
