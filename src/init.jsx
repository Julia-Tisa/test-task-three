import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/index.js';
import LogIn from './components/LogIn.jsx';
import Profile from './components/Profile.jsx';

const init = () => {
  const store = configureStore({
      reducer,
    });

  return (
    <div className="d-flex flex-column h-100">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path={'/'} element={<LogIn />} />
            <Route path={'/profile'} element={<Profile />} />
          </Routes>
        </Router>
      </Provider>
  </div>
  )
};

export default init;
