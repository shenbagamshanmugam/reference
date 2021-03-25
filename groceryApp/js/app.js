var app = angular.module('groceryApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when("/",{
			templateUrl:"views/grocerylist.html",
			controller:"HomeController"
		})
		.when("/inputitem",{
			templateUrl:"views/inputitem.html",
			controller:"listController"
		})
		.when("/inputitem/edit/:id/",{
			templateUrl:"views/inputitem.html",
			controller:"listController"
		})
		.otherwise({
			redirectTo:"/"
		})
});



app.service('groceryservice',function(){
	var groceryservice = [];

	groceryservice.groceryItems = [
		{id: 1, completed: false, itemName: 'Chocolate', date: '2018/06/01'},
		{id: 2, completed: false, itemName: 'Milk', date: '2018/06/02'},
		{id: 3, completed: false, itemName: 'Cookie', date: '2018/06/03'},
		{id: 4, completed: false, itemName: 'Egg', date: '2018/06/04'},
	];

	groceryservice.findById = function(id){
	for(var item in groceryservice.groceryItems){

		if (groceryservice.groceryItems[item].id == id) {
			return groceryservice.groceryItems[item];
		}
		
	}
};


	groceryservice.getNewId = function(){
		if (groceryservice.newId) {
			groceryservice.newId++;
			//console.log(groceryservice.newId);
			return groceryservice.newId;
		}
		else{
			var maxId = _.max(groceryservice.groceryItems,function(entry){
				return entry.id;
			});
			groceryservice.newId = maxId.id + 1;
			return groceryservice.newId;
		}
		
	};
	
	groceryservice.removeItem = function(entry){
		var index = groceryservice.groceryItems.indexOf(entry);
		groceryservice.groceryItems.splice(index,1);
	};

	groceryservice.itemToggle = function(entry){
		entry.completed = !entry.completed;
	};

	groceryservice.save = function(entry){

		var updateItem = groceryservice.findById(entry.id);
		if(updateItem){
			updateItem.completed = entry.completed;
			updateItem.itemName = entry.itemName;
			updateItem.date = entry.date;
		}
		else{
		entry.id = groceryservice.getNewId();
		groceryservice.groceryItems.push(entry);
	}
	};
	
	return groceryservice;
});


app.controller("HomeController",['$scope','groceryservice',function($scope,groceryservice){
	$scope.appTitle = "GroceryList";
	$scope.groceryItems = groceryservice.groceryItems;
	$scope.removeItem = function(entry){
		groceryservice.removeItem(entry);
	};
	$scope.itemToggle = function(entry){
		groceryservice.itemToggle(entry);
	};
}]);

app.controller("listController",['$scope','$routeParams','groceryservice','$location',function($scope,$routeParams,groceryservice,$location){
	
	/*$scope.rd = "Route parameter value :" + $routeParams.id;*/ 
	if(!$routeParams.id){
		$scope.groceryItem = {id:0, completed:false, itemName:'', date: new Date()};

	}
	else{
		$scope.groceryItem = _.clone(groceryservice.findById(parseInt($routeParams.id)));
	}
	
	$scope.save = function(){
		groceryservice.save($scope.groceryItem);
		$location.path("/");
	}
	/*console.log($scope);*/
	//console.log($scope.groceryItems);
}]);

app.directive("groceryList",function(){
	return{
		restrict : "E",
		templateUrl:"views/groceryview.html"
	}
});