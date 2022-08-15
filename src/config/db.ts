import mongoose,{connect}  from "mongoose";

function connects(){
    return connect('mongodb://localhost/demo')
    .then(()=>{
        console.log('db connected');
    }).catch((error:any)=>{
        console.log(error);      
    });
}

export default connects;