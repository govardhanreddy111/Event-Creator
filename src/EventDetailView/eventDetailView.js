(function () {
    "use strict";
    angular.module("event-detail-view",['ui.router'])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state('viewevent', {
                url: '/event/:id',
                templateUrl: 'EventDetailView/view_event.htm',
                controller: 'eventDetailViewController'
            });
        }])
        .controller("eventDetailViewController",['$stateParams','listOfEvents','$scope','$location', function ($stateParams,listOfEvents,$scope,$location) {
            var eventsList = listOfEvents.list;
            angular.forEach(eventsList,function (event) {
                if(event.id === parseInt($stateParams.id)){
                    $scope.event = event;
                }
            });
            $scope.deleteEvent = function () {
                listOfEvents.delete($scope.event.id);
                $location.path("/");
            };
        }])
})();