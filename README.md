# Colegio Alba · Landing page

Landing page de un colegio privado y bilingüe de Pozuelo de Alarcón, de 1 año a Bachillerato. Es una prueba de diseño web para Tomaleads. El colegio y todos sus datos son inventados.

## Estructura

```
index.html            Página (contenido, SEO y datos estructurados)
css/styles.css        Estilos: variables de diseño, componentes y responsive
js/main.js            Menú móvil, calculadora de curso, barra de reserva y validación del formulario
assets/logo.svg       Logotipo y favicon
assets/img/           Fotografías en WebP e imagen para redes (og-image.jpg)
robots.txt            Indicaciones para buscadores
sitemap.xml           Mapa del sitio con imágenes
docs/estudio-seo.md   Estudio SEO: palabras clave, competencia, cambios aplicados y KPIs
```

Es HTML, CSS y JavaScript sin dependencias ni compilación. Para verla, abre `index.html` en el navegador o sirve la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Secciones

1. **Portada:** propuesta de valor, botones de visita y fecha de la jornada de puertas abiertas.
2. **Cifras:** fundación, alumnos por aula, idiomas y tamaño del campus.
3. **Etapas:** Infantil, Primaria, ESO y Bachillerato.
4. **Calculadora de curso:** eliges el año de nacimiento y te dice en qué curso entraría en 2027–2028, en qué punto del recorrido escolar está y cuántos cursos le quedan. El botón final lleva al formulario con la etapa y un mensaje ya rellenados.
5. **Proyecto educativo:** los cuatro pilares del colegio.
6. **Servicios:** fotos del campus, comedor, horario ampliado, ruta escolar y extraescolares.
7. **Admisiones:** plazo y proceso en tres pasos.
8. **Preguntas frecuentes:** cinco dudas habituales, también marcadas como `FAQPage`.
9. **Contacto:** dirección, teléfono, horario de secretaría, plano dibujado a medida y formulario con validación.

En móvil aparece una barra fija con "Reservar visita" y un botón para llamar. Se esconde en la portada, en el contacto y en el pie.

## Sistema de diseño

| Token      | Valor     | Uso                          |
|------------|-----------|------------------------------|
| `--bg`     | `#F5F1E8` | Fondo general                |
| `--ink`    | `#1D2B27` | Texto principal y pie        |
| `--green`  | `#1F4D3F` | Color institucional          |
| `--accent` | `#B4492A` | Botones y llamadas a la acción |
| `--sun`    | `#E9B949` | Calculadora y acentos        |
| `--sky`    | `#9CC3D5` | Acentos                      |

Tipografías: **Fraunces** para títulos y **Hanken Grotesk** para el texto, de Google Fonts.

## SEO

El detalle está en [`docs/estudio-seo.md`](docs/estudio-seo.md). Resumen de lo aplicado:

- `title` y meta description con la palabra clave principal, y un solo H1.
- Datos estructurados `School`, `Event` (puertas abiertas), `FAQPage` y `WebSite`.
- Open Graph y Twitter Card, `canonical`, `robots.txt` y `sitemap.xml`.
- Imágenes WebP con medidas, carga diferida y la foto de la portada precargada.

## Accesibilidad

- Enlace "Saltar al contenido", foco visible y todo usable con teclado.
- Contraste AA en textos y botones, y zonas táctiles de 44 px o más.
- Formulario con `label` en cada campo y errores anunciados con `aria-live` y `aria-invalid`.
- La calculadora anuncia el curso resultante a los lectores de pantalla.
- Respeta `prefers-reduced-motion`.
