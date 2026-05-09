# Proyecto Intermodular: Carnicería Internacional
## Modernización de Infraestructura IT y Ecosistema Digital

### Resumen Ejecutivo

El presente repositorio contiene la documentación técnica, los diagramas de arquitectura y el código correspondientes al Proyecto Intermodular desarrollado para la empresa "Carnicería Internacional". 

El objetivo principal de este proyecto es la modernización integral de los sistemas informáticos de un negocio comercial tradicional. La propuesta aborda el reto desde dos frentes tecnológicos complementarios: por un lado, la migración de su infraestructura de red hacia una arquitectura de nube híbrida; y por otro, el desarrollo de su presencia digital mediante la estructuración de la información corporativa y la construcción de su interfaz web.

---

### Objetivos del Proyecto

1. **Despliegue de Infraestructura Híbrida (Sistemas y Cloud):** Garantizar la alta disponibilidad de los servicios críticos (bases de datos y web) externalizándolos a Amazon Web Services (AWS), manteniendo la operatividad local de los dispositivos físicos mediante un túnel VPN Site-to-Site.
2. **Estructuración e Intercambio de Datos (Lenguajes de Marcas):** Diseñar y estructurar la información del catálogo de productos utilizando formatos estandarizados (XML/JSON) para permitir la sincronización en tiempo real entre la base de datos en la nube y el hardware de la tienda (balanzas IP y sistemas de punto de venta).
3. **Desarrollo de Presencia Web:** Construir la interfaz digital de la empresa empleando estándares actuales (HTML5 y CSS3), garantizando accesibilidad, semántica web y un diseño adaptativo (Responsive Design).

---

### Arquitectura Técnica y Topología

La infraestructura técnica se divide en dos entornos interconectados:

* **Sede Central Física (On-Premise):**
  Red local estructurada y segmentada mediante VLANs (Administración, Ventas, Producción y Punto de Venta). La conectividad perimetral está gestionada por enrutadores Cisco en alta disponibilidad (HSRP).
  
* **Entorno Cloud (AWS VPC):**
  Red virtual privada que replica la seguridad lógica. Se compone de una Subred Pública (para el servidor Web/DNS) y una Subred Privada (para los servidores internos DHCP, la base de datos gestionada RDS y el repositorio de respaldos S3).

---

### Pila Tecnológica Implementada

**Redes y Cloud Computing:**
* Cisco IOS (Enrutamiento, HSRP, VLANs, IPsec).
* AWS Virtual Private Cloud (VPC) y Site-to-Site VPN.
* Amazon EC2, Amazon RDS (MySQL) y Amazon S3.

**Desarrollo Web y Gestión de Información:**
* **HTML5:** Estructuración semántica de la página web corporativa.
* **CSS3:** Presentación visual y diseño responsivo.
* **XML y JSON:** Formatos de serialización para el almacenamiento estructurado del catálogo de productos y el intercambio de datos entre la nube y el hardware local.

---

### Estructura del Repositorio

La documentación y el código se encuentran organizados en los siguientes directorios:

* `/docs/cloud/`: Documentación sobre la arquitectura híbrida, justificación de proveedor, estimación de costes mensuales y topología lógica.
* `/docs/redes/`: Archivos de configuración de los equipos Cisco (Packet Tracer) y esquemas de direccionamiento IP.
* `/src/web/`: Código fuente de la página web corporativa (HTML y CSS).
* `/src/data/`: Esquemas de datos y archivos de prueba del catálogo de productos (XML/JSON).

---

### Viabilidad Económica

El proyecto incluye un análisis financiero para la infraestructura en la nube. Utilizando la calculadora oficial de AWS (Región Europa-España), se estima un coste operativo estándar de 91,98 USD mensuales. Sin embargo, aplicando los beneficios de la Capa Gratuita (Free Tier) para el primer año de despliegue, el coste real se sitúa en torno a los 40,00 USD mensuales, demostrando la alta viabilidad económica de la propuesta frente al mantenimiento de hardware físico in situ.

---

### Conclusión

La modernización tecnológica de "Carnicería Internacional" demuestra la eficacia de combinar infraestructuras sólidas de red y cloud con una gestión de datos estructurada. La solución propuesta no solo asegura la integridad de las operaciones comerciales físicas mediante la nube híbrida, sino que también dota a la empresa de una base digital escalable y eficiente para su futura expansión comercial.

---
**Autor:** [Roy Sánchez Prato - https://github.com/Roysanchezprato]  
**Módulo:** Fundamentos de Nube 
**Proyecto Intermodular:** Carnes - Internacionales