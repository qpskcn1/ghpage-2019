(function ($) {
    'use strict'
    // init Isotope
	var $grid = $('.grid').isotope({
		// options
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
	$('.button-group button').on('click', function(){
		$('.button-group button').removeClass('active');
		$(this).addClass('active');
	});
}(jQuery));