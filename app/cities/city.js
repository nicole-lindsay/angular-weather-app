viewsModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/cities/:city", {
    templateUrl : "./cities/city.html",
    controller : 'CityCtrl',
    resolve : {
      cityDetails : ['owmFindCity', '$route', function(owmFindCity, $route) {
        return owmFindCity($route.current.params.city);
      }]}
    });
}]);

viewsModule.controller('CityCtrl', ['$scope', 'cityDetails', 'owmHistory', function($scope, cityDetails, owmHistory) {

  $scope.city = cityDetails.city;
  if($scope.city.country === 'CA') {
    $scope.city.country = 'Canada';
  }
  $scope.forecast = _.map(cityDetails.list, function(item) {
    item.dt_txt = Date.parse(item.dt_txt);
    return item;
  });
  var vm = this;
  owmHistory.push(cityDetails.city);
}]);

// viewsModule.controller('CityCtrl', ['cityDetails', 'owmHistory', function(cityDetails, owmHistory){
//   var vm = this;
//   owmHistory.push(cityDetails.city);
// }]);