$(document).ready(function() {
	var $gridListUnEven = $('.gridList-unEven2');
	var calcPattern = function(gridList) {
		var $gridList = gridList;
		var scrWidth = $(window).width();
		var len = $gridList.find('li').length;
		var a, b;
		if(scrWidth > 640) {
			for(var i = 0; i < len; i = i + 8) {
				$gridList.find('li').eq(i).css('width', 604).css('height', 400);
			}
			for(var j = 3; j < len; j = j + 8) {
				$gridList.find('li').eq(j).css('width', 604).css('height', 400);
			}
		}
	};	
	$gridListUnEven.each(function() {
		calcPattern($(this));
	});
});