var serviceModule = angular.module('todoApp.service',[]);

serviceModule.service('MainService',['$window',function($window){

	var todos = $window.localStorage['todoMvc'] ? angular.fromJson($window.localStorage['todoMvc']) : [];

	this.getTodos = function(){
		return todos;
	}

	this.save = function(){
		$window.localStorage['todoMvc'] = angular.toJson(todos);
	}

	this.addTodo = function(text){
		var id = new Date().getTime();
		todos.push({text:text,completed:false,id:id});
		this.save();
	}

	this.removeTodo = function(index){
		todos.splice(index,1);
		this.save();
	}

	this.leftCount = function(){
		var count = 0;
		for(var i = 0; i < todos.length; i++){
			if(!todos[i].completed){
				count++;
			}
		}
		return count;
	}

	this.toggleAllCompleted = function(status){
		for(var i = 0; i < todos.length; i++){
				todos[i].completed = status;
			}
			this.save();
	}

	this.existCompleted = function(){
		for(var i = 0; i < todos.length; i++){
			if(todos[i].completed){
				return true;
			}
		}
		return false;
	}

	this.clearCompleted = function(){
		// var r = [];
		// for(var i = 0; i < todos.length; i++){
		// 	if(!todos[i].completed){
		// 		r.push(todos[i]);
		// 	}
		// }
		// todos = r;
		 
		for(var i = 0; i < todos.length; i++){
			if(todos[i].completed){
				todos.splice(i,1);
				i--;
			}
		}
		this.save();
	}

}])