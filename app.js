import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import indexRoutes from './routes/index.js';
import loggerMiddleware from './middleware/logger.js';

// Configuración de __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de vistas y motor de plantillas
app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

// Middleware
app.use(express.static(join(__dirname, 'public')));
app.use(loggerMiddleware);

// Rutas
app.use('/', indexRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

export default app;