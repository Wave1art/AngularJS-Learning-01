import angular from 'angular';
import '@uirouter/angularjs';

(function () {
  'use strict';

  angular.module('MsgApp', []).controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = 'Toby';
  }
})();