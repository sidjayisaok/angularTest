// myApp is exported from myApp.js
// this function is formatted as an OOP
myApp.controller("testController", function($scope){
    $scope.test = {
        firstname: "Sid",
        lastname: "Jay",
        range: {},
        fees: 1234,
        myfees: function(){
            var feesObject;
            feesObject = $scope.test;
            return Math.pow(feesObject.fees,.5);
        },
        fullname: function(){
            var testObject;
            testObject = $scope.test;
            return testObject.firstname + " " + testObject.lastname;
        },
        splitname: function(){
            var splitObject;
            splitObject = $scope.test;
            return splitObject.firstname.split("") + " " + splitObject.lastname.split("");
        }
    };
});