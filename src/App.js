var EventCalendarApp = angular.module("Event.Calendar.App",[
    "ngRoute",
    "events-list",
    "create-event",
    "event-detail-view",
    "ui.router"
]);

EventCalendarApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/main.htm",
        controller:"EventsListController"
    })
    .when("/event-create", {
        templateUrl : "CreateEvent/create_event.htm",
        controller : "createCtrl"
    })
});
EventCalendarApp.controller("CalendarAppController",function($scope,$http,$rootScope,$location){
     $scope.header_information = "Events";
});

EventCalendarApp.controller("viewCtrl", function ($scope) {
    $scope.msg = "These are the Events created";
});