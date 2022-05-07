import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<PublicRouter childer={LoginScreen} />} />
        <Route path='/*' element={<PrivateRoutes children={DashboardRoutes} />} />
      </Routes>
    </BrowserRouter>
  )
}
