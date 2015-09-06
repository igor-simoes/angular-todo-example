angular.module('todoApp', []);

angular.module('todoApp').controller('todoController', function ($scope) {
    $scope.app = "todoApp";

    $scope.tasks = [
        {name: "Market", day: "Thursday", hour: "13:00", status:"Waiting"},
        {name: "Academy", day: "Wednesday", hour: "19:00", status:"Waiting"},
        {name: "School", day: "Friday", hour: "08:00", status:"Waiting"}
    ];

    $scope.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    $scope.status = ["Waiting","Complete"];

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
            if (task.status==="Waiting") task.selections = true;
        });
    };

    $scope.isSelect = function(tasks){
      return tasks.some(function(task){
        return task.selections;
      });
    };

    $scope.finish = function(task){
        task.status = "Complete";
        $scope.completed = "btn btn-success";
    };

});
