angular.module('app.controllers', ['ionic', 'formlyIonic', 'ngCordova'])
/*
.controller('logoCtrl', function($scope, $timeout) {
$timeout(function (){
  window.location = 'http://localhost:8100/#/page1/tab1/form'
}, 5000);

})
*/

.controller('formCtrl', function($scope) {

})
.controller('calendarCtrl', function($scope) {
  $scope.deleteTask = function(item){
    $scope.formData.splice(item,1);
      console.log("hola" +item);
  };
})
