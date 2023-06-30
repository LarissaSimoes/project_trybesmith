import express from 'express';

import productsController from '../controllers/productsController';

const router = express.Router();

router.post('/', productsController.create);

export default router;
