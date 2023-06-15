var myApp = angular.module("myList", [
  "ngStorage",
]);

myApp.controller(
  "ListController",
  function ($scope, $localStorage, $http) {
    $scope.items = [];
    $scope.newItem = "";
    $scope.pushItem = function () {
      if ($scope.newItem != "") {
        $scope.items.push($scope.newItem);
        $scope.newItem = "";
      }
    };
    $scope.deleteItem = function (index) {
      $scope.items.splice(index, 1);
    };

    // if ($localStorage.datastorage) {
    //   $scope.items = $localStorage.datastorage;
    // } else {
    //   $http.get("").then(function (response) {
    //     $scope.items = response.data;
    //     $localStorage.datastorage = response.data;
    //   });
    // }
  }
);
