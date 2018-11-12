$(document).ready(function() {
	var $gridListUnEven = $('.gridList-unEven1');
	var calcPattern = function(gridList) {
		var $gridList = gridList;
		var scrWidth = $(window).width();
		var len = $gridList.find('li').length;
		var a, b;
		if(scrWidth > 640) {
			for(var i = 0; i < len; i++) {
				a = (5 * i) + 1;
				b = (5 * i) + 2;

				if(a % 2 == 0) {
					$gridList.find('li').eq(a-1).css('width', 404);
				} else if (b % 2 == 0) {
					$gridList.find('li').eq(b-1).css('width', 404);
				}
			}
		} else {
			$gridList.find('li').css('width', 300);
		}
	};	
	$gridListUnEven.each(function() {
		calcPattern($(this));
	});
});
