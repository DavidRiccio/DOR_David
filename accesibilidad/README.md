# Mejora de Accesibilidad en Código```HTML

Este documento contiene modificaciones a diferentes bloques de código para cumplir con los estándares de accesibilidad establecidos por **WCAG** y **WAI-ARIA**. A continuación, se explica cómo se mejoraron los ejemplos originales, indicando los cambios realizados y su propósito.

## Ejercicio 1: Imagen sin texto alternativo

### Código Mejorado

```html
<img src="playa.jpg" alt="Vista de una playa con arena dorada y agua cristalina">
<img src="montana.jpg" alt="Montaña cubierta de nieve con un cielo despejado">
```
Descripción: Se añadió el atributo alt a las imágenes para describirlas con texto, haciendo que su contenido sea accesible para personas con discapacidad visual.

Ejercicio 2: Formulario sin etiquetas ni mensajes de error
Código Mejorado
```html
<form>
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" placeholder="Nombre" required>
  <label for="correo">Correo electrónico</label>
  <input type="email" id="correo" placeholder="Correo electrónico" required>
  <button type="submit">Enviar</button>
</form>
```
Descripción: Se agregaron etiquetas <label> asociadas a los campos mediante el atributo for. Además, se usó el atributo required para que el navegador gestione los mensajes de error automáticamente.

Ejercicio 3: Botón no accesible para lectores de pantalla
Código Mejorado
```html
<button onclick="alert('¡Botón presionado!')">Presionar</button>
Descripción: El elemento div fue reemplazado por un botón <button>, que es un elemento semántico que soporta lectores de pantalla y teclados sin necesidad de hacks adicionales.

Ejercicio 4: Navegación sin estructura semántica
Código Mejorado
```html
<nav>
  <a href="#inicio">Inicio</a>
  <a href="#servicios">Servicios</a>
  <a href="#contacto">Contacto</a>
</nav>
```
Descripción: Se utilizó el elemento <nav> para envolver los enlaces y mejorar la semántica, facilitando la navegación para usuarios con lectores de pantalla.

Ejercicio 5: Tabla sin encabezados
Código Mejorado
```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Producto 1</td>
      <td>10 USD</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>20 USD</td>
    </tr>
  </tbody>
</table>
```
Descripción: Se añadieron encabezados de tabla (<th>) y se organizó el contenido en <thead> y <tbody> para estructurar mejor la información.

Ejercicio 6: Contenido dinámico sin notificación
Código Mejorado
```html
<div aria-live="polite" id="notificacion"></div>
```
Descripción: Se introdujo el atributo aria-live con el valor polite para que los cambios en el contenido sean notificados a los lectores de pantalla sin interrupciones abruptas.

Ejercicio 7: Contraste bajo
Código Mejorado
```html
<style>
  body {
    background-color: #ffffff;
    color: #000000;
  }
</style>
```
Descripción: Se ajustaron los colores de fondo y texto para cumplir con las relaciones de contraste mínimo requeridas por WCAG (4.5:1).

Ejercicio 8: Lista desplegable sin indicar su estado
Código Mejorado
```html
<div class="menu" aria-expanded="false">
  Opciones
  <div class="submenu">
    <p>Opción 1</p>
    <p>Opción 2</p>
  </div>
</div>
```
Descripción: Se añadió el atributo aria-expanded para comunicar el estado del menú (abierto o cerrado) a los lectores de pantalla.

Ejercicio 9: Página con contenido multimedia
Código Mejorado
```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Español">
</video>
```
Descripción: Se incorporó un archivo de subtítulos mediante <track> para hacer el video accesible a personas con discapacidad auditiva.

Ejercicio 10: Página dinámica sin accesibilidad
Código Mejorado
```html
<div aria-live="polite" id="mensaje"></div>
```
Descripción: Al igual que en el ejercicio 6, se usa aria-live para alertar a los usuarios sobre cambios en el contenido.

Ejercicio 11: Página de producto
Código Mejorado
```html
<img src="zapatos.jpg" alt="Zapatos deportivos">
<div class="boton" role="button" tabindex="0" onclick="alert('Producto añadido al carrito')">Añadir al carrito</div>
```
Descripción: Se mejoró la accesibilidad del botón utilizando los atributos role="button" y tabindex="0" para que sea detectable por lectores de pantalla y navegable mediante teclado.

Ejercicio 12: Blog con múltiples secciones
Código Mejorado
```html
<nav>
  <a href="#inicio">Inicio</a>
  <a href="#sobre-mi">Sobre mí</a>
  <a href="#contacto">Contacto</a>
</nav>
<main>
  <article>
    <h2>Artículo Reciente</h2>
    <p>Este es el contenido del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#">Leer más</a>
  </article>
  <article>
    <h2>Otro Artículo</h2>
    <p>Contenido del segundo artículo. Lorem ipsum dolor sit amet.</p>
    <a href="#">Leer más</a>
  </article>
</main>
```
Descripción: Los enlaces de navegación se agruparon dentro de un <nav> y los artículos se estructuraron con <article> para mejorar la organización semántica.

Ejercicio 13: Formulario de inscripción
Código Mejorado
```html
<form>
  <label for="nombre">Nombre completo</label>
  <input type="text" id="nombre" required>
  <label for="correo">Correo electrónico</label>
  <input type="email" id="correo" required>
  <label for="pais">País</label>
  <select id="pais" required>
    <option value="">Seleccionar país</option>
    <option value="MX">México</option>
    <option value="ES">España</option>
    <option value="CO">Colombia</option>
  </select>
  <button type="submit">Enviar</button>
</form>
```
Descripción: Se añadieron etiquetas <label> y atributos required para asegurar que el formulario sea accesible.

Ejercicio 14: Tabla de datos compleja
Código Mejorado
```html
<table>
  <thead>
    <tr>
      <th>Producto</th>
      <th>Enero</th>
      <th>Febrero</th>
      <th>Marzo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Zapatos</td>
      <td>100</td>
      <td>150</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Camisas</td>
      <td>200</td>
      <td>250</td>
      <td>300</td>
    </tr>
  </tbody>
</table>
```
Descripción: Se definieron encabezados y una estructura semántica adecuada para la tabla.

Ejercicio 15: Menú interactivo
Código Mejorado
```html
<div class="menu" role="menu" aria-expanded="false">
  <button aria-haspopup="true">Opciones</button>
  <div class="submenu" role="menuitem">
    <p>Opción 1</p>
    <p>Opción 2</p>
    <p>Opción 3</p>
  </div>
</div>
```
Descripción: Se emplearon atributos ARIA como role="menu" y aria-haspopup para que los lectores de pantalla interpreten correctamente el comportamiento del menú.