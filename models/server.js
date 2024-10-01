import express, { json } from 'express';
import dbConnection from '../database/config.js';
import 'dotenv/config';
import employeeRoutes from '../routes/employeeRoutes.js';
import cors from 'cors'

class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnection();
        this.app.use(cors());
        this.pathEmployee = '/api/employee'; // Indica una ruta pública de una API 
        this.route();
    }

    async dbConnection() {
        try {
            await dbConnection();
            console.log('Base de datos conectada correctamente');
        } catch (error) {
            console.error('Error de conexión a la base de datos:', error);
        }
    }

    route() {
        this.app.use(json()); // Emplear json al req body
        this.app.use(this.pathEmployee, employeeRoutes); // Usar .use para todas las rutas
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        });
    }
}

export default Server; // Export the class Server
