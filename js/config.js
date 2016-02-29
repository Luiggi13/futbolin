app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/clasificacion.html',
			controller: 'clasificacionCtrl'
		})
		.when('/home',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/profesores',{
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/clasificacion',{
			templateUrl: 'parciales/clasificacion.html',
			controller: 'clasificacionCtrl'
		})
		.when('/alumno/:idEquipo',{
			templateUrl: 'parciales/alumno.html',
			controller: 'alumnoCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});