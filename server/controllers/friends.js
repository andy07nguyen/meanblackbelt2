console.log('FROM FRIENDS CONTROLLER JS:');
var session = require('express-session');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var Login = mongoose.model('Login');
var Answer = mongoose.model('Answer');


module.exports = {
// ***************************FRIENDS-TABLE***************************** //
// INDEX: SHOW
  index: function(req,res){
    Friend.find({}, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'index'});
  },
// CREATE:
  create: function(req,res){
    // console.log('data: ', req.body)
    var new_user = new Friend({ name:req.body.name, question: req.body.question, description: req.body.description, _user_id: req.body._user_id});
    new_user.save(function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
    // res.json({placeholder:'create'});
  },
// UPDATE: LIKE
  update: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id, req.body.index)
    Answer.findOne({ _user_id: req.params.id }, function(err, userData){
      if(err){
        res.json(err);
      } else {
        // console.log('CONTROLLER JS: ', userData)
        userData.count++
        userData.save(function(err, data){
          // console.log(data)
          if(err){
            res.json(err);
          } else {
            res.json(data)
          }
        })
      }
    })
  },
// DELETE:
  delete: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id)
    var current_user = Friend.findOne({ _id: req.params.id });
    // console.log('CONTROLLER JS: ', current_user)
    current_user.remove(function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
    // res.json({placeholder:'delete'});
  },
// SHOW:
  show: function(req,res){
    // console.log('CONTROLLER JS: ', req.params.id)
    Friend.findOne({ _id: req.params.id}, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'show'});
  },
// ***************************ANSWERS-TABLE***************************** //
// INDEX: SHOW
  indexAnswer: function(req,res){
    Answer.find({}, function(err, userData){
      // console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData);
      }
    })
    // res.json({placeholder:'index'});
  },
// ADD ANSWER:
  addAnswer: function(req, res){
    console.log('data: ', req.body)
    var new_answer = new Answer({ name:req.body.name, answer:req.body.answer, detail: req.body.detail, _user_id: req.body._user_id});
    new_answer.save(function(err, userData){
      console.log("DATA FROM MONGO: ", userData)
      if(err){
        res.json(err);
      } else {
        res.json(userData)
      }
    })
  },
// ***************************LOGINS-TABLE***************************** //
// LOGIN:
  login: function(req,res){
    // console.log('CONTROLLER JS: ', req.body)
    Login.findOne({ name: req.body.name }, function(err, userData){
      if(userData){
        res.json(userData)
      } else {
        var new_login = new Login({ name: req.body.name });
        new_login.save(function(err, data){
          if(err){
            res.json(err);
          } else {
            // console.log("CONTROLLER JS SESSION DATA: ", req.session.user)
            req.session.user = new_login;
            res.json(data);
          }
        })
      }
    })
  }

};
