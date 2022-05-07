import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const PrivateRoutes = ({ children: Children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  console.log(location.pathname);

  localStorage.setItem('lastPath', JSON.stringify(location.pathname));

  if (user.logged)
    return <Children />
  else 
    return <Navigate to='/login'/>

}

