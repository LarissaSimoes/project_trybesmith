import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

async function findAll(_req: Request, res: Response): Promise<Response> {
  const result = await ordersService.findAll();
  return res.status(200).json(result.data);
}

export default { findAll };