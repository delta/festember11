$("#menu .item").hover(function() {	
	$(this).stop().animate({opacity: 1},250);
}, function() {
	$(this).stop().animate({opacity: 0.5});
});
$("#floatingMenu .item").hover(function() {	
	$(this).stop().animate({opacity: 1},250);
}, function() {
	$(this).stop().animate({opacity: 0.5});
});
