(function(){
	angular.module('todoApp.directives',[]).directive('focus',['$timeout',function($timeout){

		return{
			link: function($scope, iElm, iAttrs, controller){
				$scope.$watch(iAttrs.focus,function(now){
					if(now){
						$timeout(function(){
							iElm[0].focus();
						},0)
					}
				})
			}
		}

	}])


})()