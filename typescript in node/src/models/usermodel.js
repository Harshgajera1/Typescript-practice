import mongoose,{Schema,model,Document} from "mongoose";

interface user{
    name : String;
    phone : Number
}
const UserSchema = new Schema<user>({
    name : {
        type : String,
        required : true
    },
    phone : {
        type :Number,
        required : true
    }
});

const Usermodel = model<user>('User',UserSchema);
export default Usermodel;

