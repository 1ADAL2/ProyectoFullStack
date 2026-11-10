const express = require('express');
const productsRouter = require('./routes/products.routes'); //importamos products.routes

const app = express();

// app.use registra un middleware para el procesamiento, el resto interpreta los datos en formato json
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: 'API de Inventario y Ventas funcionando',
        status: 'OK'
    });
});

//Crea una segunda ruta
app.get('/api', (req, res) => {
    res.json({
        "project": 'Sistema de inventario y ventas',
        "version": '1.0.1',
        "status": 'running'
    });
});

app.use('/products', productsRouter);

module.exports = app;