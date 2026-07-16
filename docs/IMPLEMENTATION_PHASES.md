# Implementation Phases

## Fase 0 - Sitio estatico

Complejidad: baja.

- Crear frontend publico.
- Usar logo y linea visual.
- Publicar en GitHub Pages.
- Documentar arquitectura futura.

## Fase 1 - MVP dinamico

Complejidad: media.

- Migrar a Next.js App Router.
- Configurar Payload CMS.
- Configurar PostgreSQL.
- Modelar rutas, eventos, galerias, productos, posts sociales y legales.
- Implementar panel administrativo.
- Implementar storage S3/R2.
- Implementar SEO completo.

## Fase 2 - Membresia

Complejidad: alta.

- Registro, login y recuperacion.
- Verificacion de correo.
- Plan `Miembro Alfa`.
- Suscripcion mensual o anual.
- Area privada.
- Registro a eventos, cupos y lista de espera.
- Recursos privados.
- Webhooks idempotentes.

## Fase 3 - Ecommerce

Complejidad: alta.

- Carrito.
- Ordenes.
- Variantes.
- Stock.
- Cupones.
- Envios.
- Pagos.
- Cambios y devoluciones.

## Pruebas recomendadas

- Unitarias para helpers de dominio.
- Integracion para permisos, pagos y webhooks.
- E2E para flujos publicos, login, membresia y compras.
- Accesibilidad automatizada.
- Lighthouse/Core Web Vitals.

## CI/CD

- Lint.
- Typecheck.
- Build.
- Tests.
- Deploy a staging.
- Deploy a produccion con aprobacion.
