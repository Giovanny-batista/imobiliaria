// src/Login.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login({ onLogin }) {
  const handleLogin = () => {
    // Implemente a lógica de login aqui
    onLogin();
  }

  return (
    <div>
      <h2>Imobiliária Corrente</h2>
      <TextField label="Nome de usuário" variant="outlined" />
      <TextField label="Senha" variant="outlined" type="password" />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>
  );
}

export default Login;
