// src/services/reservaService.js
import axios from "axios";

// URL del API donde se enviarán las reservas
const API_URL = "http://localhost:8080/api/reservas";  // Cambia esta URL si es necesario

// Función para crear una nueva reserva
export const crearReserva = async (reservaData) => {
  try {
    const response = await axios.post(API_URL, reservaData); // Enviar la solicitud POST al backend
    return response.data; // Retornar los datos de la respuesta
  } catch (error) {
    console.error("Error al crear la reserva:", error);
    throw error;
  }
};

// Función para obtener todas las reservas
export const obtenerReservas = async () => {
  try {
    const response = await axios.get(API_URL); // Obtener todas las reservas desde el backend
    return response.data; // Retornar los datos de las reservas
  } catch (error) {
    console.error("Error al obtener las reservas:", error);
    throw error;
  }
};

// Función para eliminar una reserva
export const eliminarReserva = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); // Enviar una solicitud DELETE para eliminar la reserva con el ID proporcionado
    return response.data; // Retornar los datos de la respuesta
  } catch (error) {
    console.error("Error al eliminar la reserva:", error);
    throw error;
  }
};
