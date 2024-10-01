import { connect } from 'mongoose'; // Importa mongoose

const dbConnection = async () => {
    // Captura los errores
    try {
        await connect(process.env.MONGO_CNN);
        console.log('Connected to Mongo DB');
    } catch (error) {
        console.log(error);
    }
};

export default dbConnection; // Usa export default
