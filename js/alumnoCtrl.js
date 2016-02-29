app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http', function($scope,$routeParams,$http){
	$scope.setActive("mClasificacion");
	var idEquipo = $routeParams.idEquipo;
	$scope.actualizado = false;
	$scope.alumno = {};

	$http.get('php/servicios/alumnos.getAlumno.php?c='+ idEquipo)
	.success(function(data){

		if (data.err !== undefined) {
			window.location  = "#/alumnos";
			return;
		}
		$scope.alumno = data;

	});

	$scope.guardarAlumno = function(){

		$http.post('php/servicios/alumnos.guardar.php', $scope.alumno)
			.success(function(data){
				if (data.err === false) {
					$scope.actualizado=true;
					setTimeout(function() {
						$scope.actualizado=false;
						$scope.$apply();
					}, 1500);
				};
				console.log(data);
			});


	}

}]);