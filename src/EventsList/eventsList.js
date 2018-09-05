(function () {
    'use strict';
    angular.module("events-list",[])
        .factory("listOfEvents",[function () {
            var events = {}
            events.list = [
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"},
                {id : 1,name : "fdsfjk",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwdlaksjgbdseuiksjdfgheskjh"}
            ];
            events.create = function (event) {
                events.list.push(event);
            };
            events.update = function () {

            }
            events.delete = function () {

            }
            return events;
        }])
        .controller("EventsListController", ['$scope','listOfEvents', function ($scope,listOfEvents) {
          $scope.eventsList =   listOfEvents.list;
          $scope.goToViewEvent = function (event) {
              $state.go("goToViewEvent",{event : event,id : event.id});
          }
        }])

})();