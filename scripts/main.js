var isFloatingMenuVisible = false;
function fixedFloating() {
	var limit = 200;
	return function(){
		var y = $(this).scrollTop();
		if(y >= limit) {
			//$(".itleft").addClass("fixe").removeClass("abso");
			//$(".itright").addClass("fixe").removeClass("abso");
//			$(".itleft").animate({position: "fixed", left: 0, top: 0}).removeClass("abso");
			if(!isFloatingMenuVisible){
				$("#floatingMenu").slideDown(250);
				isFloatingMenuVisible = true;
			}
		}
		else {
			//$(".itleft").removeClass("fixe").addClass("abso");
			//$(".itright").removeClass("fixe").addClass("abso");
			if(isFloatingMenuVisible){
				$("#floatingMenu").slideUp(250);
				isFloatingMenuVisible = false;
			}
		}
	}
}

function reloadSponsors() {
	var sname=new Array('esparsha','twenty19');
	var slink=new Array('http://esparsha.com/','http://www.twenty19.com/');
	var i=1;
	function sponsor() {
		if(i>sname.length)
			i=1;
		$("#sponsorimg").css({background: "url(./images/s"+i+".jpg)"}).parent().attr("title",sname[i-1]).attr("href",slink[i-1]);
		i++;
		setTimeout(sponsor,5000);
	}
	sponsor();
}

$(function() {
	
	$("#menu .item").css("opacity", 0);
	setTimeout(function() {
		$("#menu .item").animate({opacity: 1}).delay(100).animate({opacity: 0.5});
	}, 1000);
	
	setInterval(function() {
		$("#menu .item").animate({opacity: 1},"slow").delay(100).animate({opacity: 0.5},"slow");
	}, 5000);
	
	reloadSponsors();
	
	$(window).scroll(fixedFloating());
	
	//SET CLICK HANDLER FOR ALL AJAX FUNCTIONS
	$("a[ajaxify=1]").click(function(evt){
		evt.preventDefault();

		var to = $(this).attr("href");

		if(typeof window.history.pushState == "function")
			window.history.pushState(null,"events",to);
		else
			window.location.hash = "#!" + to;

		$.ajax({
			url: to + "&_a=1",
			method: "GET",
			success: function(data) {
				$("#content").html(data);
			},
			error: function(err){
				$("#content").html("SOME ERROR OCCURED.\n" + err);
			},
			complete: function(data){
				defer(to, data);
				//$(document).animate({scrollTop: 220}, 1000);
				//$(document).scrollTop(220);
				setTimeout(scroller, 100);
				
				function scroller() {
					if( parseInt($(document).scrollTop()) < 220 ){
						$(document).scrollTop(parseInt($(document).scrollTop()) + 2 );
						setTimeout(function(){
							scroller();
						}, 1);
						
					}
				}
			}
		});
		return false;
	});
	
	function defer(to, data) {
		switch(to) {
			case "gallery":
				$(function() {
					$('#gallery a').lightBox();
				});
			break;
		}
		
	}
	
	window.onpopstate = function() {

	};
});
