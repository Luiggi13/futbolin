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
		.when('/clasificacion/grupoA',{
			templateUrl: 'parciales/grupos.html',
			controller: 'clasificacionACtrl'
		})
		.when('/clasificacion/grupoB',{
			templateUrl: 'parciales/grupos.html',
			controller: 'clasificacionBCtrl'
		})
		.when('/alumno/:idEquipo',{
			templateUrl: 'parciales/alumno.html',
			controller: 'alumnoCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});