$(document).ready(function() {
	var $gridListH = $('.gridList-Horizontal');
	var calcWidth = function(gridList) {
		var $gridList = gridList;
		var width = $gridList.find('li').width();
		var len = $gridList.find('li').length;
		var totalWidth = width * (len + 0.25);
		/*console.log(totalWidth);*/
		$gridList.find('ul').css('width', totalWidth);
	};
	$gridListH.each(function() {
		calcWidth($(this));
	});
});
