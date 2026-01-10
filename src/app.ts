import express from 'express';
import cors from 'cors';
import healthRoute from './routes/health.route.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/health', healthRoute);

// Error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
