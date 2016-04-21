angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('tabsController.logo', {
    url: '/',
    views: {
      'tab1': {
        templateUrl: 'templates/logo.html'
        //controller: 'logoCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.form'
      2) Using $state.go programatically:
        $state.go('tabsController.form');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/form
      /page1/tab2/form
  */

  .state('tabsController.form', {
    url: '/form',
    views: {
      'tab1': {
        templateUrl: 'templates/form.html',
       //controller: 'formCtrl'
      },
      'tab2': {
        templateUrl: 'templates/form.html',
        //controller: 'formCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.calendar'
      2) Using $state.go programatically:
        $state.go('tabsController.calendar');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/calendar
      /page1/tab2/calendar
  */
  .state('tabsController.calendar', {
    url: '/calendar',
    views: {
      'tab3': {
        templateUrl: 'templates/calendar.html',
        //controller: 'calendarCtrl'
      },
      'tab2': {
        templateUrl: 'templates/calendar.html',
        //controller: 'calendarCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/')



});
