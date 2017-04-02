myApp.controller('usersController', ['$scope', 'usersFactory', 'loginFactory', '$routeParams', '$location', function ($scope, usersFactory, loginFactory, $routeParams, $location){
  // console.log("ROUTE PARAMS: ", $routeParams);
  $scope.loggedInUser = loginFactory.loggedInUser;
  $scope.users = [];
  $scope.showUser;
  $scope.errorMsg = [];
// CALLBACK:
  function setData(data){
    // console.log("CAllBACK: ", data)
    $scope.users = data;
    // console.log($scope.users)
    $scope.item = {};
  }
// INDEX: SHOW - FUNCTION
  usersFactory.index(setData);
// ADD - FUNCTION
  $scope.add = function(){
    // console.log("LOGGEDINUSER: ", $scope.loggedInUser)
    // console.log("usersController: ", $scope.item)
    $scope.item.name = $scope.loggedInUser.name;
    $scope.item._user_id = $scope.loggedInUser._id;
    usersFactory.create($scope.item, function(data){
      // console.log("usersController: ", data)
      if(typeof data == "object"){
        console.log("ERROR - usersController: ", data)
        $scope.errorMsg = data;
      } else {
        console.log("SUCCESS - usersController: ", data)
        $scope.users = data;
        $location.path('/dashboard');

      };
      // console.log($scope.users)
      // $location.path('/dashboard');
    });
    $scope.item = {};
    // $location.url('/dashboard');
  }
// REMOVE - FUNCTION
  $scope.remove = function(data){
    // console.log("usersController: ", data._id)
    usersFactory.delete(data._id, setData);
    usersFactory.index(setData);
  }


}]);
