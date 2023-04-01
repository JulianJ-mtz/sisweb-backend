import { Router } from 'express';
import productRoutes from './productRouters';

const apiRouter = Router();

apiRouter.use('/product', productRoutes);

apiRouter.get('/', (req, res) => {
    res.send('Hello World!')
})

export default apiRouter;