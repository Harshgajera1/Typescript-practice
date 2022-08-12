import express,{Request,Response} from "express";
import { about, home } from "../controllers/usercont";
const router = express.Router();

router.get('/',(req: Request,res : Response):void=>{
    res.send({test  : 'test pages'});
});

router.get('/home',home);
 router.get('/about',about);

export{
    router
}