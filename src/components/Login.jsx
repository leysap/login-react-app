import { useState } from 'react';
import Mensaje from './Mensaje';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleUsuarioChange = (e) => setUsuario(e.target.value);
  const handleContraseñaChange = (e) => setContraseña(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameCorrecto = 'admin';
    const passwordCorrecto = '123456';

    if (usuario === usernameCorrecto && contraseña === passwordCorrecto) {
      setMensaje(`Bienvenido, ${usuario}!`);
    } else {
      setMensaje('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usuario">Usuario:</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={handleUsuarioChange}
        />
        <br />
        <label htmlFor="contraseña">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={contraseña}
          onChange={handleContraseñaChange}
        />
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
      {mensaje && <Mensaje mensaje={mensaje} />}
    </div>
  );
};

export default Login;