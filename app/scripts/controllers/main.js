'use strict';

/**
 * @ngdoc function
 * @name yeomanTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTestApp
 */
angular.module('yeomanTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    $scope.addTodo = function () {
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};
    $scope.removeTodo = function (index) {
  		$scope.todos.splice(index, 1);
	};
  });
