myApp.factory('loginFactory', ['$http', function ($http){
  var factory = {};
  factory.loggedInUser;

  //LOGIN:
  factory.login = function(data, callback){
    // console.log("From loginController: ", data)
    $http.post('/logins/login', data).then(function(returned_data){
      // console.log("loginFactory - DATA FROM SERVER CONTROLLER: ", returned_data.data);
      factory.loggedInUser = returned_data.data;
      callback(factory.loggedInUser)
    })
  };

  return factory
}]);
