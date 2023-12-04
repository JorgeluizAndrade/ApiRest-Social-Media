import express from "express";
import { getAllUsers, login, signup } from "../controllers/userController.js";


const router = express.Router();

router.get('/', getAllUsers);
router.post('/login', login);
router.post('/signup', signup);

export default router