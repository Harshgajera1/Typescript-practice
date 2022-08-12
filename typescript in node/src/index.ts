import  express,{Request,Response}  from "express";
import {router} from "./routes/routes";
import db from "./config/db";
const app = express();

app.use('/',router);

db();


app.listen(8000,():void=>{
    console.log('server start port no : 8000');
});