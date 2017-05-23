//using mongoose to connect mongodb

//  var mongoose = require('mongoose');
//  mongoose.connect('mongodb://localhost/nodeauth');
//  var db = mongoose.connection;

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017");


// User Schema
// var UserSchema = mongoose.Schema({
//     username: {
//         type: String,
//         index: true
//     },
//     password: {
//         type: String
//     },
//     email: {
//         type: String
//     },
//     name: {
//         type: String
//     },
//     profileimage: {
//         type: String
//     }
// });

//export User schema
// var User = module.exports = mongoose.model('User', UserSchema);

// //export createUser function
// module.exports.createUser = function(newUser, callback){
//     newUser.save(callback); //mongoose function to insert to DB
// };