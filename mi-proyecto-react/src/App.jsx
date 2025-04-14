import React from 'react';
import './App.css';
import TarjetaTortuga from './TarjetaTortuga.jsx';
import datosTortugas from './datosTortuga.js';

function App() {
  return (
    <div className="aplicacion">
      <header>
        <h1 className="titulo">Tortugas Ninja</h1>
        <h2 className="subtitulo">Cowabunga</h2>
      </header>
        <div className="contenedor-tortugas">
          {datosTortugas.map((tortuga) => (
            <TarjetaTortuga
              key={tortuga.id}
              nombre={tortuga.nombre}
              arma={tortuga.arma}
              personalidad={tortuga.personalidad}
              descripcion={tortuga.descripcion}
              imagen={tortuga.imagen}
              claseColor={tortuga.claseColor}
            />
          ))}
      </div> 
      
      <footer>
        <p>Tortugas Ninja SPA 2025</p>
      </footer>
    </div>
  );
}
export default App;