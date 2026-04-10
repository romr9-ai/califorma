# Califorma

Landing onepage corporativa para **Califorma**, empresa de maquinado CNC en Mexicali.  
El sitio está construido con **Astro** y **Tailwind CSS**, con enfoque en rendimiento, claridad comercial y captación de cotizaciones B2B.

## Objetivo

Este proyecto sirve como base de presencia web para Califorma, con una estructura onepage orientada a:

- presentar servicios de maquinado CNC y capacidades técnicas
- comunicar una imagen industrial, sobria y profesional
- mostrar maquinaria y proyectos reales
- facilitar el contacto para solicitud de cotizaciones

## Stack

- Astro
- Tailwind CSS

## Características

- Arquitectura simple basada en componentes `.astro`
- Diseño responsive
- Navegación onepage con scroll suave
- Secciones separadas para servicios, empresa, maquinaria, proyectos y contacto
- Multimedia local servida desde `public/assets`
- Sin frameworks adicionales ni dependencias extra de UI

## Estructura del proyecto

```text
/
├─ public/
│  └─ assets/
│     ├─ hero/
│     ├─ maquinaria/
│     └─ proyectos/
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ Hero.astro
│  │  ├─ Services.astro
│  │  ├─ About.astro
│  │  ├─ Machinery.astro
│  │  ├─ Projects.astro
│  │  ├─ Contact.astro
│  │  └─ Footer.astro
│  ├─ layouts/
│  │  └─ MainLayout.astro
│  ├─ pages/
│  │  └─ index.astro
│  └─ styles/
│     └─ global.css
├─ astro.config.mjs
├─ package.json
└─ README.md
```

## Desarrollo local

Instala dependencias:

```sh
npm install
```

Inicia el entorno de desarrollo:

```sh
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4321
```

## Build de producción

Genera la versión estática:

```sh
npm run build
```

Previsualiza el build localmente:

```sh
npm run preview
```

## Convenciones del proyecto

- Los componentes están separados por sección para facilitar edición rápida.
- Los assets visuales deben guardarse en `public/assets/...`.
- El contenido principal está en español y orientado a clientes industriales.
- El diseño se mantiene intencionalmente limpio, técnico y fácil de extender.

## Estado actual

Actualmente la landing incluye:

- header con navegación responsive y menú móvil
- hero principal con CTA
- catálogo de servicios
- sección institucional
- maquinaria con fichas técnicas
- proyectos con imágenes/video locales
- formulario de contacto

## Repositorio

Repositorio público:

```text
https://github.com/romr9-ai/califorma
```
