# [cite_start]Proyecto de Red: Carnicería & Minimarket Internacional [cite: 2, 12]

## Descripción del Proyecto
[cite_start]Este repositorio contiene el diseño y la implementación de la red local para la "Carnicería & Minimarket Internacional", desarrollado como parte de un proyecto intermodular[cite: 8, 12]. [cite_start]Simula un escenario laboral real para un minimarket de alta gama especializado en productos cárnicos frescos y de importación[cite: 9, 13].

[cite_start]El objetivo principal de la infraestructura es ofrecer una red escalable y robusta, capaz de garantizar un **99.9% de disponibilidad**[cite: 9, 14]. [cite_start]Este requisito es crítico para el negocio, ya que asegura el mantenimiento de la cadena de frío y el cobro ininterrumpido en los puntos de venta[cite: 14].

## Características Principales
[cite_start]La arquitectura de red se ha diseñado bajo estándares de Administración de Sistemas, enfocándose en la resiliencia y la seguridad[cite: 21, 27]:
* [cite_start]**Alta Disponibilidad:** Implementación de redundancia en la puerta de enlace mediante el protocolo HSRP, evitando puntos únicos de fallo[cite: 22].
* [cite_start]**Segmentación Avanzada (VLANs):** Aislamiento lógico estricto del tráfico para los departamentos de Administración, Ventas, Producción, Sistemas, Gestión y una zona desmilitarizada (DMZ)[cite: 25, 78].
* [cite_start]**Direccionamiento Optimizado (VLSM):** Uso de Máscaras de Subred de Longitud Variable sobre el direccionamiento `172.16.0.0/16` para optimizar las IPs según la densidad de cada departamento y limitar los dominios de broadcast[cite: 75, 77].
* [cite_start]**Agregación de Enlaces:** Uso de EtherChannel entre el switch multicapa y el de acceso para sumar ancho de banda y proporcionar redundancia en el cableado físico[cite: 51, 61].
* [cite_start]**Calidad de Servicio (QoS):** Priorización de red para los datáfonos y las balanzas IP, evitando cualquier latencia en el proceso de venta[cite: 50].

## Hardware y Tecnologías Empleadas
[cite_start]El proyecto ha sido diseñado y validado utilizando el simulador **Cisco Packet Tracer**, seleccionando equipos del ecosistema Cisco como estándar de enseñanza[cite: 31].
* [cite_start]**Routers (2x Cisco 2911):** Configurados en clúster HSRP para el enrutamiento perimetral redundante[cite: 36].
* [cite_start]**Switch Multicapa Core (1x Cisco 3560):** Encargado de centralizar las conexiones de servidores y gestionar el enrutamiento de alta velocidad (Inter-VLAN Routing)[cite: 37, 59, 60].
* [cite_start]**Switch de Acceso (1x Cisco 2960):** Punto de conexión física de los dispositivos finales, encargado del etiquetado del tráfico VLAN[cite: 39, 64, 65].
* **Servicios Centralizados:**
  * [cite_start]**Servidor Web/DNS** aislado en la DMZ para la web pública (`www.carniceria-internacional.com`)[cite: 49, 69].
  * [cite_start]**Servidor de Gestión** encargado de la asignación dinámica de direcciones (DHCP) y de almacenar copias de seguridad vía FTP[cite: 67].
* [cite_start]**Seguridad y Mantenimiento:** Administración remota cifrada exclusivamente mediante SSH v2, estrategia de Backup 3-2-1 y protección eléctrica con sistemas SAI[cite: 89, 96, 102].

## Implementación y Uso
[cite_start]El documento detalla los comandos exactos empleados en la configuración de la topología[cite: 134]. Algunas de las configuraciones clave incluyen:
1. [cite_start]**VLANs y Accesos:** Creación de las VLAN y asignación de puertos en modo acceso y troncal[cite: 137, 149].
2. [cite_start]**EtherChannel:** Agrupación de puertos mediante el protocolo LACP (`channel-group 1 mode active`)[cite: 168, 172].
3. [cite_start]**SVIs e IP Helper:** Configuración de las Interfaces Virtuales de Switch en el equipo Core para actuar como puerta de enlace de cada subred, y redirección de peticiones DHCP hacia el servidor central mediante el comando `ip helper-address`[cite: 358, 385, 388].
4. [cite_start]**HSRP:** Configuración de las prioridades y la IP virtual compartida en los Routers para establecer el rol de Maestro y Reserva[cite: 563, 572, 574, 577, 587].

## Escalabilidad y Mejoras Futuras
[cite_start]El modelo actual de la red está preparado para soportar el crecimiento de la empresa sin cambiar la arquitectura base, contemplando a corto plazo[cite: 109]:
* [cite_start]**Telefonía VoIP:** Despliegue de teléfonos IP utilizando el cableado existente mediante una VLAN de voz[cite: 110].
* [cite_start]**Monitorización IoT:** Instalación de sensores de temperatura y humedad conectados por Wi-Fi en las cámaras frigoríficas con alertas automáticas[cite: 111, 112].
* [cite_start]**Acceso VPN:** Implementación de un túnel seguro para que la gerencia pueda consultar la contabilidad en remoto[cite: 113].

---
* **Autores:** Roy Sánchez Prato | [cite_start]Isaac García [cite: 11]
* [cite_start]**Módulo:** Administración de redes [cite: 11]
* [cite_start]**Centro/Curso:** 1°ASIR Caja Mágica [cite: 11]
* [cite_start]**Fecha:** 15/05/2026 [cite: 11]