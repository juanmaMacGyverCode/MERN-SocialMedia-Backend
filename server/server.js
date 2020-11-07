import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

/*
Definir esquemas con datos fuertemente tipados. Una vez que se define un esquema, Mongoose le permite 
crear un Modelo basado en un esquema específico. Un modelo de mongoose se asigna a un documento MongoDB 
a través de la definición del esquema del modelo.
*/

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`);
});

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
