import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import producto1 from './assets/product1.jpg';  // Asegúrate de tener estas imágenes
import producto2 from './assets/product2.jpg';
import producto3 from './assets/product3.jpg';

function Carrito() {
  // Simulando productos en el carrito con useState
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Galletas', precio: 10, cantidad: 2, imagen: producto1 },
    { id: 2, nombre: 'Cupcakes', precio: 15, cantidad: 1, imagen: producto2 },
    { id: 3, nombre: 'Pasteles', precio: 25, cantidad: 3, imagen: producto3 },
  ]);

  // Función para eliminar producto del carrito
  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  // Calcular el total del carrito
  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>

      {productos.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          Tu carrito está vacío. ¡Añade productos!
        </div>
      ) : (
        <div className="row">
          {productos.map((producto) => (
            <div key={producto.id} className="col-md-4">
              <div className="card">
                <img src={producto.imagen} alt={producto.nombre} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">Precio: ${producto.precio}</p>
                  <p className="card-text">Cantidad: {producto.cantidad}</p>
                  <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {productos.length > 0 && (
        <div className="mt-4">
          <h4>Total: ${calcularTotal()}</h4>
          <div className="d-flex justify-content-between">
            <Link to="/catalogo" className="btn btn-secondary">Continuar comprando</Link>
            <Link to="/pago" className="btn btn-primary">Proceder al pago</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Carrito;