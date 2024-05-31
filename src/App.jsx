import { useState } from 'react'
import './App.css'
import MensajeBienvenida from './MensajeBienvenida';


export const App = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [mensaje, setMensaje] = useState('');

  const generarMensaje = () => {
    if (edad < 18) {
      setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicación`);
    } else {
      setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicación`);
    }
  }
  return (
    <div className="App">
        {mensaje && <MensajeBienvenida mensaje={mensaje} />}
        <h1>Bienvenido App</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generarMensaje();
          }}
        >
          <div>
              <label> Nombre: </label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
          </div>
          <div>
              <label> Edad: </label>
              <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required/>
          </div>
          <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default App;
