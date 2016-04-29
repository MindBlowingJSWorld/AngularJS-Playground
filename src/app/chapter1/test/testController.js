(function () {
    'use strict';


    var testController = function () {
        console.log('Test Controller Inited');
    };

    angular.module('playground.chapter1.test')
        .controller('testController', testController);

})();
