(function () {
    'use strict';


    angular.module('playground.common')
        .directive('helloWorldDirective', function () {
            return {
                restrict: 'AE',
                replace: 'true',
                template: '<h3>hello world !!! </h3>'
            }
        });

})();
