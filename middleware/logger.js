const loggerMiddleware = (req, res, next) => {
    const fecha = new Date();
    const hora = fecha.toLocaleTimeString();
    console.log(`[${hora}] Ruta visitada: ${req.method} ${req.url}`);
    next();
};

export default loggerMiddleware;