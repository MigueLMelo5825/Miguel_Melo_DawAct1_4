# Actividad 1.4 Markdown y GithubLab
## Miguel Melo Daw-7k
### Despliegue de aplicaciones web

Este repositorio contiene una página sencilla creada en **HTML** que muestra los distintos *módulos del Grado superior de Desarrollo de Aplicaciones Web*.  
El objetivo de esta actividad es **practicar el uso de Markdown** y **GitHub**.

---

## Contenido del Repositorio

- `index.html` → Página principal con la lista de módulos.  
- `README.md` → Documento explicativo con formato Markdown.  
- `.vscode` → Directorio que contiene el archivo .gitignore y el archivo ignorado settings.json
- `img` → Directorio que contiene las imagenes usadas para el repositorio
- `css` → Directorio que contiene los archivos **CSS** que modifica el diseño y estilo de index.html
- `js` → Directorio que contiene los archivos **JavaScript** que dan interaccion a la web de index.html

Puedes consultar la documentación oficial de Markdown dando click a la siguiente imagen: 

<p align="center">
  <a href="https://guides.github.com/features/mastering-markdown/">
    <img src="./img/Markdown.jpg" alt="Guía de Markdown de GitHub" width="250">
  </a>
</p>

---

### Ejemplo de Código (HTML)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividad 1.4 </title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    
    <h1>Módulo de Desarrollo de Aplicaciones Web</h1>

        <ul id="modulos">
            <li>Despliegue de Aplicaciones Web</li>
            <li>Programación</li>
            <li>Base de Datos</li>
            <li>Lenguajes de Marcas</li>
            <li>Desarrollo en Entorno Cliente</li>
        </ul>

    <footer>
        © 2025 Miguel Melo - Actividad 1.4
    </footer>

<script src="./js/index.js"></script>
</body>
</html>


