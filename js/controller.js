(function(){

	var controllerModule = angular.module('todoApp.controller',['ngRoute','todoApp.service']);

	controllerModule.controller('MainController',['$scope','$location','$routeParams','MainService',function($scope,$location,$routeParams,MainService){
		$scope.text = "",
		
		$scope.todos = MainService.getTodos();

		$scope.addTodo = function(){
			if($scope.text.length == 0){return}
			MainService.addTodo($scope.text);
			$scope.text = "";
		}

		$scope.removeTodo = function(index){
			MainService.removeTodo(index);
		}

		$scope.toggleCompleted = function(){
			MainService.save();
		}

		$scope.editIndex = -1;
		$scope.editTodo = function(e,index){
			$scope.editIndex = index;
		}

		$scope.saveTodo = function(){
			// if(event.keyCode == 13){
				$scope.editIndex = -1;
			// }
		}

		$scope.leftCount = function(){
			var count = MainService.leftCount();
			$scope.allChecked = !count;
			return count;
		}

		$scope.toggleAll = function(){
			MainService.toggleAllCompleted(!$scope.allChecked);
		}

		$scope.clearCompleted = function(){
			MainService.clearCompleted();
		}

		$scope.existCompleted = function(){
			return MainService.existCompleted();
		}

		// $scope.all = function(){
		// 	$scope.search = '';
		// }

		// $scope.active = function(){
		// 	$scope.search = {completed:false};
		// }

		// $scope.completed = function(){
		// 	$scope.search = {completed:true};
		// }
		// 
		// $scope.location = $location;
		// $scope.$watch('location.path()',function(){
		// 	switch($location.path()){
		// 		case '/active':
		// 			$scope.search = {completed:false};
		// 			break;
		// 		case '/completed':
		// 			$scope.search = {completed:true};
		// 			break;
		// 		default:
		// 			$scope.search = {};
		// 			break;
		// 	}
		// })
		
		$scope.status = $routeParams.status || '';
		console.log($routeParams.status);
		switch($routeParams.status){
			case 'active':
				$scope.search = { completed: false }
                break;
            case 'completed':
                $scope.search = { completed: true }
                break;
            default:
                $scope.search = {};
                $scope.status = '';
                break;
		}

	}])


})(window)