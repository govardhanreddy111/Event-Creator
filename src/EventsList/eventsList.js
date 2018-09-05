(function () {
    'use strict';
    angular.module("events-list",[])
        .factory("listOfEvents",[function () {
            var events = {};
            events.list = [
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 2,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 3,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 4,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 5,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 6,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 7,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 8,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"}
            ];
            events.create = function (event) {
                events.list.push(event);
            };
            events.update = function () {

            }
            events.delete = function (id) {
                angular.forEach(events.list, function (listEvent,key) {
                   if(listEvent.id === id){
                       events.list.splice(key,1);
                   }
                });
            }
            return events;
        }])
        .controller("EventsListController", ['$state','$scope','listOfEvents','$location', function ($state,$scope,listOfEvents,$location) {
          $scope.eventsList =   listOfEvents.list;
          $scope.goToViewEvent = function (event) {
         //   $location.path("/view-event").search({param : event.id})
            $state.go("viewevent",{'event' : event,'id' : event.id});
          }
        }])

})();