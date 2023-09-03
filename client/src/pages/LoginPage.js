import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:4300/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <div className="form-main" onSubmit={login}>
    <form  >
      <h1>LOGIN</h1>
      <form className="login">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </form>
    </form>
    </div>
  );
};

export default LoginPage;
