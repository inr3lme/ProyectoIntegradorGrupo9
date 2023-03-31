Proyecto    : Landing Page de Velas Aromáticas.
Integrantes : ADRIAN ALBERTO MAHMUD PITTON - MARIA JOSE HEREDIA - SERGIO SEMPERTEGUI VELASCO - LAURA EDELMAN

Estructura  del Proyecto :
--------------------------
Carpeta Principal : PROYECTOINTEGRADORGRUPO9
Sub Carpetas      : scripts --> Contiene archivos .js
                    styles  --> Contiene archivos .css
                    images  --> Contiene archivos .gif / .jpg
Archivos a nivel de la carpeta principal:
                    index.html - README.md - 
Control de Cambios
------------------
Dentro del VC, Abrimos una terminal que puede ser cmd o Power Shell
Menú VC --> Terminal --> New Terminal

Git
Configuración Inicial - ** Se realiza una sola vez por equipo.
---------------------
● Paso 1: Elegir un nombre de usuario que recuerdes fácil, y el email. 
● Paso 2: Establecer el nombre con el comando: git config --global user.name "Nombre Apellido"
● Paso 3: Establecer el correo a usar con el comando: git config --global user.email johndoe@example.com

Test de la Configuración
-------------------------
git config user.name
git config user.mail

Iniciar Versionado de un proyecto
---------------------------------
git init --> Inicia en el repositorio local donde estoy parado
git init mi_repositorio --> indico path completo del directorio principal del proyecto.

Chequear Status del Versionado
------------------------------
git status
Vamos a la terminal y con git status chequeamos el estado de nuestro repositorio

Areas de Trabajo del Git
------------------------
Lo que armamos en nuestro repositorio --> Working area
Primer paso del versionado --> Staging area --> git add . (todos) - git add mi_archivo
Segundo paso del versionado -- > Repositorio del git --> git commit -m "Descripción de lo que hicimos"

Detalle de los commit realizados
--------------------------------
git log --> Detalle completo
git --oneline --> Detalle comprimido

GitHub - Repositorio en la nube - Mejor resguardo - Para trabajar en equipo
----------------------------------------------------------------------------
a) Crear cuenta en GitHub
b) Crear nuevo repositorio en GitHub (Ideal tener igual nombre que la carpeta principal del proyecto)

