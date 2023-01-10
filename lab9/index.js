var abc = angular.module("abc", ['ngRoute'])

//router config
abc.config(($routeProvider) => {
  $routeProvider
    .when("/", {
      templateUrl: './index.html',
      controller: "homeCtrl"
    })
    .when("/about", {
      templateUrl: './samo.html',
      controller: 'aboutCtrl'
    })
    .when("/contact", {
      templateUrl: './usr.html',
      controller: "contactCtrl"
    })
})

//controllers
abc.controller("abcCtrl", ($rootScope, $http) => {
  //retrieve JSON file
  $http.get("./employee.json")
    .success(function (response) {
      $rootScope.employees = response
      console.log("empJSON retrieved.")
    })
})

abc.controller("homeCtrl", function ($scope, $rootScope) {
  $rootScope.var = "About The Product"
  $scope.message = "There are no meetings for today!"
})
abc.controller("aboutCtrl", function ($scope, $rootScope, $http) {
  $rootScope.var = "Employee Details"
  //retrieve JSON file
  $http.get("./employee.json")
    .success(function (response) {
      $rootScope.employees = response
      console.log("empJSON retrieved.")
    })
})
abc.controller("contactCtrl", function ($scope, $rootScope, $http) {
  $rootScope.var = "Search Employees"
  $scope.message = "Search employees in meeting by name:"

  search_name = document.getElementById("search_name")
  search_name.addEventListener('keyup', () => {
    if (search_name.value.trim() == "") {
      document.getElementById("search_table").style.display = "none"
    }
    else {
      document.getElementById("search_table").style.display = "table"
    }
  })
})