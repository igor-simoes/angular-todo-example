angular.module('todoApp', []);

angular.module('todoApp').controller('todoController', function ($scope) {
    $scope.app = "todoApp";

    $scope.tasks = [
        {name: "Market", day: "Thursday", hour: "13:00"},
        {name: "Academy", day: "Wednesday", hour: "19:00"},
        {name: "School", day: "Friday", hour: "08:00"}
    ];

    $scope.newTask = function(task){
        $scope.tasks.push(angular.copy(task));
        delete task;
    };

    $scope.removeTasks = function(){
        $scope.tasks = $scope.tasks.filter(function(task){
            if (!task.selections === true) return task;
        });
    };
});
