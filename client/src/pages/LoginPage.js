import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[redirect,setRedirect]=useState(false)

  const login = async (e) => {
    e.preventDefault();
    
    const response=await fetch('http://localhost:4300/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        
      });
      if (response.ok){
        setRedirect(true)

      }
      else{
        alert('wrong Credentials')
      }
    }

    if(redirect){
      return <Navigate to={'/'}/>

    }
  return (

    <div className="form-main">
      <form onSubmit={login}>
        <h1>LOGIN</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
