# Proyecto Intermodular: Base de Datos - Carnicería Internacional

## Descripción del Proyecto
Este repositorio contiene el diseño, implementación y explotación de una base de datos relacional creada para gestionar la operativa integral de la **Carnicería Internacional**. 

El sistema ha sido diseñado desde cero para soportar el flujo de trabajo de un entorno empresarial real, abarcando la gestión de recursos humanos (empleados y departamentos), control de inventario (catálogo y categorías), logística de abastecimiento (proveedores y suministros) y la operativa comercial diaria (clientes, ventas y facturación).

## Arquitectura de la Base de Datos
El modelo relacional ha sido normalizado para evitar redundancia de datos y garantizar la integridad referencial. Consta de **10 tablas** estructuradas de la siguiente manera:

* **Tablas Maestras:** `CATEGORIAS`, `DEPARTAMENTOS`, `PROVEEDORES`, `CLIENTES`.
* **Tablas Transaccionales (1:N):** `PRODUCTOS`, `EMPLEADOS`, `SUMINISTROS`, `VENTAS`.
* **Tablas Intermedias (N:M):** `CATALOGO_PROVEEDORES` (resolución de precios de coste), `DETALLE_VENTA` (líneas de ticket/factura).

## Contenido del Proyecto
El proyecto se divide en los siguientes entregables:

1. **Análisis y Diccionario de Datos:** Justificación de la información almacenada y definición de atributos.
2. **Modelos de Diseño:**
   * Diagrama Entidad-Relación (Conceptual).
   * Modelo Relacional (Físico, con definición de PKs y FKs).
3. **Scripts SQL (`/scripts/`):**
   * `01_DDL_Creacion.sql`: Creación de la base de datos, tablas, tipos de datos (`DECIMAL`, `TIMESTAMP`) y restricciones.
   * `02_DML_Insercion.sql`: Inserción masiva de más de 150 registros realistas para pruebas de estrés.
4. **Explotación de Datos (`/consultas/`):**
   * Batería de 10 consultas SQL escalonadas (desde filtros operativos básicos hasta análisis financiero con `JOIN` múltiples y funciones de agregación).
5. **Administración Básica:** Documentación sobre rutinas de exportación de datos mediante la consola y utilidades de pgAdmin.

## Instalación y Despliegue

Para replicar este entorno en tu máquina local, sigue estos pasos:

1. Asegúrate de tener instalado **PostgreSQL** y un gestor como **pgAdmin 4** o **DBeaver**.
2. Abre tu gestor y ejecuta el siguiente comando para crear el entorno:
   ```sql
   CREATE DATABASE Carniceria_Internacional;

**Autor:** [Roy Sánchez Prato - https://github.com/Roysanchezprato]  
**Módulo:** Gestión de Bases de Datos  
**Proyecto Intermodular:** Carnes - Internacionales