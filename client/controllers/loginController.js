myApp.controller('loginController', ['$scope', 'loginFactory', '$routeParams', '$location', function ($scope, loginFactory, $routeParams, $location){
  $scope.login_user;

  // LOGIN - FUNCTION
  $scope.login = function(){
    // console.log("loginController: ", $scope.item)
    // console.log("loginController: ", $scope.users[0].name)
    // if(angular.equals(undefined, $scope.item)){
    if(!$scope.item){
      console.log("loginController: EMPTY Obj")
    } else {
      loginFactory.login($scope.item, function(data){
        // console.log("loginController CAllBACK: ", data)
        $scope.login_user = data;
        $scope.item = {};
        $location.url('/dashboard');
      })
    }
  }

}]);
