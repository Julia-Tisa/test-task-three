import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const validation = username === 'developer21' && password === '123456';

  const handleLogin = () => {
    if (validation) {
      dispatch({ type: 'LOGIN', payload: { username } });
      navigate('/profile');
    }
  };

  return (
    <div className='container'>
    <h1>Log In</h1>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleLogin} disabled={!validation}>
      Login
    </button>
  </div>
  );
};
    
export default LogIn;