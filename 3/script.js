var mainApp = angular.module("mainApp", []); 

mainApp.factory('MathService', function() {
	var factory = {};
	factory.multiply = function(a, b) {
			return (a*b);
	}
  return factory;
});

mainApp.service('CalcService', function(MathService){ 
	this.square = function(a) {
	return MathService.multiply(a,a);
	} 
});

mainApp.controller('CalcController', function($scope, CalcService,MathService) { 
	$scope.square = function() {
		$scope.result = CalcService.square($scope.number);
	} 
});