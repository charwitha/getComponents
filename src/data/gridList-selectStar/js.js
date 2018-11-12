$(document).ready(function() {
	var $gridListStar = $('.gridList-selectStar');
	var fillStar = function(gridList) {
		$gridList = gridList;
		var $checkbox = $gridList.find('.select-box');
		$checkbox.click (function() {
			$(this).find('i').toggleClass('fa fa-star fa fa-star-o');
		});
	};
	$gridListStar.each(function() {
		fillStar($(this));
	});
});