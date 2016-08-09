'use strict';
var app = angular.module("knessetAnalyzer", ["ng-fusioncharts"]);
app.controller("mainCtrl", function($scope, $http) {
    $scope.dates = {startDate: new Date(99), endDate: new Date()};
    //$scope.startDate = new Date(99);
    //$scope.endDate = new Date();
    $scope.subjectList = [];
    $scope.sendingAddress = 'localhost';
    $scope.received = false;
    $scope.sent = false;
    //$scope.type = "bar3d"; // Types: bar3d, pie3d, column3d,
    $scope.type = "column3d";
    $scope.types = {
        pie: false,
        bar: true,
        column: false,
        line: false
    }

    $scope.myDataSource = {
                chart: {
                    caption: "Subjects Discussed",
                    subCaption: "Top Subjects between "+$scope.dates.startDate.toDateString()+" and "+$scope.dates.endDate.toDateString(),
                    /*startingangle: "120",
                    showlabels: "0",
                    showlegend: "1",
                    enablemultislicing: "0",
                    slicingdistance: "15",
                    showpercentvalues: "1",
                    showpercentintooltip: "0",
                    plottooltext: "Age group : $label Total visit : $datavalue",
                    theme: "fint"*/
                },
                data:
                [ ]
              };

    $scope.submit = function() {
        console.log("Submit Activated");
        $scope.sent = true;

        // FOR DEBUG ONLY:
        /*
        $scope.sent=false;
        $scope.received = true;
        $scope.myDataSource.data = [{
                    label: "Security",
                    value: "880000"
                },
                {
                    label: "Economy",
                    value: "730000"
                },
                {
                app.get('/datesQuery', function(req, res){
                    var sd = req.body.startDate;
                    var ed = req.body.endDate;
                    var subjects = analyze(sd,ed);
                    res.send(subjects);
                });




                    label: "Money",
                    value: "590000"
                },
                {
                    label: "Peace",
                    value: "520000"
                },
                {
                    label: "Friendly Justice",
                    value: "330000"
                }];
                */
        /////// DELETE WHEN ACTIVE /////

        $http.get("http://"+$scope.sendingAddress+":8000/datesQuery",
                       $scope.dates)
            .success(function(response) {
                $scope.sent = false;
                $scope.received = true;
                $scope.myDataSource.data = response;
            });

    }



    $scope.pieType = function() {
        $scope.type="pie3d";
    }
    $scope.columnType = function() {
        $scope.type="column3d";
    }
    $scope.barType = function() {
        $scope.type="bar3d";
    }
    $scope.lineType = function() {
        $scope.type="line";
    }

});
