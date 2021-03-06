viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'HomeCtrl'
  });
}]);

viewsModule.controller('HomeCtrl', ['$scope', 'owmUSCities', 'owmHistory', function($scope, owmUSCities, owmHistory) {
  owmUSCities()
    .then(function(citiesXhr) {
      $scope.cities = citiesXhr;
    });
    owmHistory.push({name: "Home", isHome:true});
}]);

// viewsModule.controller('HomeCtrl', ['owmUSCities', 'owmHistory', function(owmUSCities, owmHistory){
// 	var vm = this;
// 	owmHistory.push({ name : "Home", isHome : true });
// }]);