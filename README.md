Cómo ejecutar el juego después de clonar el repositorio:

1. Instalar Node.js (si no lo tenés aún)
Node.js es el entorno que permite ejecutar JavaScript fuera del navegador.
Descargalo desde https://nodejs.org (recomendado instalar la versión LTS).
Durante la instalación, asegurate de marcar la opción "Add to PATH" para que se pueda usar desde la terminal.

2. Abrir la terminal (CMD)
Presioná Win + R, escribí cmd y presioná Enter.
Ir a la carpeta del juego
Usá el comando cd para cambiar a la carpeta donde está el proyecto.
Por ejemplo:
cd C:\Users\ipformosa\Desktop\practicatlp\juegorpg

3. Instalar dependencias necesarias
El juego usa la librería prompt-sync para leer datos por consola.
Instalála con:

npm install prompt-sync

4. Ejecutar el juego
Una vez instalada la librería, podés iniciar el juego con:
node app.js
