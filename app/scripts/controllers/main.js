'use strict';

angular.module('myappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

var ctrl = angular.module('myApp.controllers', []);

ctrl.controller('MyCtrl', ['$scope', '$q', 'pp', function($scope, $q, pp) {

  $scope.score = {};

  $q.all([
    pp.getScore('1'),
    pp.getScore('2'),
    pp.getScore('3')
  ]).then(function(res) {
      $scope.score['1'] = res[0];
      $scope.score['2'] = res[1];
      $scope.score['3'] = res[2];
    });
  $q.all([
      pp.sync()
    ]).then(function(res) {
      console.dir(res);
    });

  $scope.incScore = function(id) {
    pp.add(id)
      .then(function(res) {
        return pp.getScore(id);
      })
      .then(function(score) {
        $scope.score[id] = score;
      })
  }

}]);
