# Colegio Alba · Landing page

Landing page de un colegio (Infantil, Primaria, ESO y Bachillerato), hecha como prueba de diseño web para Tomaleads.

## Estructura

```
index.html        Marcado de la página
css/styles.css    Estilos (variables de diseño, layout y responsive)
js/main.js        Menú móvil, animaciones de entrada y validación del formulario
assets/logo.svg   Logotipo / favicon
```

Es HTML, CSS y JavaScript sin dependencias ni paso de compilación. Para verla, abre `index.html` en el navegador o sirve la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Secciones

1. **Hero**: propuesta de valor, llamadas a la acción (visita / etapas) y aviso de jornada de puertas abiertas.
2. **Etapas educativas**: Infantil, Primaria, ESO y Bachillerato con sus franjas de edad.
3. **Proyecto educativo**: los cuatro pilares del centro.
4. **Servicios**: comedor, horario ampliado, transporte y extraescolares.
5. **Admisiones**: el proceso en tres pasos.
6. **Contacto**: datos del centro y formulario de captación de leads, con validación.

## Sistema de diseño

| Token        | Valor     | Uso                                  |
|--------------|-----------|--------------------------------------|
| `--bg`       | `#F5F1E8` | Fondo general                        |
| `--ink`      | `#1D2B27` | Texto principal / pie                |
| `--green`    | `#1F4D3F` | Color institucional                  |
| `--accent`   | `#B4492A` | Llamadas a la acción                 |
| `--sun`      | `#E9B949` | Acentos decorativos                  |
| `--sky`      | `#9CC3D5` | Acentos decorativos                  |

Tipografías: **Fraunces** (títulos) y **Hanken Grotesk** (texto), de Google Fonts.

## Accesibilidad

- Enlace "Saltar al contenido", foco visible y navegación completa con teclado.
- Contrastes AA en texto y botones; áreas táctiles de 44 px o más.
- Formulario con `label` en cada campo, errores anunciados con `aria-live` y `aria-invalid`.
- Respeta `prefers-reduced-motion`.

## Pendiente de completar

Los textos entre corchetes (`[FECHA]`, `[TELÉFONO]`, `[DIRECCIÓN DEL CENTRO]`…) son datos reales del centro que hay que sustituir. Las zonas rayadas son huecos para fotografías y para el mapa. El formulario valida en el navegador; el envío real (CRM o endpoint) se conecta en `js/main.js`, donde está marcado con un comentario.
