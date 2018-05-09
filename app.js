(function(){
    'use strict';
    angular.module('myFirstApp',[])

    .controller('myFirstController', function($scope){
        $scope.name = 'Ankur'
        $scope.sayHello = function(){
            return 'Hello'
        }
    })
})();