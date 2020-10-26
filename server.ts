import express, { json } from 'express';
import {Mongoose} from 'mongoose';
import 'cors';
import routes from './routes';


const app = express();
/*Mongoose.connect('tCRIAR', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
*/
//app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333);