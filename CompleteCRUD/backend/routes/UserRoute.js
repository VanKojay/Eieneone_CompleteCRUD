import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

// Mendefinisikan router express
const router = express.Router();

// Menentukan endpoint GET '/users' dan menetapkan fungsi handler 'getUsers'
router.get('/users', getUsers);

// Menentukan endpoint GET '/users/:id' dan menetapkan fungsi handler 'getUserById'
router.get('/users/:id', getUserById);

// Menentukan endpoint POST '/users' dan menetapkan fungsi handler 'createUser'
router.post('/users', createUser);

// Menentukan endpoint PATCH '/users/:id' dan menetapkan fungsi handler 'updateUser'
router.patch('/users/:id', updateUser);

// Menentukan endpoint DELETE '/users/:id' dan menetapkan fungsi handler 'deleteUser'
router.delete('/users/:id', deleteUser);


export default router;