import config from './../config/config';
import app from './express';

/* 
Con la aplicación Express configurada para aceptar solicitudes HTTP, podemos seguir adelante y 
usarla para implementar un servidor que pueda escuchar las solicitudes entrantes.
*/

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', config.port);
});