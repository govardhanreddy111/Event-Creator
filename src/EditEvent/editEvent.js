(function () {
    "use strict";
    angular.module("edit-event",["ui.router"])
        .config(['$stateProvider',function config($stateProvider) {
            $stateProvider.state('editevent', {
                url: '/edit-event/:id',
                templateUrl: 'EditEvent/editEvent.html',
                controller: 'EditEventController'
            });
        }])
        .controller("EditEventController",[function () {
            console.log("edit");
        }])
})();