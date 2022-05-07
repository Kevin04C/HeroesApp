import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import './LoginScreen.css';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem('lastPath') || '/';

  console.log(lastPath)

  const HandleSign = () => {
    dispatch({
      type: '[auth] login',
      payload: {
        name: 'Kevin'
      }
    });
    <Navigate to={lastPath} />
  }

  return (
    <div className='container'>
      <h1 className='mt-5'>Login</h1>
      <hr />
      <button
        className='btn__sign'
        onClick={HandleSign}
      >
        Sign In
      </button>
    </div>
  )
}
