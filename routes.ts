import {Router} from 'express';
import cityController from './controllers/cityController';
import covidController from './controllers/covidController';


const routes = Router();

routes.post('/city',cityController.create);
routes.get('/city',cityController.index);
routes.get('/city/:id',cityController.show);

routes.post('/covid',covidController.create);
routes.get('/covid',covidController.index);
routes.get('/covid/:id',covidController.show);
export default routes;