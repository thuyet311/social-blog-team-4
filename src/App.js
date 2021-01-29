import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import PublicNavbar from './components/PublicNavbar';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import AddBlog from './pages/AddBlog';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <div className='App'>
      <PublicNavbar />
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/blog/add' exact component={AddBlog} />
        <Route path='/blogs/:id' exact component={BlogDetailPage} />
        <Route path='/' exact component={HomePage} />
        <ProtectedRoute
          path='/admin/profile'
          render={(props) => <AdminPage {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
