 /**
 * Created by aleduarte06 on 22/08/15.
 */
var mod = angular.module('myapp',['ui.router','angular-storage']); //Creamos un modulo de angular
mod.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home',{
             url: '/home',
             templateUrl: 'templates/buscador.html',
             controller: 'buscadorCtrl'
        })

        .state('resultados',{
             url: '/resultados?q',
             templateUrl: 'templates/resultados.html',
             controller: 'resultadosCtrl'
        })

        .state('registro',{
            url: '/registro',
            templateUrl: 'templates/registro.html',
            controller: 'registerCtrl'
        })

        .state('login',{
             url: '/login',
             templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })

        .state('recuperar',{
             url: '/recuperar',
            templateUrl: 'templates/recuperar.html'
        })

        .state('success',{
             url: '/success',
            templateUrl: 'templates/registerOk.html'
        });
    $urlRouterProvider.otherwise('/home');

});


