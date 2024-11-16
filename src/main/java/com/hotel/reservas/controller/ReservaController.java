package com.hotel.reservas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.reservas.model.Reserva;
import com.hotel.reservas.service.ReservaService;

@RestController
@RequestMapping("/api/reservas")
@CrossOrigin(origins = "*") // Permitir solicitudes desde el frontend
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    // Obtener todas las reservas
    @GetMapping
    public List<Reserva> listarReservas() {
        return reservaService.obtenerReservas();
    }

    // Obtener una reserva por ID
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> obtenerReservaPorId(@PathVariable Integer id) {
        return reservaService.obtenerReservaPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear una nueva reserva
    @PostMapping
    public Reserva crearReserva(@RequestBody Reserva reserva) {
        return reservaService.guardarReserva(reserva);
    }

    // Actualizar una reserva existente
    @PutMapping("/{id}")
    public ResponseEntity<Reserva> actualizarReserva(
            @PathVariable Integer id, @RequestBody Reserva reservaDetalles) {
        return reservaService.obtenerReservaPorId(id).map(reserva -> {
            reserva.setNombreCliente(reservaDetalles.getNombreCliente());
            reserva.setFechaInicio(reservaDetalles.getFechaInicio());
            reserva.setFechaFin(reservaDetalles.getFechaFin());
            reserva.setTipoHabitacion(reservaDetalles.getTipoHabitacion());
            Reserva reservaActualizada = reservaService.guardarReserva(reserva);
            return ResponseEntity.ok(reservaActualizada);
        }).orElse(ResponseEntity.notFound().build());
    }

    // Eliminar una reserva
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarReserva(@PathVariable Integer id) {
        if (reservaService.obtenerReservaPorId(id).isPresent()) {
            reservaService.eliminarReserva(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
