# Proyecto de Implantación de Sistemas Operativos: Carnicería Internacional

## 1. Descripción y Contexto del Proyecto
El presente proyecto documenta el diseño, despliegue y aseguramiento de la infraestructura informática para "Carnicería Internacional", una empresa de distribución cárnica a gran escala[cite: 3]. Ante la necesidad de modernizar el negocio, esta implementación establece un entorno de red robusto que garantiza la integridad de los datos, la agilidad en los puntos de venta y una presencia web profesional[cite: 3]. 

El objetivo principal es centralizar la gestión de usuarios, asegurar el almacenamiento de información crítica (contabilidad, recetas, fichas de producción) y establecer una red escalable[cite: 3].

## 2. Objetivos Técnicos Fundamentales
La arquitectura se ha diseñado bajo los pilares de alta disponibilidad, seguridad y eficiencia:
* **Centralización de la Identidad:** Despliegue de un Directorio Activo (AD DS) para una gestión de accesos jerárquica y segura[cite: 3].
* **Gestión Automatizada de Red:** Implementación de servicios DNS y DHCP segmentados por VLAN para simplificar la integración de dispositivos[cite: 3].
* **Interoperabilidad Multiplataforma:** Integración sinérgica de un entorno Windows Server 2022 para infraestructura interna y Ubuntu Server 24.04 LTS para servicios web (Apache2)[cite: 3].
* **Seguridad Lógica Perimetral:** Aplicación de permisos NTFS granulares, protocolo SMB restringido y Directivas de Grupo (GPO) basadas en el principio de privilegio mínimo[cite: 3].

## 3. Arquitectura de Hardware y Software Virtualizado
El despliegue se ha realizado mediante virtualización utilizando **Oracle VM VirtualBox**, estructurando los siguientes nodos[cite: 3]:

### Servidor de Infraestructura (Windows Server 2022)
* **Rol:** Núcleo lógico de la red, ubicado en la VLAN 50[cite: 3].
* **Recursos:** 4 GB de RAM, 2 CPUs, Disco de 100 GB particionado (Volumen C: para Sistema Operativo, Volumen D: dedicado a BACKUPS y datos de la empresa)[cite: 3].
* **Servicios Activos:** Active Directory Domain Services (AD DS), DHCP, DNS y File Server (SMB)[cite: 3].

### Servidor Web (Ubuntu Server 24.04 LTS)
* **Rol:** Alojamiento de la plataforma web interactiva corporativa ("De La Granja"), ubicado en la VLAN 40 (DMZ)[cite: 3].
* **Recursos:** 2 GB de RAM, Disco dinámico de 20 GB[cite: 3].
* **Servicios Activos:** Apache2, Netplan (IP Estática: 172.16.40.2), Port Forwarding (8080 local al 80 del servidor) y túnel de gestión SSH (puerto 2222)[cite: 3].

### Equipos Cliente (Windows 11 Pro)
* **Rol:** Puestos de trabajo de los distintos departamentos integrados al dominio[cite: 3].
* **Configuraciones Especiales:** Modo Kiosco para los terminales de Punto de Venta (TPV) para restringir el uso exclusivamente a aplicaciones de cobro y evitar errores operativos[cite: 3].

## 4. Estructuración Lógica del Directorio Activo (`carniceria.local`)
Se ha diseñado una topología de red reflejando la organización física de la empresa para facilitar la administración[cite: 3]:

* **Unidad Organizativa (OU) Raíz:** `Carniceria_Internacional`[cite: 3].
* **OUs Departamentales:** `Oficina` (con sub-unidades para Administración, Dirección, Marketing y RR.HH.), `Ventas` y `Produccion`[cite: 3].
* **Grupos de Seguridad Globales:** `G_Administracion`, `G_Cajeros`, `G_Operarios`, entre otros[cite: 3]. Las políticas de acceso a carpetas compartidas se aplican a estos grupos, no a usuarios individuales[cite: 3].

## 5. Configuración de Red y Almacenamiento

### Automatización DHCP (VLANs)
Se ha configurado el enrutamiento dinámico IPv4 reservando un pool específico para cada departamento[cite: 3]:
* **VLAN 10 (Oficina):** Rango `172.16.10.10` - `172.16.10.50` (Gateway: `172.16.10.1`)[cite: 3].
* **VLAN 20 (Ventas):** Rango `172.16.20.10` - `172.16.20.50` (Gateway: `172.16.20.1`)[cite: 3].
* **VLAN 30 (Producción):** Rango `172.16.30.10` - `172.16.30.50` (Gateway: `172.16.30.1`)[cite: 3].
* El DNS principal para todos los ámbitos es la IP del Servidor de Infraestructura (`172.16.50.2`)[cite: 3].

### Almacenamiento Centralizado y Permisos NTFS
Los datos se centralizan en la partición `D:` del servidor bajo el directorio `DATOS_EMPRESA`, que se mapea automáticamente en los clientes como la unidad de red `Z:`[cite: 3]. 
Se ha deshabilitado la herencia de permisos y aplicado acceso estricto:
* `Administracion_Privado`: Control total solo para `G_Administracion`[cite: 3].
* `Ventas_Compartido`: Permisos de lectura/ejecución para `G_Cajeros`[cite: 3].
* `Produccion_Fichas`: Acceso restringido para `G_Operarios`[cite: 3].

## 6. Políticas de Seguridad (Hardening) y Mantenimiento
* **Directivas de Contraseñas (GPO):** Modificación de la `Default Domain Policy` para exigir contraseñas con complejidad alfanumérica, longitud mínima de 8 caracteres y obligación de cambio en el primer inicio de sesión[cite: 3].
* **Aislamiento a Fallos:** La separación del SO y los datos en el servidor Windows previene que un colapso del sistema afecte los volúmenes de respaldo[cite: 3].
* **Gestión Remota:** Activación de Escritorio Remoto (RDP) con autenticación a nivel de red para la administración continua y segura del servidor central[cite: 3].

---
* **Autor:** Roy Sánchez Prato[cite: 3]
* **Profesor / Tutor:** Francisco Blanco[cite: 3]
* **Módulo:** Implantación de Sistemas Operativos[cite: 3]
* **Centro Educativo:** 1º ASIR Caja Mágica[cite: 3]
* **Fecha de Entrega:** 15/05/2026[cite: 3]