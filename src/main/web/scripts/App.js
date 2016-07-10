'use strict';
var app = angular.module("knessetAnalyzer", []); 
app.controller("mainCtrl", function($scope, $http) {
    $scope.dates = {startDate: new Date(99), endDate: new Date()};
    //$scope.startDate = new Date(99);
    //$scope.endDate = new Date();
    $scope.subjectList = [];
    $scope.sendingAddress = 'localhost';
    $scope.received = false;
    $scope.sent = false;
    
    $scope.submit = function() {
        console.log("Submit Activated");
        $scope.sent = true;
        
        // FOR DEBUG ONLY:
        $scope.sent=false;
        $scope.received = true;
        $scope.subjectList = ['Security', 'Economy', 'Stupid Muslims', 'terror', 'friendly justice'];
        /////// DELETE WHEN ACTIVE /////
        
        $http.post("http://"+$scope.sendingAddress+":3000/datesQuery", 
                       $scope.dates)
            .success(function(response) {
                $scope.sent = false;
                $scope.received = true;
                $scope.subjectList = response;
            });
        
    }
    
});