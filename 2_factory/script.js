var app = angular.module('myApp',[]);

app.factory('random',function(){
	var randomObject = {};
	var num = Math.floor(Math.random()*10);
	randomObject.generate = function(){
		return num;
	}
	return randomObject;
});
app.controller('appCntrl',function($scope,random){
	$scope.generateRandom = function(){
		$scope.randomNumber = random.generate();
	//	$scope.randomNumber2 = random.generate();
	}
});