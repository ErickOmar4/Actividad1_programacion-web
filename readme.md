# ejercicios del 1 al 18 de html, js y javaScript

Alumno santiago Ramirez Erick Omar


para el menu pricipal cree unarchivo index.html que es lo priemro que se muestra en el proyecto en github pages y mediante enlaces redireccione a cada ejercicio para que sea mas facil de visualizar 

![alt text](img/index.png)

### ejercicio 1
![foto del ejercicio1](img/ejercicio1.png)


codigo
```
<body>
    <h1>¡Hola Mundo!</h1>
    <p>Esta es mi primer Ejercicio de HTML.</p>
    <a href="index.html">volver al menu</a>
</body>
```
etiquetas usadas
h1 para titulos
p para crear parrafos


![ejercicio 2](img/ejercicio2.png)

```
<body>
    <h1>Mi primera página con Formato</h1>
    <p>Este es un <strong>párrafo importante </strong>.<br>
    Y este tiene <em>énfasis</em>.</p>
    <p>Segundo párrafo para practicar.</p>
    <a href="index.html">volver al menu</a>
</body>
```
etiquetas

strong
em


![ejercicio 3](img/ejercicio3.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3- Enlaces</title>
</head>
<body>
    <h1>Enlaces de Práctica</h1>
    <p><a href="https://www.google.com" target="_blank">google ( nueva pestaña)</a></p>
    <p><a href="https://www.facebook.com" target="_self">Vista a facebook (misma pestaña)</a></p>
    <p>O regresa  al <a href="ejercicio1.html">ejercicio1</a>.</p>
    <a href="index.html">volver al menu</a>
</body>
</html>
```

### ejercicio 4

![ejercicio 4](img/ejercicio4.png)

```
<body>
    <h1>Naturaleza</h1>
    <img src="img/montaña.jpg" alt="paisaje montañoso" width="300">
    <p>Una imagen de prueba. Asegúrate de tener el archivo en la carpeta <code>img/</code>. </p>
    <a href="index.html">volver al menu</a>
</body>
```

code

## ejercicio 5 
etiquetas:
br: hacer un salto de linea 
img agregar una imagen -> propiedades alt="texto alternativo si no aparece la imagen "


![alt text](img/ejercicio5.png)



## ejercicio 6

![imagen ejercicio6 ](img/ejercicio6.png)

etiquetas usadas:
```
<header> Define la cabecera de una página o sección. Suele contener el logo, título, menú de navegación o información introductoria.
```
como usarla 

```
<header>
  <h1>Mi Sitio Web</h1>
  <nav>...</nav>
</header>
```

```

<section> Agrupa contenido relacionado temáticamente dentro de un documento. Cada sección suele tener su propio encabezado. 


</footer>
Define el pie de página de un documento o sección. Contiene datos como derechos de autor, contacto o enlaces legales.

```

## ejercicio 7
el ejercicio consiste en hacer una lista mediante biñetas
![alt text](img/ejercicio7.png)

etiquetas 
```
<ul>Crea una lista no ordenada (con viñetas).
<ul>
  <li>Elemento 1</li> Define un elemento o ítem dentro de una lista (<ul> u <ol>)
  <li>Elemento 2</li>
</ul>
<ol>Crea una lista ordenada (numerada).
```

## Ejercicio 8

consiste en hacer un horario mediante una tabla en html y se le agregaron estilos en un archovo css separado
![ejercicio8](img/ejercicio8.png)

etiquetas
``` 
<link  Vincula recursos externos al documento, como hojas de estilo CSS o íconos. Va dentro del <head> ejemplo <link rel="stylesheet" href="estilos.css">

<table  Crea una tabla para mostrar datos organizados en filas y columnas

<thead> Agrupa las filas que forman el encabezado de una tabla.
<tbody> Agrupa el cuerpo principal (contenido) de una tabla.
<ht>
```

ejercicio 9 

se crea un formulario usando cajas de texto con texto predefinido como ejemplo usando la propiedad placeholder en etiquetas input

![ejercicio9](img/ejercicio9.png)

etiquetas 
```
<div Es un contenedor genérico de bloque. Se usa para agrupar y organizar elementos, muy útil con CSS.

<form Define un formulario para recopilar datos del usuario.
ejemplo: <form action="/enviar" method="post">
  ...
</form>

<label> Define una etiqueta descriptiva para un campo de formulario.
<input> Crea un campo de entrada donde el usuario puede escribir o seleccionar datos.
<buttom> Crea un botón
```


## ejercicio 10 conversion de termperatura

se crea 1 calculadora ocupando un input para ingresar un valor y al presionar el boton "convertir" convierta la cantidad de grados celcius a Farenheith y agrega el resultado en otro input al cual no se puede editar el contenido 
![ejercicio 10](img/ejercicio10.png)

cosas importante 
la funcionalidad se impleneta mediante un archvo externo js y ha agrega al html con la linea

```
<script src="js/ejercicio10.js"></script>
```

y se agreaga la funcion con el evento  onclick en el boton 
```
<button type="button" onclick="convertir()">Convertir</button>
```
