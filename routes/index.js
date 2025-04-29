import express from 'express';
import obras from '../data/obras.js';

const router = express.Router();

// Ruta principal - Inicio
router.get('/', (req, res) => {
    res.render('index', {
        titulo: 'MUSEARTE - Inicio',
        obras: obras.slice(0, 3) // Mostrar solo 3 obras destacadas en la página de inicio
    });
});

// Redirección de /inicio a /
router.get('/inicio', (req, res) => {
    res.redirect('/');
});

// Ruta galería - Muestra todas las obras
router.get('/galeria', (req, res) => {
    res.render('galeria', {
        titulo: 'MUSEARTE - Galería',
        obras: obras
    });
});

// Ruta obra/:id - Detalle de una obra específica
router.get('/obra/:id', (req, res) => {
    const obraId = parseInt(req.params.id);
    const obra = obras.find(o => o.id === obraId);

    if (!obra) {
        return res.status(404).render('404', {
            titulo: 'Obra no encontrada',
            mensaje: 'La obra que buscas no existe en nuestra colección.'
        });
    }

    res.render('obra', {
        titulo: `MUSEARTE - ${obra.titulo}`,
        obra: obra
    });
});

// Ruta acerca - Información sobre el museo y creador
router.get('/acerca', (req, res) => {
    res.render('acerca', {
        titulo: 'MUSEARTE - Acerca de'
    });
});

export default router;