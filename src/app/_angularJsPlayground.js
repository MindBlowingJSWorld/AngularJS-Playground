(function () {
    'use strict';

    angular
        .module('playground', [
            'ngMessages',
            'ui.router',
            'playground.chapter1.test',
            'playground.common'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('/', {
                    url: '/',
                    redirectTo: 'playground',
                    template: '<ui-view/>'
                })
                .state('playground', {
                    url: '/playground',
                    redirectTo: 'playground.chapter1',
                    template: '<ui-view/>'
                })
                .state('playground.chapter1', {
                    url: '/chapter1',
                    template: '<playground-chapter1-test></playground-chapter1-test>'
                });

            $urlRouterProvider.otherwise('/');
        });


})();
