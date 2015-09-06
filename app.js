angular.module('todoApp', []);

angular.module('todoApp').controller('todoController', function ($scope) {
    $scope.app = "todoApp";

    $scope.tasks = [
        {name: "Market", day: "Thursday", hour: "13:00"},
        {name: "Academy", day: "Wednesday", hour: "19:00"},
        {name: "School", day: "Friday", hour: "08:00"},
    ];


});
