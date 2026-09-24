# Estudio SEO · Colegio Alba

Estudio de posicionamiento para la landing del Colegio Alba, un colegio privado y bilingüe de Pozuelo de Alarcón (Madrid).

> Los datos de volumen, dificultad y competencia son **simulados** para esta prueba. En un proyecto real saldrían de Google Search Console, Google Keyword Planner y una herramienta como Semrush o Ahrefs.

## 1. Objetivo

La página tiene un único objetivo: **conseguir solicitudes de visita** de familias que buscan colegio en la zona noroeste de Madrid para el curso 2027–2028.

Tomamos dos momentos de búsqueda:

- **Septiembre a diciembre:** las familias comparan colegios y buscan jornadas de puertas abiertas.
- **Enero y febrero:** buscan plazos de admisión y cómo matricular.

## 2. Público

| Perfil | Qué busca | Qué necesita ver en la página |
|---|---|---|
| Familia con hijos de 1 a 3 años | Escuela infantil bilingüe cerca de casa | Aulas de 1 y 2 años, comedor, horario ampliado |
| Familia que cambia de colegio (Primaria y ESO) | Colegio con idiomas y grupos pequeños | Ratio por aula, proyecto educativo, idiomas |
| Familia que se muda a Pozuelo | Colegios de la zona y cómo llegar | Dirección, ruta escolar, plano |
| Alumnado de 4º de ESO y sus familias | Bachillerato y resultados en la PAU | Modalidades, simulacros, orientación |

## 3. Palabras clave

Volumen: búsquedas mensuales estimadas en España. Dificultad: de 0 a 100.

| Palabra clave | Volumen | Dificultad | Intención | Dónde se trabaja |
|---|---:|---:|---|---|
| colegio pozuelo de alarcón | 1.900 | 52 | Local | `title`, H1, pie |
| colegios privados pozuelo de alarcón | 1.300 | 48 | Local / comparativa | meta description, FAQ |
| colegio bilingüe pozuelo | 880 | 41 | Local | `title`, H1 |
| escuela infantil pozuelo | 720 | 38 | Local | Etapas (aulas de 1 y 2 años) |
| jornada puertas abiertas colegio pozuelo | 260 | 22 | Evento | Portada, datos estructurados `Event` |
| bachillerato pozuelo de alarcón | 390 | 30 | Local | Etapas, FAQ |
| colegio con ruta escolar aravaca | 140 | 15 | Local | Servicios, FAQ |
| qué curso le toca a mi hijo según el año de nacimiento | 2.400 | 12 | Informativa (nacional) | Calculadora de curso |
| plazo de admisión colegios madrid 2027 | 1.600 | 35 | Informativa | Admisiones, FAQ |
| colegio con comedor propio pozuelo | 90 | 10 | Local | Servicios |

**Palabra clave principal:** "colegio bilingüe en Pozuelo de Alarcón". Tiene buen volumen, dificultad media y define bien al centro.

**Oportunidad destacada:** "qué curso le toca a mi hijo". Es una búsqueda nacional con mucho volumen y poca competencia. La calculadora de curso la resuelve en la propia página y además lleva a reservar visita, así que capta tráfico y contactos a la vez.

## 4. Competencia (simulada)

Analizamos tres colegios de la zona, que dejamos sin nombre:

| | Colegio A | Colegio B | Colegio C | Colegio Alba |
|---|---|---|---|---|
| Datos estructurados | No | Solo `Organization` | No | `School`, `Event`, `FAQPage` y `WebSite` |
| Carga en móvil (LCP) | 4,1 s | 3,2 s | 5,6 s | Objetivo: menos de 2 s |
| Formulario visible sin salir de la página | No | Sí | No | Sí, con validación |
| Contenido que responda dudas | Poco | PDF descargable | No | FAQ y calculadora |

Ninguno responde a las búsquedas informativas sobre cursos y plazos. Ahí es donde el Colegio Alba puede ganar visibilidad pronto.

## 5. Cambios aplicados en el código

### Contenido y estructura

