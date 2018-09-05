(function () {
    'use strict';
    angular.module("events-list",[])
        .factory("listOfEvents",[function () {
        var getRandomColor = function () {
        return {
                  background: '#' + Math.floor(Math.random()*16777215).toString(16)
              }
          };
            var events = {};
            events.list = [
                {id : 1,name : "event1",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbf ges uiwdl aksj gbdseuik sjdfg heskjh","bgcolor": getRandomColor()},
                {id : 2,name : "event2",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiw dlaksjg bdseuiksj dfgheskjh","bgcolor": getRandomColor()},
                {id : 3,name : "event3",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesuiwd laksjgbd seuiksjdfgheskjh","bgcolor": getRandomColor()},
                {id : 4,name : "event4",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfgesui wdlaksjgbdse uiksjdfgheskjh","bgcolor": getRandomColor()},
                {id : 5,name : "event5",start_date : "09/06/1993", end_date : "09/06/1993",location : "bangalore",desc : "sdbfg esuiwd laksjgbd seuiksjd fgheskjh","bgcolor": getRandomColor()}
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
                // search function

                $scope.SearchEvent=function(){
                    $scope.UserSearch=$scope.eventSearch;


                }
          $scope.eventsList =   listOfEvents.list;
          $scope.goToViewEvent = function (event) {
         //   $location.path("/view-event").search({param : event.id})
            $state.go("viewevent",{'event' : event,'id' : event.id});
          }
        }])

})();