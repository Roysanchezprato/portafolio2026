
# Proyecto Intermodular: Gestion de Catalogo XML
# Modulo: Lenguajes de Marcas

## 1. Descripcion del Proyecto y Datos
Este repositorio contiene la estructura de
datos XML desarrollada para la plataforma
web de la carniceria "De la Granja".
El negocio esta ubicado en San Cristobal,
Venezuela, y ofrece atencion personalizada[cite: 1, 2].

El archivo XML representa el catalogo
real de productos, organizado de la
siguiente manera:
- Combos familiares y promocionales[cite: 4, 5].
- Cortes de res y ofertas de pollo[cite: 2, 5].
- Menu de comida rapida[cite: 3].

Cada articulo incluye su descripcion,
categoria asignada, precio en dolares (USD)
y su disponibilidad de inventario actual.

## 2. Estructura del Repositorio
Los archivos entregados se organizan asi:

/proyecto_intermodular
|-- /xml
|   |-- catalogoGranja.xml
|   |-- catalogoGranja.xsd
|-- /docs
|   |-- evidencia_validacion_exitosa.png
|   |-- evidencia_validacion_error.png
|-- README.md

## 3. Metodologia de Validacion (XSD)
El documento XML esta estrictamente
validado por el esquema XSD adjunto.
Las reglas aplicadas para garantizar la
integridad de los datos incluyen:
- Restricciones de expresiones regulares
  para los identificadores (ej. CMB-001).
- Tipos de datos exactos (decimal, integer).
- Enumeraciones para el control de stock.

## 4. Integracion con el Sistema Web
El catalogo XML exportado se integra
completamente en la plataforma principal.
Los usuarios y administradores pueden
descargar este inventario estructurado a
traves de un boton en la interfaz web.

Esto permite la portabilidad de los datos
hacia sistemas B2B, software de facturacion
externa o sincronizacion de precios.

## 5. Instrucciones de Despliegue y Uso
Para comprobar el correcto funcionamiento:
1. Clonar o descargar este repositorio.
2. Abrir la carpeta en Visual Studio Code.
3. Instalar la extension "XML" de Red Hat.
4. Abrir el archivo catalogoGranja.xml.
5. El IDE validara automaticamente el codigo
   gracias al enlace interno con el XSD.
6. Se puede modificar un precio introduciendo
   letras para comprobar el sistema de alertas.

**Autor:** [Roy Sánchez Prato - https://github.com/Roysanchezprato]  
**Módulo:** Lenguaje de Marca   
**Proyecto Intermodular:** Carnes - Internacionales