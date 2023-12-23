import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const { history } = useParams();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform your authentication logic here (e.g., call an API)
      if (username && password) {
        history.push('/');
      }
    };
  return (
    <div className="login-page">
      <h2>Login</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginPage;   