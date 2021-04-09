import "reflect-metadata";
import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './route';
const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(3333,()=>{
    console.log("running in port 3333");
})


