const mongoose=require('mongoose')

const schemamodel= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    message:{
        type:String,
        require:true 
    }
});
const contactuserdata =new mongoose.model('contactusdata',schemamodel)
module.exports=contactuserdata;