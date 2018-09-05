(function () {
    "use strict";
    angular.module("create-event",[])
        .controller("createCtrl", ['$scope','listOfEvents','$location', function ($scope,listOfEvents,$location) {
            $scope.newEvent = {}
            $scope.AddToEvent = function () {
                listOfEvents.create($scope.newEvent);
                $location.path('/');
            };
            
        }])
})();