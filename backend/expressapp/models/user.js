var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcryptjs');

var ourschema = new Schema({
    email :{type:String,required:true},
    username : {type:String,required:true},
    password : {type:String,required:true},
    creation_dt: {type:Date,required:true}
});

ourschema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

ourschema.methods.isValid = function(hashedPassword){
    return bcrypt.compareSync(hashedPassword,this.password);
} 

module.exports = mongoose.model('User',ourschema);