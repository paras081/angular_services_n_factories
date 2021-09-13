var app = angular.module('myApp',[]);

app.service('random',function(){
	var num = Math.floor(Math.random()*10);
	this.generate = function(){
		return num;
	}
});

app.controller('appCntrl',function($scope,random){
	$scope.generateRandom = function(){
		$scope.randomNumber = random.generate();
		//$scope.randomNumber2 = random.generate();
	}
});