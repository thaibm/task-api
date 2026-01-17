import { Router } from 'express';
import { AuthService } from '../services/auth.service.js';
import { signToken } from '../config/jwt.js';

export const authRouter = Router();
const authService = new AuthService();

authRouter.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await authService.register(username, password);
        res.status(201).json(user);
    } catch (error) {
        // res.status(500).json({ message: 'Cannot register user' });
        next(error);
    }
});