# Carnes - Internacionales: Proyecto Intermodular de Infraestructura de Hardware

¡Bienvenido al repositorio del proyecto de Fundamentos de Hardware! 

Este proyecto detalla el análisis, diseño, configuración y presupuestación de la infraestructura tecnológica de la Sede Central de Carnes - Internacionales, una empresa líder en el sector cárnico que apuesta por la alta disponibilidad, la seguridad de los datos y un rendimiento extremo a largo plazo.

---

## 1. Introducción y Objetivos de Aprendizaje

El objetivo principal de este proyecto no es simplemente listar componentes informáticos, sino realizar un ejercicio real de ingeniería de hardware. He diseñado un ecosistema físico donde la gestión administrativa, el punto de venta y la producción (carnicería) están perfectamente interconectados.

**Mis aprendizajes clave durante este diseño han sido:**
* **Analizar necesidades reales:** Identificar el hardware óptimo para entornos muy diferentes bajo un mismo techo (oficina climatizada vs. zona industrial con humedad).
* **Diseñar para la longevidad (Inversión vs. Gasto):** Configurar equipos de vanguardia para garantizar una vida útil operativa de hasta 10 años sin caer en la obsolescencia.
* **Asegurar la continuidad del negocio:** Entender y aplicar sistemas de redundancia física en almacenamiento (RAID), redes (HSRP) y energía (SAI) para que la empresa nunca se detenga.

---

## 2. Estructura y Perfiles de Hardware

La Sede Central cuenta con un despliegue de hardware especializado, dividido en los siguientes perfiles de uso:

### Dirección (1 Equipo Ultra-High End)
Diseñado para la máxima potencia y una longevidad de 10 años.
* **Procesador:** Intel Core Ultra 9 (24 núcleos).
* **Memoria RAM:** 32 GB DDR5 6000 MHz.
* **Tarjeta Gráfica:** NVIDIA RTX 4070 Super (12 GB VRAM).
* **Almacenamiento:** 1 TB SSD NVMe PCIe Gen4.

### Administración (3 Equipos Estándar)
Equilibrio perfecto para ofimática avanzada y gestión empresarial.
* **Procesador:** Intel Core i5-13400.
* **Memoria RAM:** 16 GB DDR4 3200 MHz.
* **Almacenamiento:** 500 GB SSD NVMe.

### Punto de Venta / Cajas (2 Equipos)
Fiabilidad para facturación continua de cara al público.
* **Formato:** SFF (Small Form Factor) con procesador Intel i5 serie "T" (Bajo consumo).
* **Periféricos:** Pantalla táctil protección IP54, Impresora de Tickets y Datáfonos IP.

### Producción / Carnicería (1 Equipo)
Máxima resistencia para entornos industriales.
* **Formato:** PC Industrial Fanless (Sin ventiladores, chasis estanco de aluminio).
* **Periféricos:** Integración directa con 2 Balanzas IP para precisión en el pesaje.

---

## 3. Infraestructura de Servidores, Redes y Seguridad

El núcleo de datos y comunicaciones que mantiene viva a la empresa:

* **Almacenamiento Físico (RAID):** 
  * **Servidor DMZ (Web/DNS):** Xeon E-2336 con discos SSD en RAID 1 (Espejo).
  * **Servidor LAN (Backup/DHCP):** Xeon Gold 5415+ con discos duros empresariales SAS en RAID 5 (Alta capacidad y tolerancia a fallos mecánicos).
* **Networking de Alta Disponibilidad:** 
  * 2x Routers Cisco 2911 configurados en HSRP para redundancia de conexión a Internet.
  * Switch Multicapa Cisco Catalyst 3560 para routing Inter-VLAN.
  * Cableado Ethernet Categoría 6 para garantizar velocidades Gigabit.
* **Protección Eléctrica:** Implementación de 3 SAIs (1x 1500VA para Racks, 2x 700VA para Cajas) para proteger contra picos de tensión y cortes eléctricos.

---

## 4. Presupuesto Estimado

Se ha realizado un estudio de mercado (proveedores como PcComponentes Empresas, Amazon Business y mercado de reacondicionamiento para equipos Cisco) para calcular el coste de implantación.

| Categoría de Hardware | Coste Estimado (Sin IVA) |
| :--- | :--- |
| **Estaciones de Trabajo y PCs** (7 equipos) | 6.710,00 € |
| **Servidores Rack** (2 unidades) | 5.050,00 € |
| **Infraestructura de Red** (Cisco Refurbished + Cat 6) | 1.800,00 € |
| **Periféricos, IoT y SAIs** (Balanzas, TPVs, Impresoras) | 3.260,00 € |
| **SUBTOTAL** | **16.820,00 €** |
| IVA (21%) | 3.532,20 € |
| **TOTAL INVERSIÓN** | **20.352,20 €** |

---

## 5. Conclusiones

Este proyecto me ha permitido cambiar mi perspectiva de usuario a la de un Administrador de Sistemas. He comprendido que el hardware no es un gasto, sino el mayor activo de una empresa. La correcta elección del equipo según su entorno (como el PC Fanless en producción) y la implementación a nivel físico de la gestión de datos (RAID) y la red (HSRP) es la verdadera diferencia entre un negocio vulnerable y una empresa preparada para liderar el futuro.

---

## 6. Estructura del Repositorio

* `Documentacion_Hardware.pdf` - Documento completo con el análisis y justificaciones técnicas.
* `/Presupuesto` - Desglose detallado en Excel del coste de los componentes.
* `/Diagramas` - Esquemas de la topología de red y distribución de equipos.

---
**Autor:** [Roy Sánchez Prato - https://github.com/Roysanchezprato]  
**Módulo:** Fundamentos de Hardware 
**Proyecto Intermodular:** Carnes - Internacionales