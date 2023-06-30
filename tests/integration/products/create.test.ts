import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Deve validar que é possível cadastrar um produto com sucesso', async function () {
    // Arrange
    const productMock = {
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4
    }
    const response = {
      id: 7,
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    }
    // Act
    const mockReturn = ProductModel.build(response);
    sinon.stub(ProductModel, 'create').resolves(mockReturn);
    const httpResponse = await chai.request(app).post('/products').send(productMock);
     // Assert
     expect(httpResponse.status).to.equal(201);
     expect(httpResponse.body).to.be.deep.equal({
      id: 7,
      name: 'Martelo de Thor',
      price: '30 peças de ouro',
      orderId: 4,
    });

  })

});
