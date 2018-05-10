import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import UploadImage from './pages/UploadImage';
import Login from './pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <span>
        <Route
          exact
          path='/'
          component={Home} />

        <Route
          path='/upload-image'
          component={UploadImage} />

        <Route 
          path='/login'
          component={Login} />
      </span>
    </BrowserRouter>
  );
};

export default Routes;