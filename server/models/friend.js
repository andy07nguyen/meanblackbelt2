console.log('FROM FRIENDS MODELS JS:');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// FriendSchema:
var FriendSchema = new mongoose.Schema({
  name: String,
  question: {type:String, required:[true,"Invaild Question Entry"], minlength:[10,"Require 10 characters or more"]},
  description: {type:String, required:[true,"Invaild Description Entry"]},
  count: {type:Number, default: 0},
  _user_id: {type: Schema.Types.ObjectId, ref: 'Login'}
}, { timestamps: true });

mongoose.model('Friend', FriendSchema);

// LoginSchema:
var LoginSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

mongoose.model('Login', LoginSchema);

// AnswerSchema:
var AnswerSchema = new mongoose.Schema({
  name: String,
  answer: {type:String, required:[true,"Invaild Answer Entry"], minlength:[5,"Require 5 characters or more"]},
  detail: {type:String, required:[true,"Invaild Detail Entry"]},
  count: {type:Number, default: 0},
  _user_id: {type: Schema.Types.ObjectId, ref: 'Login'}
}, { timestamps: true });

mongoose.model('Answer', AnswerSchema);
