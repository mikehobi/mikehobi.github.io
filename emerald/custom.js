jQuery(document).ready(function ($) {
	function close_all() {
		$('#monday').removeClass('active-state');
		$('#tuesday').removeClass('active-state');
		$('#wednesday').removeClass('active-state');
		$('#thursday').removeClass('active-state');
		$('#friday').removeClass('active-state');
		return false;
	}
	$('.load').click(function() {
			$('.content-loader').addClass('active');
	});
	$('#close').click(function() {
			$('.content-loader').removeClass('active');
	});

	$('.mon').click(function() {
			close_all();
			$('#monday').addClass('active-state');
	});
	$('.tues').click(function() {
			close_all();
			$('#tuesday').addClass('active-state');
	});
	$('.wed').click(function() {
			close_all();
			$('#wednesday').addClass('active-state');
	});
	$('.thurs').click(function() {
			close_all();
			$('#thursday').addClass('active-state');
	});
	$('.fri').click(function() {
			close_all();
			$('#friday').addClass('active-state');
	});
});