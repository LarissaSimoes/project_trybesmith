import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function create(product: Product): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);
  const serviceResponse: ServiceResponse<Product> = {
    status: 'OK',
    data: newProduct.dataValues,
  };
  return serviceResponse;
}

async function findAll(): Promise<ServiceResponse<Product[]>> {
  const models = await ProductModel.findAll();
  const serviceResponse: ServiceResponse<Product[]> = {
    status: 'OK',
    data: models.map((e) => e.dataValues),
  };
  return serviceResponse;
}

export default { create, findAll };