- **`title`** (53 caracteres): `Colegio bilingüe en Pozuelo de Alarcón | Colegio Alba`.
- **Meta description** (152 caracteres): menciona la zona, las etapas, el ratio, los servicios y termina con una llamada a la acción.
- **Un único H1**, con la palabra clave principal dentro ("Colegio bilingüe en Pozuelo · De 1 año a Bachillerato") y el lema del colegio.
- **Encabezados** H2 y H3 ordenados por secciones: etapas, calculadora, proyecto, servicios, admisiones, preguntas frecuentes y contacto.
- **Sección de preguntas frecuentes** con cinco preguntas reales de familias. Cubre búsquedas largas como "privado o concertado", "plazo de admisión" o "horario".
- **Textos alternativos** descriptivos en todas las fotos, con la ubicación cuando es natural.
- **Datos de contacto (NAP)** iguales en la página, el pie y los datos estructurados, dentro de una etiqueta `<address>`.
- **Fechas** marcadas con `<time datetime>` para que los buscadores las entiendan.

### Técnico

- **Datos estructurados JSON-LD:**
  - `School`: dirección, coordenadas, horario de secretaría y zonas atendidas.
  - `Event`: jornada de puertas abiertas del 14 de noviembre de 2026.
  - `FAQPage`: las cinco preguntas, con el mismo texto que se ve en la página.
  - `WebSite`.
- **`canonical`**, `robots` con `max-image-preview:large`, **Open Graph** y **Twitter Card** con una imagen de 1200 × 630 px.
- **`robots.txt`** y **`sitemap.xml`** con las imágenes.
- **Rendimiento:**
  - imágenes en WebP con `width` y `height`, para que la página no salte al cargar
  - `fetchpriority="high"` y `preload` en la foto de la portada
  - `loading="lazy"` en el resto de fotos
  - `preconnect` a Google Fonts
  - ninguna librería externa
- **Accesibilidad:** enlace para saltar al contenido, foco visible, contraste AA y respeto a `prefers-reduced-motion`. Google también lo tiene en cuenta.

> Google limitó en 2023 los resultados enriquecidos de preguntas frecuentes a webs oficiales y de salud. Mantenemos el marcado `FAQPage` porque ayuda a otros buscadores y a los asistentes de IA a entender la página, pero no contamos con que aparezca como resultado enriquecido.

## 6. SEO local

1. **Ficha de Google Business Profile** con la categoría "Colegio privado", el mismo nombre, dirección y teléfono que la web, fotos del centro y el evento de puertas abiertas publicado.
2. **Reseñas:** pedirlas a las familias después de cada visita y de cada fin de curso, y responderlas todas.
3. **Directorios de colegios** y el ayuntamiento de Pozuelo, con los mismos datos de contacto.
4. **Enlaces locales:** asociaciones deportivas y culturales de la zona con las que el colegio ya colabora.

## 7. Plan de contenidos (siguientes 6 meses)

| Mes | Contenido | Búsqueda que ataca |
|---|---|---|
| Octubre | Guía: cómo elegir colegio en Pozuelo | colegios pozuelo de alarcón |
| Noviembre | Página de la jornada de puertas abiertas | puertas abiertas colegio pozuelo |
| Diciembre | Calendario de admisión 2027–2028 en la Comunidad de Madrid | plazo de admisión colegios madrid |
| Enero | Qué documentos hacen falta para la matrícula | documentos matrícula colegio |
| Febrero | Resultados de la PAU del curso anterior | bachillerato pozuelo resultados |
| Marzo | Campamento de verano en inglés | campamento verano pozuelo |

## 8. Cómo lo medimos

| Indicador | Hoy | Objetivo a 6 meses |
|---|---:|---:|
| Posición media para "colegio bilingüe pozuelo" | 18 | Top 3 |
| Visitas orgánicas al mes | 1.200 | 3.500 |
| Solicitudes de visita desde la web al mes | 25 | 70 |
| Uso de la calculadora (sesiones que la mueven) | – | 30 % |
| Clic en "Reservar visita" desde la calculadora | – | 12 % |

Eventos de Google Analytics 4 que conviene configurar: `calculadora_uso`, `calculadora_cta`, `formulario_envio`, `click_telefono` y `click_email`.
