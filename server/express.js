import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';

/*
- body-parser: Solicite el middleware de análisis del cuerpo para manejar las complejidades del análisis 
de los objetos de solicitud que se pueden transmitir, de modo que podamos simplificar la comunicación 
entre el navegador y el servidor intercambiando JSON en el cuerpo de la solicitud. 
Para instalar el módulo, ejecute "yarn add body-parser" desde la línea de comando. 
Luego, configure la aplicación Express con bodyParser.json() y bodyParser.urlencoded({ extended: true }).

- cookie-parser: Middleware de análisis de cookies para analizar y establecer cookies en objetos de solicitud. 
Para instalar el módulo cookie-parser, ejecute "yarn add cookie-parser" desde la línea de comandos.

- compression: Middleware de compresión que intentará comprimir los cuerpos de respuesta para todas las 
solicitudes que atraviesan el middleware. Para instalar el módulo de compresión, 
ejecute "yarn add compress" desde la línea de comando.

- helmet: Colección de funciones de middleware para ayudar a proteger las aplicaciones Express mediante 
la configuración de varios encabezados HTTP. Para instalar el módulo de casco, ejecute "yarn add helmet" 
desde la línea de comando.

- cors: Middleware para permitir el intercambio de recursos entre orígenes (CORS). 
Para instalar el módulo cors, ejecute "yarn add cors" desde la línea de comando.
*/

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

/*
Endpoint de controlador
*/

app.get('/', (req, res) => {
    res.status(200).send(Template());
});

export default app;