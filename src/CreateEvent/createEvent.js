(function () {
    "use strict";
    angular.module("create-event",[])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state("create-event", {
                url: '/create-event',
                templateUrl: 'CreateEvent/create_event.htm',
                controller: 'createCtrl'
            });
        }])
        .controller("createCtrl", ['$scope','listOfEvents','$location', function ($scope,listOfEvents,$location) {
            $scope.newEvent = {}
            $scope.AddToEvent = function () {
                listOfEvents.create($scope.newEvent);
                $location.path('/');
            };
            
        }])
})();