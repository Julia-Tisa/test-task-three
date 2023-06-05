import { combineReducers } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  username: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        loggedIn: true,
        username: action.payload.username,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default combineReducers({
    login: loginReducer,
  });