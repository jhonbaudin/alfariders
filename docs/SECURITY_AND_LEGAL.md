# Security and Legal

## Seguridad

- Secretos solo server-side.
- No exponer llaves de Culqi, Instagram o storage en frontend.
- Rate limiting en formularios, login y webhooks.
- Validacion de archivos por tipo, tamano y visibilidad.
- URLs privadas no predecibles.
- GPX, briefing y punto exacto solo para miembros autorizados.
- Logs estructurados para acciones administrativas y pagos.
- Auditoria para cambios de estado de suscripcion y eventos.

## Roles

- Super administrador.
- Administrador.
- Editor.
- Organizador de rutas.
- Miembro.
- Usuario registrado.
- Visitante.

Los usuarios administrativos y miembros deben tener modelos y permisos separados.

## Pagos

- No almacenar datos de tarjetas.
- Usar tokenizacion del proveedor.
- Webhooks idempotentes.
- Separar estado interno del estado del proveedor.
- Registrar reintentos, fallos, cancelaciones y renovaciones.

## Legal Peru

Pendiente revision legal final, pero el proyecto debe contemplar:

- Politica de privacidad.
- Tratamiento de datos personales.
- Derechos ARCO.
- Terminos y condiciones.
- Politica de cancelacion de membresia.
- Libro de Reclamaciones.
- Consentimiento informado para actividades de motoaventura.

## Libro de Reclamaciones

Debe existir una ruta publica clara. En fase dinamica debe guardar reclamos en base de datos, enviar constancia y permitir seguimiento interno.
