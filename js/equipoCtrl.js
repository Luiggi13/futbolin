app.controller('equipoCtrl', ['$scope', '$routeParams', '$http', function($scope,$routeParams,$http){
	$('.mainApp').removeClass('fluid-container').addClass('container');
	
	$scope.setActive("mClasificacion");
	var idEquipo = $routeParams.idEquipo;
	$scope.actualizado = false;
	$scope.alumno = {};
<<<<<<< HEAD
	$scope.items={};
	$scope.posicionSeleccionada="2";
	$scope.posicionSeleccionada2="1";
=======
>>>>>>> parent of 05f2a83... estable1

	$http.get('php/servicios/equipos.getEquipo.php?c='+ idEquipo)
	.success(function(data){

		if (data.err !== undefined) {
			window.location  = "#/equipos";
			return;
		}
		$scope.alumno = data;

	});

	$scope.guardarEquipo = function(){

		$http.post('php/servicios/equipos.guardar.php', $scope.alumno)
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

