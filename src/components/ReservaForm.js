// src/components/ReservaForm.js
import React, { useState } from "react";
import { crearReserva } from "../services/reservaService"; // Importamos la función de creación
import './ReservaForm.css'; // Importamos los estilos

const ReservaForm = ({ onReservaCreada }) => {
  // Estados para almacenar los valores del formulario
  const [nombreCliente, setNombreCliente] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [tipoHabitacion, setTipoHabitacion] = useState("");

  // Función para manejar el submit del formulario
  const manejarSubmit = async (e) => {
    e.preventDefault();  // Prevenimos el comportamiento por defecto (recargar la página)
    
    // Creamos un objeto con los datos del formulario
    const nuevaReserva = { 
      nombreCliente, 
      fechaInicio, 
      fechaFin, 
      tipoHabitacion 
    };

    try {
      // Llamamos a la función crearReserva para hacer la solicitud POST al backend
      await crearReserva(nuevaReserva);
      onReservaCreada();  // Llamamos a la función que recarga la lista de reservas
      resetFormulario();  // Limpiamos los campos del formulario después de guardar
    } catch (error) {
      console.error("Error al crear la reserva:", error);
      // Puedes agregar una notificación de error si lo deseas
    }
  };

  // Función para limpiar los campos del formulario
  const resetFormulario = () => {
    setNombreCliente("");
    setFechaInicio("");
    setFechaFin("");
    setTipoHabitacion("");
  };

  return (
    <div className="form-container">
      <h2>Hacer una Reserva</h2>
      <form onSubmit={manejarSubmit}>
        <div className="form-group">
          <label>Nombre del Cliente</label>
          <input
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Fecha de Inicio</label>
          <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Fecha de Fin</label>
          <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de Habitación</label>
          <select
            value={tipoHabitacion}
            onChange={(e) => setTipoHabitacion(e.target.value)}
            required
          >
            <option value="">Seleccione</option>
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit">Guardar Reserva</button>
          <button type="button" className="eliminar" onClick={resetFormulario}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;
