import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async (event) => {
    event.preventDefault();
     
      const doc=await fetch('http://localhost:4300/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (doc.status === 200) {
        alert('registration successful');
      } else {
        alert('registration failed');
      };
    }
 

  return (
    <div className="form-main" onSubmit={register}>
      <h1>SIGN UP</h1>
      <form className="register">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>SignUp</button>
      </form>
    </div>
  );
};

export default RegisterPage;
