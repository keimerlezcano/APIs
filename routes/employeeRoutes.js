import Router from "express";

const employeeRoutes = Router();

import {
    getEmployees,
    addEmployee,
    deleteEmployee,
    getEmployeeById,
    getEmployeesByName,
    getEmployeesByRole,
    updateEmployee
} from '../controllers/employeeController.js'; // Asegúrate de que la ruta sea correcta

employeeRoutes.get('/', getEmployees); // Listar todos los empleados
employeeRoutes.post('/', addEmployee); // Añadir un empleado
employeeRoutes.delete('/:id', deleteEmployee); // Eliminar un empleado por ID
employeeRoutes.get('/:id', getEmployeeById); // Obtener un empleado por ID
employeeRoutes.get('/name/:name', getEmployeesByName); // Buscar empleados por nombre
employeeRoutes.get('/rol/:rol', getEmployeesByRole); // Buscar empleados por rol
employeeRoutes.put('/:id', updateEmployee); // Editar un empleado por ID




export default employeeRoutes;
