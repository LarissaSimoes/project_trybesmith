import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('Deve validar que é possível retornar a lista de produtos com sucesso', async function () {
    // Arrange
    const productList = [
      {
        "id": 1,
        "name": "Excalibur",
        "price": "10 peças de ouro",
        "orderId": 1
      },
      {
        "id": 2,
        "name": "Espada Justiceira",
        "price": "20 peças de ouro",
        "orderId": 1
      },
    ]
    // Act
    const mockReturn = [
      ProductModel.build(productList[0]),
      ProductModel.build(productList[1]),
    ];
    sinon.stub(ProductModel, 'findAll').resolves(mockReturn);
    const response = await chai.request(app).get('/products').send();
    // Assert
    expect(response.body).to.be.deep.equal(productList);
    expect(response.status).to.equal(200);
  });
});
