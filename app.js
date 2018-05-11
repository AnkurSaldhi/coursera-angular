//(function(){
//    'use strict'
//    angular.module('nameCalculator', [])
//
//    .controller('nameCalculatorController', function($scope){
////        $scope.name = 'Ankk'
//        $scope.totalValue = 0;
//
//        $scope.displayNumericValue = function(){
//            var numValue = calculateNumericValue($scope.name)
//            $scope.totalValue = numValue;
//        }
//
//        function calculateNumericValue(string){
//            var totVal = 0;
//            for(var i=0; i< string.length; i++){
//                totVal+= string.charCodeAt(i)
//            }
//            return totVal;
//        }
//
//    });
//})();





(function(){
    'user strict';

    angular.module('foodApp',[])

    .controller('foodController', itemsController);

    function itemsController($scope){
            $scope.items = ''
        $scope.checkItems = function(){
            var items = $scope.items
            var items_list = items.split(',')
            var filtered_items_list = []
            items_list.forEach(function(value, index){
                if(value!=""){
                    filtered_items_list.push(value)
                }
            });
            var length = filtered_items_list.length
            if(length==0)
                $scope.msg = 'Please enter data first';
            else if(length<=3)
                $scope.msg = 'Enjoy!';
            else
                $scope.msg = 'Too much!';


        }

    }

})();