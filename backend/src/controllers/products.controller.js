const productsController = {
    createProduct:(req, res) => {
        const product = req.body;

        console.log(product.name);

        if (!product.name || !product.name.trim()){
        res.status(400).json({
            message: 'El nombre no debe estar vacio'
        });
        return;
    }

        //Validacion de tipo de numero en price
        if (typeof product.price !== 'number'){
            res.status(400).json({
                message: 'El precio debe ser un numero'
            });
            return;
        //Validacion de precios negativos
        } else if (product.price < 0){
            res.status(400).json({
                message: 'El precio no puede ser negativo'
            });
            return;
        }

        //Validacion para el stock num entero y no negativo
        if (!Number.isInteger(product.stock)){
            res.status(400).json({
                message: 'El stock debe ser un numero entero'
            });
            return;
        } else if (product.stock < 0){
            res.status(400).json({
                message: 'El stock no puede ser negativo'
            })
            return;
        }

        res.status(201).json({
            message: 'Producto recibido correctamente',
            product: product
        });
    }
};


module.exports = productsController;