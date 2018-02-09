angular.module('myapp').service('questSrvc', function($http){
    
    this.getQuestions = function(){
        return $http.get('https://practiceapi.devmountain.com/').then(resp => {
            return resp.data.results
        })
    }
}
)