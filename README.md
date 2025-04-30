# MuseArte - Museo Virtual de Arte Moderno

![MuseArte](public/img/Screenshot%20from%202025-04-29%2019-19-25.png)

Una aplicación web desarrollada con Node.js, Express y Pug que simula un museo virtual de arte moderno.

## Características

- Galería de obras de arte ficticias
- Página de detalle para cada obra
- Información sobre el proyecto
- Diseño responsivo
- Middleware personalizado para registro de rutas

## Requisitos

- Node.js (versión 14.x o superior)
- npm (versión 6.x o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd musearte
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita `http://localhost:3000` para explorar la aplicación.

## Estructura del Proyecto

```plaintext
musearte/
├── app.js                # Archivo principal que configura y arranca el servidor
├── data/
│   └── obras.js          # Datos de las obras de arte
├── middleware/
│   └── logger.js         # Middleware para registrar las rutas visitadas
├── public/
│   ├── css/
│   │   └── style.css     # Estilos CSS para la aplicación
│   └── img/              # Imágenes de las obras de arte
├── routes/
│   └── index.js          # Rutas principales de la aplicación
├── views/
│   ├── layout.pug        # Plantilla base para las vistas
│   ├── index.pug         # Página de inicio
│   ├── galeria.pug       # Página de galería
│   ├── obra.pug          # Página de detalle de una obra
│   └── acerca.pug        # Página de información sobre el proyecto
├── .vercel/              # Configuración para despliegue en Vercel
├── package.json          # Configuración del proyecto y dependencias
└── README.md             # Documentación del proyecto
```

## Despliegue

Este proyecto está configurado para ser desplegado en [Vercel](https://vercel.com/). Puedes acceder a la aplicación en el siguiente enlace:

[https://musearte-delta.vercel.app/](https://musearte-delta.vercel.app/)

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega una nueva funcionalidad"
   ```
4. Envía tus cambios al repositorio remoto:
   ```bash
   git push origin mi-nueva-funcionalidad
   ```
5. Abre un Pull Request en GitHub.
