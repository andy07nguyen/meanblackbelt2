myApp.controller('showController', ['$scope', 'usersFactory', '$routeParams', '$location', function ($scope, usersFactory, $routeParams, $location){
  $scope.users = [];
  $scope.showUser = [];
  $scope.answer = [];
  // CALLBACK - USER:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.users = data;
    // console.log($scope.users)
    $scope.item = {};
  }
// INDEX - USER: SHOW - FUNCTION
  usersFactory.index(setData);

// CALLBACK - ANSWER:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.answer = data;
    // console.log($scope.users)
    $scope.item = {};
  }
// INDEX - ANSWER: SHOW - FUNCTION
  usersFactory.indexAnswer(setData);

// SHOW - FUNCTION
  // console.log("showController: ", $routeParams)
  function show(){
    usersFactory.show($routeParams.id, function(data){
      // console.log(data)
      $scope.showUser = data;
    })
  }
  show()
// LIKE - FUNCTION
  $scope.like = function(obj, idx){
    console.log("showController: ", obj, obj._user_id, idx)
    usersFactory.like(obj._user_id, idx, function(data){
      console.log("DATA FROM FACTORY: ", data)
      usersFactory.indexAnswer(setData);
    })
  }


}]);
