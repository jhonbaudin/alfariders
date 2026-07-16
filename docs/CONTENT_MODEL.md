# Content Model

## Entidades principales

### Admin

Usuario administrativo del CMS. No debe compartir permisos con miembros del sitio.

### Member

Usuario registrado o miembro pagado del sitio publico.

### Route

Recorrido reutilizable. Define informacion tecnica base como nombre, slug, terreno, altitud, dificultad, kilometraje, requisitos y equipamiento.

### Event

Ejecucion de una ruta en una fecha especifica. Define cupos, precio, guia, cierre, hora, punto general, punto privado, briefing, GPX, galeria y estado de publicacion.

### EventRegistration

Registro de un usuario a un evento. Debe contemplar estado, cupo, lista de espera y auditoria.

### Gallery

Agrupacion de imagenes y videos asociados a rutas, eventos o contenido institucional.

### Media

Archivo subido al CMS. Debe validar tipo, tamano, visibilidad y uso publico o privado.

### Product

Producto de merchandising. En MVP funciona como catalogo sin carrito.

### ProductCategory

Categoria para ordenar productos.

### MembershipPlan

Plan comercial. El primero propuesto es `Miembro Alfa`, pendiente de precio y beneficios definitivos.

### Subscription

Estado interno de membresia. No debe depender exclusivamente del estado del proveedor de pagos.

### PaymentTransaction

Evento o transaccion de pago con idempotencia, proveedor, estado y payload auditado.

### PrivateResource

Recurso privado como GPX, briefing, checklist o punto exacto.

### Partner

Aliado o patrocinador. No inventar registros hasta confirmacion comercial.

### SocialPost

Post seleccionado manualmente para MVP. Campos: imagen, descripcion, URL, orden y estado publicado.

### Page

Pagina administrable para contenido institucional.

### SiteSettings

Configuracion global: logo, redes, WhatsApp, SEO, datos legales y mensajes.

### LegalDocument

Politicas, terminos, privacidad, cancelaciones y Libro de Reclamaciones.

## Relacion clave

- `Route` tiene muchos `Event`.
- `Event` puede tener muchas `EventRegistration`.
- `Event` puede exponer `PrivateResource` solo a miembros autorizados.
- `Gallery` puede pertenecer a `Route`, `Event` o `Page`.
- `Product` pertenece a `ProductCategory`.
- `Member` puede tener una `Subscription`.
- `Subscription` se alimenta de `PaymentTransaction`.
