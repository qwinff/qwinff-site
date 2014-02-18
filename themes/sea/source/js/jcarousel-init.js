(function($) {
	$(function() {
		$(".jcarousel").jcarousel({
			wrap: "circular",
		})
		.jcarouselAutoscroll({
			interval: 500,
			autostart: true,
		});
	});
})(jQuery);
