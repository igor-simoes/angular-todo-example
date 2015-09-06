angular.module('todoApp', []);

angular.module('todoApp').controller('todoController', function ($scope) {
    $scope.app = "todoApp";

    $scope.tasks = [
        {name: "Market", day: "Thursday", hour: "13:00"},
        {name: "Academy", day: "Wednesday", hour: "19:00"},
        {name: "School", day: "Friday", hour: "08:00"}
    ];

    $scope.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    $scope.newTask = function(task){
        $scope.tasks.push(angular.copy(task));
        delete $scope.task;
    };

    $scope.removeTasks = function(){
        $scope.tasks = $scope.tasks.filter(function(task){
            if (!task.selections === true) return task;
        });
    };

    $scope.selectAll = function(){
        $scope.tasks.forEach(function(task){
            task.selections = true;
        });
    };

    $scope.isSelect = function(tasks){
      return tasks.some(function(task){
        return task.selections;
      });
    };

});
