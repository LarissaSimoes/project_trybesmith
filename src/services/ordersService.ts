import { literal } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';

async function findAll(): Promise<ServiceResponse<OrderSequelizeModel[]>> {
  const ordersList = await OrderModel.findAll({
    attributes: [
      'id',
      'userId',
      [literal('JSON_ARRAYAGG(productIds.id)'),
        'productIds'],
    ],
    include: [{
      model: ProductModel,
      as: 'productIds',
      attributes: [],
    }],
    group: ['Order.id'], 
    raw: true,
  });
  const response: ServiceResponse<OrderSequelizeModel[]> = {
    status: 'OK', data: ordersList };
  
  return response;
}

export default { findAll };
