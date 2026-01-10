import type { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);

  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
};
