<?php 
echo "<!doctype html>\n";
if(isset($_GET["_a"])):
	$page = "home";
	if(isset($_GET["page"]))
		$page = $_GET["page"];
	if(file_exists("./pages/" . $page . ".php")):
		include("./pages/" . $page . ".php");
	else:
?>
<div style="text-align:center">
	<img src="./images/error404.jpg" />
</div>
<?php
	exit(1);
endif;
else:
?>
<html>
	<head>
		<title>Festember 11</title>
		<link rel="shortcut icon" href="./images/favicon.png" >
		<link href="./styles/main.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" type="text/css" href="./styles/jquery.lightbox-0.5.css" media="screen" />
		<link rel="stylesheet" href="./styles/nivo-default.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="./styles/nivo-slider.css" type="text/css" media="screen" />
		
		<script type="text/javascript" src="./scripts/jquery.min.js"></script>
		<script type="text/javascript" src="./scripts/jquery.lightbox-0.5.js"></script>
		<script type="text/javascript" src="./scripts/main.js"></script>
	</head>
	<noscript>
		<style type="text/css">
			#bodycontainer{display:none;}
		</style>
		<div class="noscriptmsg" onclick="window.location.reload()">
			Enable Javascript in your browser and refresh the page
		</div>
	</noscript>
	<body>
	<div id="bodycontainer">
	<script type="text/javascript">
		if(typeof CONSTRUCT == "function")
			CONSTRUCT.apply(this, []);
	</script>	
	
	<div id="headerlogo"></div>
	
	<div class="clearer"></div>
	
	<div class="scroller">
		<div id="slider" class="nivoSlider">
                <img src="images/pic.png" alt="" />
                <img src="images/pic2.png" alt="" title="" />
                <img src="images/pic3.png" alt="" />
                <img src="images/pic4.png" alt="" />
                <img src="images/pic5.png" alt="" />
        </div>
    </div>
	
	<script type="text/javascript" src="./scripts/jquery.nivo.slider.pack.js"></script>
    <script type="text/javascript">
    $(window).load(function() {
        $('#slider').nivoSlider();
    });
    </script>
	
	<div class="clearer"></div>
	
	<div class="contentcontainer">
		<div id="content">
			<?php 
				$page = "home";
				if(isset($_GET["page"]))
					$page = $_GET["page"];

				if(file_exists("./pages/" . $page . ".php")):
					include("./pages/" . $page . ".php");
				else:
			?>
				<div style="text-align:center">
					<img src="./images/error404.jpg" />
				</div>
			<?php
				endif;
			?>
		</div>
	</div>
	
	
	
	
	
	<div id="menu">
		<div class="events item itleft abso"><a href="events" ajaxify="1"><img src="./images/events.png" /></a></div>
		<div class="pronite item itleft abso"><a href="pronite" ajaxify="1"><img src="./images/pronite.png" /></a></div>
		<div class="workshops item itleft abso"><a href="workshops" ajaxify="1"><img src="./images/workshops.png" /></a></div>
		<div class="sponsors item itright abso"><a href="sponsors" ajaxify="1"><img src="./images/sponsors.png" /></a></div>
		<div class="gallery item itright abso"><a href="gallery" ajaxify="1"><img src="./images/gallery.png" /></a></div>
		<div class="contacts item itright abso"><a href="contacts" ajaxify="1"><img src="./images/contacts.png" /></a></div>
	</div>
	
	<div id="floatingMenu">
		<div class="home item"><a href="home" ajaxify="1"><span>HOME</span></a></div>
		<div class="events item"><a href="events" ajaxify="1"><span>EVENTS</span></a></div>
		<div class="pronite item"><a href="pronite" ajaxify="1"><span>PRONITE</span></a></div>
		<div class="workshops item"><a href="workshops" ajaxify="1"><span>WORKSHOPS</span></a></div>
		<div class="sponsors item"><a href="sponsors" ajaxify="1"><span>SPONSORS</span></a></div>
		<div class="gallery item"><a href="gallery" ajaxify="1"><span>GALLERY</span></a></div>
		<div class="contacts item"><a href="contacts" ajaxify="1"><span>CONTACTS</span></a></div>
	</div>
	
	<script src="./scripts/make.js"></script>
	
	<?php if($page == "gallery"): ?>
	<script type="text/javascript">
	$(function() {	$('#gallery a').lightBox(); });
	</script>
	<?php endif; ?>
	<script type="text/javascript">
	if(typeof DESTRUCT == "function")
		DESTRUCT.apply(this, []);
	</script>
	</div>
	<div class="fglow"></div>
	<div class="footer">
		<a href="http://www.festember.in/"><span class="flogo"></span></a>
		<div class="sponser"><a href="" id="sponsora" target="_blank" ><div id="sponsorimg"></div></a></div>
		<!--<div class="shoe">
			Designed and Maintained by Webteam, NIT Trichy
		</div>-->
		<div class="shoe" style="">
			For Sponsorship, contact <b><em>marketing@festember.in</em></b>
		</div>
	</div>
	</body>
</html>
<?php
endif;
?>
