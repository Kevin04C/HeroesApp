import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext'

export const PublicRouter = ({ childer: Children }) => {
  const { user } = useContext(AuthContext);
  if (!user.logged) {
    return <Children />
  }else{
    return <Navigate to='/marvel'/>
  }
  

}
