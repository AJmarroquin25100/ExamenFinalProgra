# Sistema de Gestión de Reservas de Habitaciones

## Descripción

Este proyecto es un sistema de gestión de reservas para un hotel, donde los usuarios pueden realizar y gestionar reservas de habitaciones. El sistema está dividido en dos componentes:

- **Backend**: Desarrollado en **Java 21** con **Spring Boot** y expone una API REST para manejar las reservas.
- **Frontend**: Desarrollado en **React** para permitir a los usuarios interactuar con el backend a través de una interfaz web amigable.

## Características

- Registrar una nueva reserva.
- Listar todas las reservas existentes.
- Actualizar las fechas de una reserva.
- Cancelar una reserva.

## Requisitos

### Backend

- **Java 21** o superior.
- **Spring Boot**.
- **MySQL** como base de datos.

### Frontend

- **Node.js** y **npm**.

## Estructura del Proyecto

reservas-backend/ # Backend con Spring Boot ├── src/ ├── application.properties ├── build.gradle # Configuración del proyecto Gradle para el backend reservas-frontend/ # Frontend con React ├── src/ ├── public/ ├── package.json # Dependencias y scripts de React


## Instalación

### Backend

1. Clona el repositorio del backend:

   ```bash
   git clone <URL_DEL_REPOSITORIO_BACKEND>
   cd reservas-backend

./gradlew bootRun

CREATE TABLE reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_cliente VARCHAR(255) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  tipo_habitacion VARCHAR(255) NOT NULL
);

git clone <URL_DEL_REPOSITORIO_FRONTEND>
cd reservas-frontend

npm install

npm start

{
  "nombre_cliente": "Juan Pérez",
  "fecha_inicio": "2024-11-20",
  "fecha_fin": "2024-11-25",
  "tipo_habitacion": "Sencilla"
}

{
  "id": 1,
  "nombre_cliente": "Juan Pérez",
  "fecha_inicio": "2024-11-20",
  "fecha_fin": "2024-11-25",
  "tipo_habitacion": "Sencilla"
}

[
  {
    "id": 1,
    "nombre_cliente": "Juan Pérez",
    "fecha_inicio": "2024-11-20",
    "fecha_fin": "2024-11-25",
    "tipo_habitacion": "Sencilla"
  },
  {
    "id": 2,
    "nombre_cliente": "Ana García",
    "fecha_inicio": "2024-11-21",
    "fecha_fin": "2024-11-23",
    "tipo_habitacion": "Doble"
  }
]
[
  {
    "id": 1,
    "nombre_cliente": "Juan Pérez",
    "fecha_inicio": "2024-11-20",
    "fecha_fin": "2024-11-25",
    "tipo_habitacion": "Sencilla"
  },
  {
    "id": 2,
    "nombre_cliente": "Ana García",
    "fecha_inicio": "2024-11-21",
    "fecha_fin": "2024-11-23",
    "tipo_habitacion": "Doble"
  }
]
[
  {
    "id": 1,
    "nombre_cliente": "Juan Pérez",
    "fecha_inicio": "2024-11-20",
    "fecha_fin": "2024-11-25",
    "tipo_habitacion": "Sencilla"
  },
  {
    "id": 2,
    "nombre_cliente": "Ana García",
    "fecha_inicio": "2024-11-21",
    "fecha_fin": "2024-11-23",
    "tipo_habitacion": "Doble"
  }
]
{
  "fecha_inicio": "2024-11-22",
  "fecha_fin": "2024-11-26"
}

{
  "id": 1,
  "nombre_cliente": "Juan Pérez",
  "fecha_inicio": "2024-11-22",
  "fecha_fin": "2024-11-26",
  "tipo_habitacion": "Sencilla"
}


---

### Explicación de cada sección del `README.md`:

- **Descripción**: Proporciona un resumen del proyecto, las tecnologías utilizadas y las funcionalidades principales.
- **Requisitos**: Enumera las dependencias necesarias para ejecutar el proyecto (backend y frontend).
- **Estructura del Proyecto**: Muestra cómo está organizado el proyecto en carpetas.
- **Instalación**: Proporciona los pasos para instalar y ejecutar el backend y el frontend en tu entorno local.
- **API Endpoints**: Detalla cómo interactuar con la API (crear, obtener, actualizar y eliminar reservas).
- **Notas**: Instrucciones adicionales sobre la configuración de la base de datos y otros detalles importantes.
- **Licencia**: Sección opcional que menciona la licencia bajo la que se distribuye el proyecto.

Este `README.md` sirve como una guía completa para que cualquier desarrollador o usuario que quiera interactuar con el proyecto sepa cómo configurarlo, instalarlo y usarlo.
