// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import ReservaForm from "../components/ReservaForm";
import ReservaList from "../components/ReservaList";
import { obtenerReservas } from "../services/reservaService";

const HomePage = () => {
  const [reservas, setReservas] = useState([]);

  // Cargar reservas cuando se monte el componente
  const actualizarReservas = async () => {
    try {
      const reservasData = await obtenerReservas();
      console.log("Reservas obtenidas:", reservasData); // Verificación en consola
      setReservas(reservasData);
    } catch (error) {
      console.error("Error al obtener las reservas:", error);
    }
  };

  useEffect(() => {
    actualizarReservas(); // Cargar las reservas al montar el componente
  }, []);

  return (
    <div>
      <h1>Gestionar Reservas</h1>
      <ReservaForm onReservaCreada={actualizarReservas} />
      <ReservaList reservas={reservas} onReservaEliminada={actualizarReservas} />
    </div>
  );
};

export default HomePage;
