import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import MasterLayout from '../layouts/admin/MasterLayout';
import Login from '../components/frontend/auth/Login';
import Register from '../components/frontend/auth/Register';
import Home from '../components/frontend/Home';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            localStorage.getItem('auth_token') ? (
              <Navigate to="/" replace />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            localStorage.getItem('auth_token') ? (
              <Navigate to="/" replace />
            ) : (
              <Register />
            )
          }
        />
        <Route path="/admin" element={<MasterLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
