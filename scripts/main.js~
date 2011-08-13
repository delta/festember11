var isFloatingMenuVisible = false;
function fixedFloating() {
	var limit = 200;
	return function(){
		var y = $(this).scrollTop();
		if(y >= limit) {
			if(!isFloatingMenuVisible){
				$("#floatingMenu").slideDown(250);
				isFloatingMenuVisible = true;
			}
		}
		else {
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

function imgslideSponsors(container,last){
	var cur = 0,
		ht=123;
	setInterval(function() {
		if(last * -1 * ht + ht >= cur)
			cur=0;
		else
			cur -= ht;
		//$(container + " .slidee").animate({top: cur}, 450);
		$(container + " .slidee").fadeOut(200, function() {
			$(this).css({
				top: cur,
			}).fadeIn(300);
		});
	}, 3000);
}

$(function() {
	
	$("#menu .item").css("opacity", 0);
	setTimeout(function() {
		$("#menu .item").animate({opacity: 1}).delay(100).animate({opacity: 0.5});
	}, 1000);
	
	setInterval(function() {
		$("#menu .item").animate({opacity: 1},"slow").delay(100).animate({opacity: 0.5},"slow");
	}, 5000);
	
	//reloadSponsors();
	imgslideSponsors(".sponser",7);
	//imgslideSponsors(".mediapartners",5);
	
	$(window).scroll(fixedFloating());
	
	//SET CLICK HANDLER FOR ALL AJAX FUNCTIONS
	$("a[ajaxify=1]").click(function(evt){
		evt.preventDefault();

		var to = $(this).attr("href");

		if(typeof window.history.pushState == "function")
			window.history.pushState({'page':to},to,to);
		else
			window.location.hash = "#!" + to;
				
		$(".loaderr").fadeIn(250, function(){
		$.ajax({
			url: to + "&_a=1",
			method: "GET",
			success: function(data) {
				$("#content").html(data);
			},
			error: function(err){
				$("#content").html("SOME ERROR OCCURED.\n" + err);
				console.log(err);
			},
			complete: function(data){
				$(".loaderr").css("display","none");
				defer(to, data);
				//setTimeout(scroller, 100);
				$("#content").fadeIn();
			}
		});
		});
		return false;
	});
	
	function defer(to, data) {
		if(to != "sponsors")
			$(".rightcont").css("display","block");
		switch(to) {
			case "gallery":
					$('#gallery a').lightBox();
			break;
			case "sponsors":
					$(".rightcont").css("display","none");
			break;
		}
		
	}
	
	window.onpopstate = function(event) {
		var to;
		try{
			to = event.state.page;
		} catch(e) {
			return;
		}
		$("#content").fadeOut(200, function(){
			$(".loaderr").fadeIn(250);
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
					$(".loaderr").css("display","none");
					defer(to, data);
					//setTimeout(scroller, 100);
					$("#content").fadeIn();
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
		});
	};
});
