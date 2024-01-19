var app = angular.module("myapp",[]);
app.controller("myctrl",function($scope){
    $scope.welcome = "Welcome to AngularJS"
});

app.controller("mydemo",function($scope){
    $scope.info = {
        fpoly: "FPT Polytechnic",
        course: "Welcome to AngularJS"
    }
});
app.controller("mysum",function($scope){
    $scope.numbera = 0;
    $scope.numberb = 0;
    $scope.handClick = function(){
        $scope.total = parseInt($scope.numbera) + parseInt($scope.numberb)
    }
})