# Deploy en GitHub Pages

Este proyecto genera archivos estaticos en `dist` y puede publicarse en GitHub Pages de dos formas.

## Deploy automatico con GitHub Actions

El workflow esta en:

```bash
.github/workflows/deploy.yml
```

Se ejecuta automaticamente con cada push a `main` y tambien manualmente desde la pestaña `Actions` usando `workflow_dispatch`.

### Configuracion de GitHub Pages

1. En GitHub, abrir `Settings > Pages`.
2. En `Build and deployment`, seleccionar `GitHub Actions`.
3. Guardar la configuracion.

El workflow:

1. Instala dependencias con `npm ci`.
2. Ejecuta `npm run build`.
3. Genera `dist/404.html` desde `dist/index.html` para soportar rutas como `/rutas` y `/merchandising`.
4. Sube `dist` como artifact de Pages.
5. Publica el sitio con `actions/deploy-pages`.

## Deploy manual con gh-pages

## Requisitos

- Repositorio Git inicializado.
- Repositorio remoto en GitHub configurado como `origin`.
- Dependencias instaladas con `npm install`.

## Comandos

```bash
npm run build
npx gh-pages -d dist
```

Tambien se puede usar el script incluido:

```bash
npm run deploy
```

`npm run deploy` ejecuta primero `npm run build` mediante `predeploy` y luego publica `dist` con:

```bash
gh-pages -d dist
```

Para esta modalidad, en `Settings > Pages` se debe seleccionar deploy desde la rama `gh-pages`.

## Notas tecnicas

- `vite.config.ts` usa `base: '/alfariders/'` para que assets y rutas internas funcionen bajo `https://jhonbaudin.github.io/alfariders/`.
- Los links internos se generan con `import.meta.env.BASE_URL`, por eso `/rutas` se publica como `/alfariders/rutas`.
- `postbuild` copia `dist/index.html` a `dist/404.html` para mantener las rutas internas del sitio estatico.
- GitHub Pages no ejecuta backend. Las funciones de CMS, membresia, pagos, webhooks y contenido privado requieren otra plataforma para la fase dinamica.
