(function () {
  'use strict';

  angular.module('LunchApp', [])
    .controller('AppController', MsgController);

  MsgController.$inject = ['$scope'];

  function MsgController($scope) {
    $scope.lunchMessage = 'Please enter data first';
    $scope.numItems = 0;


    $scope.parseList = function() {
      var numItems = 0; //get the number of lunch items

      numItems = countItems($scope.inputList);

      $scope.numItems = numItems;

      $scope.lunchMessage =  ((numItems == 0) ? 
        'Please enter data first.' : 
          ((numItems > 3) ? 'Too much!' : 'Enjoy!')
        );

    };

    function countItems(string){
      // Counts the number of non-zero items in a list separated by commas
      // Ignores items which are either spaces or undefined

      var itemCount = 0;
      var items = [];
      var itemLengths = [];

      if (typeof string !== 'undefined') {
      
        //Split string based on commas, remove white spaces
        items = string.trim().split(',');

        //count the length of each item in the list, after trimming for whitespace
        itemLengths = items.map(function(phrase){
          return phrase.trim().length;
        })

        console.log(itemLengths);
        console.log(itemLengths.filter(item => item > 0));

        itemCount = itemLengths.filter(item => item > 0).length;

      }

      return itemCount;
    }


  }

})();
