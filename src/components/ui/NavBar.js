import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../type/types';
import './NavBar.css';


export const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', { replace: true });
    dispatch({ type: types.logout });
  }
  return (
    <nav>
      <h4
        className='home'
      >
        Heroes
      </h4>
      <div className='router__links'>
        <NavLink
          className={({ isActive }) => (isActive ? 'link__active' : 'link')}
          to='/marvel'
        >
          Marvel
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'link__active' : 'link')}
          to='/dc'
        >
          DC
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'link__active' : 'link')}
          to='/search'
        >
          Search
        </NavLink>

      </div>
      <div className='actions__user'>
        <span
          className='link__active user'
        >
          {user.name}
        </span>
        <button
          className='btn link'
          onClick={handleLogout}

        >
          Logout
        </button>
      </div>
    </nav>
  )
}
