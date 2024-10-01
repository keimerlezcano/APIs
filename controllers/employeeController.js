import e from 'express';
import Employee from '../models/employee.js';

// Listar empleados
export async function getEmployees(req, res) {
    try {
        const employees = await Employee.find(); // Buscar todos los empleados
        res.json(employees); // Responder con los empleados en formato JSON
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados' }); // Manejo de errores
    }
}

// Añadir un nuevo empleado
export async function addEmployee(req, res) {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error(error); // Agrega esto para ver el error en la consola
        res.status(400).json({ message: 'Error al añadir el empleado', error });
    }
}



// Eliminar un empleado por ID
export async function deleteEmployee(req, res) {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id); // Buscar y eliminar el empleado
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Empleado no encontrado' }); // Manejo de caso no encontrado
        }
        res.json({ message: 'Empleado eliminado' }); // Responder confirmando eliminación
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el empleado' }); // Manejo de errores
    }
}

// Buscar empleado por ID
export async function getEmployeeById(req, res) {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id); // Buscar el empleado por ID
        if (!employee) {
            return res.status(404).json({ message: 'Empleado no encontrado' }); // Manejo de caso no encontrado
        }
        res.json(employee); // Responder con el empleado encontrado
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el empleado' }); // Manejo de errores
    }
}

// Buscar empleados por nombre
export async function getEmployeesByName(req, res) {
    try {
        const { name } = req.params; // Asegúrate de que estás recibiendo el nombre correctamente
        const employees = await Employee.find({ name: new RegExp(name, 'i') }); // Usa expresión regular para buscar de manera insensible a mayúsculas
        res.json(employees); // Responder con los empleados encontrados
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados' }); // Manejo de errores
    }
}


// Buscar empleados por rol
export async function getEmployeesByRole(req, res) {
    try {
        const { rol } = req.params;
        const employees = await Employee.find({ rol: new RegExp(rol, 'i') }); // Buscar por rol
        res.json(employees); // Responder con los empleados encontrados
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados' }); // Manejo de errores
    }
}

// Editar empleado
export async function updateEmployee(req, res) {
    try {
        const { id } = req.params;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true }); // Actualizar empleado
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Empleado no encontrado' }); // Manejo de caso no encontrado
        }
        res.json(updatedEmployee); // Responder con el empleado actualizado
    } catch (error) {
        res.status(400).json({ message: 'Error al editar el empleado' }); // Manejo de errores
    }
}

