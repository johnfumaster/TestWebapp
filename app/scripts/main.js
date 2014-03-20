'use strict';
function getWindowWidth() {
	return $(window).innerWidth();
}

$(function() {
	var isMobile = getWindowWidth() < 768;
	var navWidth = $('.nav-bar').width();

	// window resize breaks IE7-8, so do not resize for them.
	// especially when getting the document height
	if (!$('html').hasClass('lt-ie9')) {
		$(window).on('resize', function() {
			isMobile = getWindowWidth() < 768;
			if (!isMobile) {
				$('.site-container').height('auto');
				$('.site-container').width(getWindowWidth()-navWidth).height($(document).height());
			}
			else {
				$('.site-container').width('inherit').height('inherit');
			}
		});
	}
	if (!isMobile) {
		$('.site-container').width(getWindowWidth()-navWidth).height($(document).height());
	}

	(function mobileEvents() {
		if (isMobile) {
			$('.menu-link').click(function(e) {
				e.preventDefault();
				$('body').toggleClass('nav-opened');
				return false;
			});
		}
	})();
});