import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <span>
        <Route
          exact
          path='/'
          component={Home} />
      </span>
    </BrowserRouter>
  );
};

export default Routes;