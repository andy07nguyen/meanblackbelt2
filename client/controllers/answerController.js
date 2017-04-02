myApp.controller('answerController', ['$scope', 'usersFactory', 'loginFactory', '$routeParams', '$location', function ($scope, usersFactory, loginFactory, $routeParams, $location){
  $scope.loggedInUser = loginFactory.loggedInUser;
  $scope.answer = [];
  $scope.showUser = [];

  // SHOWUSER -SHOW FUNCTION
  console.log($routeParams.id);
  function show(){
    usersFactory.show($routeParams.id,function(data){
      // console.log(data)
      $scope.showUser = data;
    })
  }
  show()

// CALLBACK:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.answer = data;
    // console.log($scope.users)
    $scope.item = {};
  }
// INDEX: SHOW - FUNCTION
  usersFactory.indexAnswer(setData);


// ADD ANWSER:
 $scope.add = function(){
   $scope.item.name = $scope.loggedInUser.name;
   $scope.item._user_id = $scope.loggedInUser._id;
   usersFactory.addAnswer($scope.item, function(data){
     console.log(data)
     $scope.answer = data;
   })
   $scope.item = {};
 }


}]);
