# Architecture

## Estado actual

La entrega actual usa Vite, React y TypeScript como sitio estatico. Esta decision responde al requisito de publicar con GitHub Pages usando `gh-pages -d dist`.

## Restriccion de GitHub Pages

GitHub Pages no ejecuta servidor, base de datos, CMS, cron jobs, webhooks ni procesos privados. Por eso no puede alojar por si solo:

- Payload CMS.
- PostgreSQL.
- Autenticacion server-side.
- Webhooks de Culqi.
- Integracion segura con Instagram API.
- Area privada real de miembros.
- Descargas protegidas de GPX o briefing.

## Arquitectura recomendada para fase dinamica

```text
Usuario
  -> Next.js App Router
      -> Sitio publico
      -> Area privada de miembros
      -> Payload Admin
      -> Route handlers server-side
          -> Culqi
          -> Instagram API
          -> Email provider
      -> Payload Local API
          -> PostgreSQL
          -> S3/R2
          -> Logs y auditoria
```

## Modulos

- Public Site: paginas publicas, SEO, galerias y rutas.
- Admin CMS: gestion de rutas, eventos, productos, galerias, legales y settings.
- Members Area: login, suscripcion, recursos privados y registro a eventos.
- Integrations: Culqi, Instagram API, email, WhatsApp links.
- Storage: imagenes, flyers, GPX y documentos privados.
- Observability: logs estructurados, errores y auditoria.

## Criterio contra microservicios

No se recomienda microservicios en MVP. El dominio todavia no justifica costo operativo adicional, sincronizacion distribuida ni multiples despliegues.
