import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    Correo: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Por favor ingresa un correo electrónico válido.']
    },
    Celular: {
        type: String,
        required: true,
        unique: true,
        match: [/^\d{10}$/, 'Por favor ingresa un número de celular válido de 10 dígitos.'] // Validación de 10 dígitos
    },
    Rol: {
        type: String,
        required: true,
        enum: ['administrador', 'cuidador', 'palafrenero', 'veterinario']
    },
    estado: {
        type: Boolean,
        default: true
    },
    Clave: {
        type: String,
        required: true
    },
    Usuario: {
        type: String,
        required: true,
        unique: true
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

export default Employee;
