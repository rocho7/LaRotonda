angular.module('app.directives', [])

.directive('logoMain', [function(){
  return{
    restrict:"E",
    templateUrl:"templates/logo.html",
    controller:function($scope, $timeout) {
    $timeout(function (){
        window.location = 'http://localhost:8100/#/page1/tab1/form'
      }, 5000);
    }
  }
}])
.directive('formData', function(){
  return{
    restrict:"E",
    templateUrl:"templates/form.html",
    controller: function($scope, formlyConfig, $cordovaDatePicker){
      //CREATE A NEW FORMLY type
      formlyConfig.setType({
        name:'inputDatePicker',
        templateUrl:'inputDatePicker.html',//Include in form.html
        defaultOptions:{}
      });

      $scope.formData = [{
        text:'proof',
        email:'proof@proof.com',
        startDateTime: '1995-11-12'
      }];

      $scope.doSubmit = function(){
        console.log($scope.formData.text+" email "+$scope.formData.email);
        //alert(JSON.stringify($scope.formData, null, 2));

        //Add appointment into array
        $scope.formData.push({
          text:$scope.formData.text,
          email:$scope.formData.email,
          startDateTime:$scope.formData.startDateTime
        });

      }

      $scope.formFields = [
        {
          "type": "input",
          "key": "text",
          "templateOptions": {
            "type": "text",
            "placeholder": "My name",
            "icon": "ion-person",
            required:true,
            "iconPlaceholder": true
          }
        },
        {
          "type": "input",
          "key": "email",
          "templateOptions": {
            "type": "email",
            "placeholder": "example@example.com",
            "icon": "ion-email",
            required:true,
            "iconPlaceholder": true
        }
      },
      {
        "type":'inputDatePicker',
        "key":'startDateTime',
        "templateOptions":{
          "dateFormat":'medium',//used with the date filter for display
          onclick : function($modelValue, $options){
            //options for the datePicker plugin, see documentation
            var options = {
                "date": new Date(),
                "mode": 'datetime', // or 'time'
                "minDate": new Date(),
                "allowOldDates": true,
                "allowFutureDates": false,
                "doneButtonLabel": 'DONE',
                "cancelButtonLabel": 'CANCEL'
              };
            //When the user clicks, call the datePicker
            $cordovaDatePicker.show(options).then(function(_date){
              $modelValue[$options.key] = _date;
            });
          }
        }
      }]
    }
  }
})
.directive("rememberAppointment", function(){
  return{
    restrict:'E',
    templateUrl:'templates/calendar.html',
    scope: true
  };
})
