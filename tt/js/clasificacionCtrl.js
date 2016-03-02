app.controller('clasificacionCtrl', ['$scope','$http', function($scope,$http){
	$('.mainApp').removeClass('fluid-container').addClass('container');
	
	$scope.setActive("mClasificacion");

	$scope.alumnos={};
	$scope.posicion=5;

	$http.get('php/servicios/equipos.listado.php')
	.success(function(data){

		$scope.alumnos=data;
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion) {

			$scope.posicion +=5;
		};
	}

	$scope.anteriores = function(){

		if ($scope.posicion > 5) {

			$scope.posicion -=5;
		};
	}

}]);

app.controller('clasificacionACtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mClasificacionA");

	$scope.alumnos={};
	$scope.posicion=5;

	$http.get('php/servicios/equipos.listadoA.php')
	.success(function(data){

		$scope.alumnos=data;
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion) {

			$scope.posicion +=5;
		};
	}

	$scope.anteriores = function(){

		if ($scope.posicion > 5) {

			$scope.posicion -=5;
		};
	}

}]);

app.controller('clasificacionBCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mClasificacionB");

	$scope.alumnos={};
	$scope.posicion=5;

	$http.get('php/servicios/equipos.listadoB.php')
	.success(function(data){

		$scope.alumnos=data;
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion) {

			$scope.posicion +=5;
		};
	}

	$scope.anteriores = function(){

		if ($scope.posicion > 5) {

			$scope.posicion -=5;
		};
	}

}]);

app.controller('clasificacionCCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mClasificacionC");

	$scope.alumnos={};
	$scope.posicion=5;

	$http.get('php/servicios/equipos.listadoC.php')
	.success(function(data){

		$scope.alumnos=data;
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion) {

			$scope.posicion +=5;
		};
	}

	$scope.anteriores = function(){

		if ($scope.posicion > 5) {

			$scope.posicion -=5;
		};
	}

}]);

app.controller('clasificacionDCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mClasificacionD");

	$scope.alumnos={};
	$scope.posicion=5;

	$http.get('php/servicios/equipos.listadoD.php')
	.success(function(data){

		$scope.alumnos=data;
	});

	$scope.siguientes = function(){

		if ($scope.alumnos.length > $scope.posicion) {

			$scope.posicion +=5;
		};
	}

	$scope.anteriores = function(){

		if ($scope.posicion > 5) {

			$scope.posicion -=5;
		};
	}

}]);