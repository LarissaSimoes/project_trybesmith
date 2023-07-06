import express from 'express';

import productsController from '../controllers/productsController';
import nameValidation from '../middlewares/nameValidation';
import priceValidation from '../middlewares/priceValidation';

const productsRouter = express.Router();

productsRouter.post('/', nameValidation, priceValidation, productsController.create);

productsRouter.get('/', productsController.findAll);

export default productsRouter;
