const express = require('express');

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

//Ruta para recibir datos del producto
app.post('/products', (req, res) =>{
    const product = req.body;

    res.json({
        message: 'Producto recibido correctamente',
        product: product
    });
});

module.exports = app;