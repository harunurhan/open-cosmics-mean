//Add the requried module 'angular-ui' as a dependency
angular.module('maptesting', ['ui.map','ui.event']);

function MapCtrl($scope, $http) {
    var ll = new google.maps.LatLng(13.0810, 80.2740);
    $scope.mapOptions = {
        center: ll,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    //Markers should be added after map is loaded
    $scope.onMapIdle = function() {
        if ($scope.myMarkers === undefined){    
            var marker = new google.maps.Marker({
                map: $scope.myMap,
                position: ll
            });
            $scope.myMarkers = [marker, ];
        }
    };

    $scope.markerClicked = function(m) {
        window.alert("clicked");
    };

/* REFERENCE CODE FOR GET REQUEST
    function refresh() {
		$http.get('/api/movies')
			.success(function(data) {
				$scope.movies = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}
	refresh();

	// when submitting the add form, send the text to the node API
	$scope.createMovie = function() {
		$http.post('/api/movies', $scope.formData)
			.success(function(res) {
				refresh();
				$scope.formData = {}; // clear the form so our user is ready to enter another
				console.log('Succes: ' + res);
			})
			.error(function(res) {
				console.log('Error: ' + res);
			});
	};
*/
}