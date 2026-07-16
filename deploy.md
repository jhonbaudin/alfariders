# Deploy en GitHub Pages

Este proyecto genera archivos estaticos en `dist` y puede publicarse con `gh-pages`.

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

## Configuracion de GitHub

1. En GitHub, abrir `Settings > Pages`.
2. Seleccionar deploy desde la rama `gh-pages`.
3. Guardar la configuracion.

## Notas tecnicas

- `vite.config.ts` usa `base: './'` para que los assets funcionen en GitHub Pages aunque el sitio viva bajo `/nombre-del-repo/`.
- GitHub Pages no ejecuta backend. Las funciones de CMS, membresia, pagos, webhooks y contenido privado requieren otra plataforma para la fase dinamica.
