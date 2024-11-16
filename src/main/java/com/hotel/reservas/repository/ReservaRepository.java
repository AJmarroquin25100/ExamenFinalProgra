package com.hotel.reservas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hotel.reservas.model.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
}
