
function TarjetaTortuga({ tortuga }) {
  return (
    <div className="tarjeta">
      <img src={tortuga.imagen} alt={tortuga.nombre} />
      <h2>{tortuga.nombre}</h2>
      <p>{tortuga.descripcion}</p>
      <p>Edad: {tortuga.edad}</p>
    </div>
  );
}