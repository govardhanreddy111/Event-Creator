(function () {
    angular.module("event-detail-view",[])
        .config([$stateProvider,function config($stateProvider) {
            $stateProvider.state("goToViewEvent",{
                    url: '/event/:id',
                    templateUrl: '',
                    controller: '',
                    data: {pageTitle: 'Station'},
                params: {station: null}
            });
        }])
        .controller("",[function () {
            
        }])
})();