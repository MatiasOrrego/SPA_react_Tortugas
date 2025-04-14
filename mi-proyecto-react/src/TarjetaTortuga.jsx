function TarjetaTortuga({ nombre, arma, personalidad, descripcion, imagen, claseColor }) {
    return (
        <div className={`tarjeta-tortuga ${claseColor}`}>
            <div className="contenido-tarjeta">
                <img 
                    src={imagen} 
                    alt={nombre} 
                    className="imagen-tortuga" 
                />
                <h3 className="nombre-tortuga">{nombre}</h3>
                
                <div className="detalles-tortuga visible">
                    <p className="arma"><span>Arma:</span> {arma}</p>
                    <p className="personalidad"><span>Personalidad:</span> {personalidad}</p>
                    <p className="descripcion">{descripcion}</p>
                </div>
            </div> 
        </div>
    );
}

export default TarjetaTortuga;