# Pages and Routes

## Implementado en version estatica

- `/`
- `/rutas`
- `/merchandising`
- `/comunidad`
- `/clinicas`
- `/#galerias`
- `/contacto`

## Separacion de contenido

- El landing comunica identidad, accesos principales, rutas, merch y galeria institucional.
- Comunidad, clinicas y contacto viven en paginas separadas.
- La informacion mensual de ruta vive en `/rutas`.
- La ruta activa se muestra en `/rutas` y debe pasar al historico cuando se publique la siguiente.
- El catalogo de merchandising vive en `/merchandising`.

## Rutas recomendadas para fase dinamica

- `/`
- `/nosotros`
- `/mision-vision-valores`
- `/rutas`
- `/rutas/[slug]`
- `/eventos/[slug]`
- `/historial`
- `/clinicas`
- `/clinicas/[slug]`
- `/galerias`
- `/galerias/[slug]`
- `/merchandising`
- `/aliados`
- `/contacto`
- `/legal/privacidad`
- `/legal/terminos`
- `/legal/cancelaciones`
- `/libro-de-reclamaciones`
- `/login`
- `/registro`
- `/recuperar-password`
- `/miembro`
- `/miembro/eventos`
- `/miembro/recursos`
- `/miembro/suscripcion`
- `/admin`

## Rutas API futuras

- `/api/payments/culqi/webhook`
- `/api/instagram/sync`
- `/api/private-resource/[id]`
- `/api/contact`
- `/api/book-claim`

Estas rutas requieren servidor y no deben alojarse en GitHub Pages.
