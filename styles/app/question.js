angular.module('myApp').controller('question', function($scope, questSrvc){


    $scope.questions = questSrvc.questions;

    questSrvc.getQuestions().then(questions=>{
        $scope.questions = questions;
    })
})