import { Request, Response } from 'express';
import productsService from '../services/productsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function create(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct = await productsService.create({ name, price, orderId });
  if (newProduct.status !== 'OK') {
    return res.status(mapStatusHTTP(newProduct.status)).json(newProduct.data);
  }
  return res.status(201).json(newProduct.data);
}

async function findAll(req: Request, res: Response): Promise<Response> {
  const result = await productsService.findAll();
  return res.status(200).json(result);
}

export default { create, findAll };