myApp.factory('usersFactory', ['$http', '$location', function ($http, $location){
  var usersList = [];
  var showUser = [];
  var answerUser = [];
  var factory = {};
  // INDEX: SHOW
  factory.index = function(callback){
    $http.get('/friends').then(function(returned_data){
    // console.log(returned_data.data)
    callback(returned_data.data);
    })
  };
  // CREATE:
  factory.create = function(data, callback){
    // console.log("usersFactory: ", data)
    $http.post('/friends/new', data).then(function(returned_data){
      console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      console.log("Errors - DATA FROM SERVER CONTROLLER: )", returned_data.data.errors.question.message);
      var question_name = returned_data.data.errors.question.name;
      var description_name = returned_data.data.errors.description.name;
      // ERROR CHECK: RETURN DATA
      if( question_name && description_name == "ValidatorError"){
        callback(returned_data.data)
      } else {
        usersList.push(returned_data.data)
        // callback(returned_data.data)
        callback(usersList)
      }
      // usersList.push(returned_data.data)
      // // callback(returned_data.data)
      // callback(usersList)
    })
  };
  // DELETE:
  factory.delete = function(id, callback){
    // console.log("usersFactory: ", id)
    $http.delete('/friends/'+id).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      callback(returned_data.data)
    })
  };
  // SHOW:
  factory.show = function(id, callback){
    // console.log("DATA FROM CONTROLLER: ", id)
    $http.get('/friends/'+id).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      callback(returned_data.data)
    })
  }
  // VOTE:
  factory.like = function(id, idx, callback){
    // console.log("DATA FROM CONTROLLER: ", id, idx)
    var index = {index: idx}
    $http.put('/answers/like/'+id, index).then(function(returned_data){
      console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      showUser.push(returned_data.data)
      callback(showUser)
    })
  }
  // INDEX: SHOW
  factory.indexAnswer = function(callback){
    $http.get('/answers').then(function(returned_data){
    // console.log(returned_data.data)
    callback(returned_data.data);
    })
  };
  // ADD ANSWER:
  factory.addAnswer = function(data, callback){
    // console.log("usersFactory: ", data)
    $http.post('/answers/anwser', data).then(function(returned_data){
      // console.log("DATA FROM SERVER CONTROLLER: )", returned_data.data);
      answerUser.push(returned_data.data)
      callback(answerUser)
    })
  };

  return factory
}]);
