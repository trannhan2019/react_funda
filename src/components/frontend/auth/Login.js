import { Link } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';
import Footer from './Footer';
const Login = () => {
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
                        <form>
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
                          <div className="form-floating mb-3">
                            <input
                              className="form-control"
                              id="inputPassword"
                              type="password"
                              placeholder="Password"
                              name="password"
                              value=""
                            />
                            <label>Password</label>
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
