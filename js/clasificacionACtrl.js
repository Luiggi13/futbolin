app.controller('clasificacionACtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mClasificacionA");

	$scope.alumnos={};
	$scope.posicion=5;

	$http.get('php/servicios/alumnos.listadoA.php')
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