import React from "react";
import { eliminarReserva } from "../services/reservaService"; // Asegúrate de que la ruta sea correcta
import './ReservaList.css'; // Importa los estilos CSS

const ReservaList = ({ reservas, onReservaEliminada }) => {
  // Función que maneja la eliminación de una reserva
  const manejarEliminar = async (id) => {
    try {
      await eliminarReserva(id); // Llama al servicio para eliminar la reserva
      onReservaEliminada(); // Recarga la lista después de eliminar
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
    }
  };

  return (
    <div>
      <h2>Lista de Reservas</h2>
      {/* Tabla para mostrar las reservas */}
      <table>
        <thead>
          <tr>
            <th>Nombre del Cliente</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de Fin</th>
            <th>Tipo de Habitación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length > 0 ? (
            reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.nombreCliente}</td>
                <td>{reserva.fechaInicio}</td>
                <td>{reserva.fechaFin}</td>
                <td>{reserva.tipoHabitacion}</td>
                <td>
                  {/* Botón para eliminar la reserva */}
                  <button onClick={() => manejarEliminar(reserva.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr className="no-reservas">
              <td colSpan="5">No hay reservas disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReservaList;
