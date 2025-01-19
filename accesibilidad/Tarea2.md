
# 1 MODAL
ACCESIBLE
```html
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription" aria-modal="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body" id="modalDescription">
        <p>Contenido del modal...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Cerrar modal">Cerrar</button>
        <button type="button" class="btn btn-primary" aria-label="Guardar cambios en el modal">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

```

Se agregó aria-modal="true" para informar que el modal es modal.
aria-label en los botones para describir mejor su propósito específico.

# 2 CARD

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="Descripción de la imagen">
  <div class="card-body">
    <h5 class="card-title">Título de la tarjeta</h5>
    <p class="card-text">Texto de ejemplo para complementar el título de la tarjeta.</p>
    <a href="#" class="btn btn-primary" aria-label="Ir a un lugar relacionado con la tarjeta">Ir a algún lugar</a>
  </div>
</div>
```
Se cambió alt a una descripción significativa de la imagen.
Se añadió un aria-label en el enlace para proporcionar más información.

# 3 DROPDOWN

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" aria-controls="dropdownMenu">
    Botón desplegable
  </button>
  <ul class="dropdown-menu" id="dropdownMenu">
    <li><a class="dropdown-item" href="#" aria-label="Acción 1 en el menú desplegable">Acción</a></li>
    <li><a class="dropdown-item" href="#" aria-label="Otra acción en el menú desplegable">Otra acción</a></li>
    <li><a class="dropdown-item" href="#" aria-label="Algo más en el menú desplegable">Algo más aquí</a></li>
  </ul>
</div>
```
Se añadieron aria-haspopup="true" y aria-controls para indicar la relación entre el botón y el menú desplegable.
Los elementos del menú tienen aria-label para describir mejor sus acciones.

# 4 DROPDOWN
```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Alternar navegación">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Enlace</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Desplegable
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Otra acción</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Algo más aquí</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Desactivado</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Campo de búsqueda">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
```
Se añadió aria-label="Alternar navegación" y aria-controls para mejorar la experiencia de navegación accesible.

# 5 ACORDEON

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Elemento de acordeón #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" aria-labelledby="headingOne">
      <div class="accordion-body">
        <strong>Este es el cuerpo del primer elemento del acordeón.</strong> Es visible por defecto.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Elemento de acordeón #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" aria-labelledby="headingTwo">
      <div class="accordion-body">
        <strong>Este es el cuerpo del segundo elemento del acordeón.</strong> Es visible solo al expandir.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Elemento de acordeón #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" aria-labelledby="headingThree">
      <div class="accordion-body">
        <strong>Este es el cuerpo del tercer elemento del acordeón.</strong> Es visible solo al expandir.
      </div>
    </div>
  </div>
</div>

```
Se añadieron aria-labelledby y aria-controls para vincular encabezados y paneles.
Se usaron aria-expanded en los botones para informar sobre el estado de expansión.