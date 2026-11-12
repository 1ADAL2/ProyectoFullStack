const productsController = {
    createProduct:(req, res) => {
        const product = req.body;

        if (!product.name || !product.name.trim()){
            return res.status(400).json({
            message: 'El nombre no debe estar vacio'
        });
    }

        //Validacion de tipo de numero en price
        if (typeof product.price !== 'number'){
            return res.status(400).json({
                message: 'El precio debe ser un numero'
            });
        //Validacion de precios negativos
        } else if (product.price < 0){
            return res.status(400).json({
                message: 'El precio no puede ser negativo'
            });
        }

        //Validacion para el stock num entero y no negativo
        if (!Number.isInteger(product.stock)){
            return res.status(400).json({
                message: 'El stock debe ser un numero entero'
            });
        } else if (product.stock < 0){
            return res.status(400).json({
                message: 'El stock no puede ser negativo'
            })
        }

        res.status(201).json({
            message: 'Producto recibido correctamente',
            product: product
        });
    }
};


module.exports = productsController;