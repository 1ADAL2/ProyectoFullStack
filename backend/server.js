require('dotenv').config();

const app = require('./src/app');
const pool = require('./src/config/database')

const PORT = 3000;


pool.query('SELECT NOW()')
    .then(() => {
        console.log('Conexion PostgreSQL exitosa');

        app.listen(PORT, () => {
            console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.erro('Error al conectar con PostgreSQL', error.message);
    })