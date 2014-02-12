'use strict';

/* Directives */


angular.module('myApp.directives', []).
	directive('imagesrow', function() {
		return {
			restrict: 'A',
			link: function (scope, elem, attrs) {
				var counter = 5;
				var images = (angular.element(elem).find('img'));
				for (var i = images.length - 1; i >= 0; i--) {
					images[i].addEventListener(
						"load",
						function(){
							counter--;
							if (counter==0) {
								var scalingPercentage = 0, imagesWidth = 0;
								for (var i = images.length - 1; i >= 0; i--) {
									imagesWidth += images[i].width+4;
								};
								scalingPercentage = (document.getElementById("tiledImagesContainer").offsetWidth-30) / (imagesWidth / 100);
								for (var i = images.length - 1; i >= 0; i--) {
									images[i].width = (images[i].width/102)*scalingPercentage;
								};
							};

						},
						false);
				}
			}
		}

	});

