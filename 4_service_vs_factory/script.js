var app = angular.module('myApp',[]);

app.service('fromService',function(){

	this.message ="this is from service";
});

app.factory('fromFactory',function(){
	var factory = {};
	factory.message = "this is from factory";
	return factory;
});
app.controller('appCntrl',function($scope,fromService,fromFactory){
	$scope.greetMsg = [fromService.message,fromFactory.message];
});