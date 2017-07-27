app.controller('resumeController', ['welcomeFactory','$scope','$location','$routeParams', function(welcomeFactory, $scope, $location, $routeParams) {
  $scope.index = function(){
    console.log("resume controller loaded");
    $scope.loading = 'loading...';
    $scope.pdfUrl = '/imgs/Gaines_resume.pdf';
  }

  $scope.index()
}]);
