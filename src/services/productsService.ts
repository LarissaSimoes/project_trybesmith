import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponseSuccess } from '../types/ServiceResponse';

async function create(product: Product): Promise<ServiceResponseSuccess<Product>> {
  const newProduct = await ProductModel.create(product);
  const serviceResponse: ServiceResponseSuccess<Product> = {
    status: 'OK',
    data: newProduct.dataValues,
  };
  return serviceResponse;
}

async function findAll(): Promise<Product[]> {
  const models = await ProductModel.findAll();
  const products: Product[] = models.map((model) => model.toJSON() as Product);
  return products;
}

export default { create, findAll };