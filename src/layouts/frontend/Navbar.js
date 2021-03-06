import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import authApi from '../../api/authApi';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    authApi.logout().then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal('Success', res.data.message, 'success');
        navigate('/');
      } else {
      }
    });
  };

  let AuthButton = '';
  if (!localStorage.getItem('auth_token')) {
    AuthButton = (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
        </li>
      </>
    );
  } else {
    AuthButton = (
      <li className="nav-item">
        <button
          type="button"
          className="nav-link btn btn-sm btn-danger text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Collection
              </NavLink>
            </li>

            {AuthButton}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
