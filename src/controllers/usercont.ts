import { Request, Response } from "express";


let about = (req: Request,res: Response)=>{
    let data = sumData(32,65);
    res.send('<h2>About Page.</h2>');
    // console.log(data);
}
const sumData = function(x:number,y:number){
    return x+y;
}


let home = (req:Request,res: Response)=>{
    const ob = {
        x: 25,
        y: 26
    }
    const division = devisionData(ob);
    res.json({
        division : division
    });
}
interface params{
    x: number,
    y : number
}
type divcheck = (x : params)=>number
const devisionData:divcheck = (ob:params)=>{
    return ob.x - ob.y + 3;
}


export {
    about, home
}