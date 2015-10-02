/**
 * Created by aleduarte06 on 25/9/15.
 */
var mod = angular.module('myapp');

mod.controller('buscadorCtrl', function($scope,$state,$http){
    console.log('Primer Controlador');
    $scope.busqueda = '';
    $scope.enviar = function(){
        $state.go('resultados',{q:$scope.busqueda})
    }

});

mod.controller('resultadosCtrl', function($scope,$http,$stateParams){
    console.log('Segungo controlador');
    //console.log($stateParams.q);
    var url = 'http://localhost:8045/meliproxy?q='+ $stateParams.q + '&limit=10';
    console.log(url);
    $http.get(url).then(function(res){
        console.log(res);
        $scope.resultados = res.data.results;
    });

});

mod.controller('registerCtrl', function($scope,$http,$state){
    //$scope.user = {};
    console.log('dentro del controlador registro');
    //console.log($stateParams.q);
    var url = 'http://172.10.0.20:8000/register/';
    console.log(url);

    $scope.register = function(){
        console.log($scope.user);
        $http.post(url, $scope.user)
            .then(function(res){
                $state.go('success');
                setTimeout(function () {
                    $state.go('login');
                }, 3000)
            })
            .catch(function(res){
                console.log(res)
            });
    };
});

mod.controller('loginCtrl', function ($scope,$http,store,$state) {
    var url = 'http://172.10.0.20:8000/login/';
    $scope.login = function () {
        $http.post(url, $scope.user)
            .then(function (res) {
                console.log(res.data.token);
                store.set('token', res.data.token)
                $state.go('home')
            })
            .catch(function (res) {
                console.log(res.data)
            })
    }
});
    

