const express = require('express'); //importacion de express
const productsController = require('../controllers/products.controller');

const router = express.Router(); //creamos un administrador independiente de rutas


router.get('/', (req, res) => {
    res.json({
        message: 'Ruta de productos funcionando'
    });
});


router.post('/', productsController.createProduct);

module.exports = router; //utilizar router en otros archivos