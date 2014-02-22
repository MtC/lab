angular.module('MtClab', ['ngRoute','ngTouch','pascalprecht.translate'])
    
    .config(function($locationProvider, $translateProvider, $httpProvider, $routeProvider) {
        $httpProvider.defaults.useXDomain = true;
		if (!$httpProvider.defaults.headers.get) {
			$httpProvider.defaults.headers.get = {};    
		}
		$httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
        $locationProvider.html5Mode(false).hashPrefix('!');
        $translateProvider.translations('nl', {
            'menu.home':    'nieuws',
            'menu.app':     'apps',
            'menu.options': 'opties',
            'menu.feedback':'feedback',
            'menu.user':    'gebruiker',
            'menu.login':   'inloggen',
            'menu.logout':  'uitloggen',
            'menu.about':   'over ons',
            'menu.contact': 'contact'
        });
        $translateProvider.preferredLanguage('nl');
        $routeProvider.
			when('/:url*', {
				templateUrl: function (url) {
					return 'api/templates/' + url.url;
				}
			}).
			otherwise({ redirectTo: '/index'});
    })
    
    .controller('NavigationCtrl', ['$scope','$location',function ($scope, $location) {
            $scope.url = {
                home:     '',
                apps:     'apps',
                options:  'opties',
                feedback: 'feedback',
                user:     'gebruiker',
                login:    'inloggen',
                about:    'over-nt2lab',
                contact:  'contact'
            };
            $scope.isMenuHidden = true;
            
            $scope.menu = function () {
                $scope.isMenuHidden = !$scope.isMenuHidden;
            };
            
            $scope.goto = function (location) {
                $scope.isMenuHidden = true;
                $location.path(location);
            };
    }])

    .run(['$rootScope', function ($rootScope) {
        
    }]);