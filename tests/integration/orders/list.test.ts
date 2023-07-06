import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  const validResponse = {
    id: 1,
    userId: 1,
  }

  it('Deve retornar os pedidos', async function () {
    const mockAllOrders = OrderModel.build(validResponse);
    sinon.stub(OrderModel, 'findAll').resolves([mockAllOrders]);

    const response = await chai.request(app).get('/orders');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.deep.equal([validResponse]);
  })

});
