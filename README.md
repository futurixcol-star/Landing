# Futurixcol — Landing Page

Sitio web institucional y de captación de leads para **Futurixcol**, empresa colombiana de asesoría financiera, crédito hipotecario, inversión inmobiliaria y planeación patrimonial.

---

## Estructura del proyecto

```
landing_page/
├── index.html                  # Página principal
├── nosotros.html               # Quiénes somos
├── servicios.html              # Catálogo de servicios
├── inmuebles.html              # Portafolio de inmuebles
├── contacto.html               # Página de contacto
├── blog.html                   # Blog / artículos
├── servicios/                  # Páginas detalle por servicio
│   ├── credito-hipotecario.html
│   ├── credito-vehiculo.html
│   ├── compra-cartera.html
│   ├── compraventa-inmuebles.html
│   ├── inversion-inmobiliaria.html
│   ├── leasing-habitacional.html
│   ├── planeacion-patrimonial.html
│   └── educacion-financiera.html
└── assets/
    ├── css/
    │   └── styles.css          # Hoja de estilos principal
    ├── js/
    │   └── main.js             # Lógica de interacción (vanilla JS)
    ├── logo-futurixcol.png
    └── logo-futurixcol.svg
```

---

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura y accesibilidad (ARIA) |
| CSS3 custom properties | Sistema de diseño (colores, tipografía, espaciado) |
| CSS Grid + Flexbox | Layout responsivo |
| Vanilla JavaScript (ES6+) | Acordeón FAQ, menú móvil, scroll reveal, formulario |
| IntersectionObserver API | Animaciones de entrada al hacer scroll |
| Google Fonts | Cormorant Garamond (títulos) + DM Sans (cuerpo) |
| Google Forms (iframe) | Formulario de registro embebido |

---

## Sistema de diseño

### Paleta de colores

| Variable CSS | Valor | Uso |
|---|---|---|
| `--navy-deep` | `#03060E` | Fondo principal |
| `--navy-mid` | `#060D1A` | Tarjetas y secciones alternas |
| `--navy-card` | `#0B1628` | Fondos de cards |
| `--emerald` | `#0D9E6E` | Acento primario (botones, highlights) |
| `--emerald-lt` | `#10C984` | Acento primario claro |
| `--gold` | `#C9A84C` | Acento secundario |
| `--gold-lt` | `#E6C97A` | Acento secundario claro |
| `--text-primary` | `#EEF0F4` | Texto principal |
| `--text-muted` | `#8B9BB4` | Texto secundario |

### Tipografía

- **Títulos:** Cormorant Garamond (serif), pesos 400 / 600
- **Cuerpo y UI:** DM Sans (sans-serif), pesos 300 / 400 / 500

---

## Características principales

- **Diseño dark** con efecto glassmorphism en la barra de navegación
- **Orbes animados** en el hero con `@keyframes orbFloat`
- **Texto con gradiente** esmeralda → dorado para palabras clave
- **Scroll reveal** con `IntersectionObserver` — elementos entran con fade + slide
- **FAQ accordion** accesible con teclado
- **Menú móvil** que se cierra automáticamente al navegar a una sección
- **Dropdown de servicios** en navegación de escritorio
- **Sección de registro** con Google Form embebido (`#registro`)
- Completamente **responsivo** con breakpoints en 1024px, 860px y 600px

---

## Uso local

No requiere build, servidor de Node ni dependencias. Abre directamente en el navegador:

```bash
# Opción 1 — abrir el archivo directamente
start index.html

# Opción 2 — servidor local con Python (recomendado para iframes)
python -m http.server 8080
# luego visita http://localhost:8080
```

> El Google Form embebido en `#registro` puede mostrar "Refused to display" si se abre como `file://`. Usar un servidor local (opción 2) lo resuelve.

---

## Formulario de registro

El formulario de la sección **#registro** está embebido desde Google Forms:

```
https://docs.google.com/forms/d/e/1FAIpQLScbgBozn7oQSY19_V-fN3M69TrVtZi6xArNLtVC4bTdoLM77Q/viewform?embedded=true&hl=es
```

Las respuestas se reciben directamente en la cuenta de Google asociada al formulario.

---

## Despliegue

El sitio es 100% estático. Compatible con cualquier servicio de hosting:

- **GitHub Pages** — `Settings > Pages > Deploy from branch`
- **Netlify** — arrastrar la carpeta del proyecto al dashboard
- **Vercel** — `vercel deploy`
- **Hosting compartido** — subir archivos vía FTP

---

## Licencia

© 2025 Futurixcol. Todos los derechos reservados.
