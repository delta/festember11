<?php 
$DOMAIN_NAME=$_SERVER['SERVER_NAME']; //like linkpit.co.cc. leave untouched if not sure.
$SUB_DIR = (dirname($_SERVER['SCRIPT_NAME'])=='/')?'/':dirname($_SERVER['SCRIPT_NAME']).'/'; //could be dir1/dir2/dir3/linkpit. Leave blank if in root. Must end with a slash.
$FULLPATH = 'http://' . $DOMAIN_NAME . $SUB_DIR;
header('X-XRDS-Location:' . $FULLPATH . 'yadis.xrdf');
session_start();
/** <Login Related Shit **/
  try {
      function openid_auth($openid_url)
      {
          if (isset($openid_url)) {
              global $FULLPATH;
              $openid = new Dope_OpenID($openid_url);
              $openid->setReturnURL($FULLPATH);
              $openid->SetTrustRoot($FULLPATH);
              $openid->setOptionalInfo(array('nickname', 'fullname', 'email'));
              $endpoint_url = $openid->getOpenIDEndpoint();
              
              if ($endpoint_url) {
                  // If we find the endpoint, you might want to store it for later use.
                  $_SESSION['openid_endpoint_url'] = $endpoint_url;
                  // Redirect the user to their OpenID Provider
                  
                  $openid->redirect();
                  // Call exit so the script stops executing while we wait to redirect.
                  exit;
              } else {
                  //echo 'EPURL'.$endpoint_url;
                  /*
                   * Else we couldn't find an OpenID Provider endpoint for the user.
                   * You can report this error any way you like, but just for demonstration
                   * purposes we'll get the error as reported by Dope OpenID. It will be
                   * displayed farther down in this file with the HTML.
                   */
                  $the_error = $openid->getError();
                  $error = "Error Code: {$the_error['code']}<br />";
                  $error .= "Error Description: {$the_error['description']}<br />";
                  echo $error;
              }
          }
      }
      //OpenID authentication finalising when returning from the Provider's website
      if (isset($_GET['openid_mode'])) {
          //<-----This happens when the provider calls our page
          if ($_GET['openid_mode'] == 'cancel') {//<------either telling that user cancell the authentication.....
              /*TODO Have to log this error message instead of displaying it*/
              echo 'User has canceled authentication!';
              exit();
          } else {//<--------....or giving us all the required info that user passed authentication
              require_once 'class.dopeopenid.php';
              $openid_url = $_GET['openid_identity'];
              $openid = new Dope_OpenID($openid_url);
              $validate_result = $openid->validateWithServer();
              $_SESSION['OPENID_AUTH'] = ($validate_result ? true : false);
              $_SESSION['OPENID_IDENTITY'] = $_GET['openid_identity'];
              $user_data = $openid->filterUserInfo($_GET);
              /*The following code tries to set the $_SESSION['OPENID_WELCOME_NAME']
               first by the ClaimID itself. If the information like the first name or email
               address is provided, they are used as the $_SESSION['OPENID_WELCOME_NAME']
               for welcoming the user.*/
              $_SESSION['OPENID_WELCOME_NAME'] = $_GET['openid_identity'];
              
              if (isset($user_data['fullname']))
                  $_SESSION['OPENID_WELCOME_NAME'] = $user_data['fullname'];
              elseif (isset($user_data['nickname']))
                  $_SESSION['OPENID_WELCOME_NAME'] = $user_data['nickname'];
              elseif (isset($user_data['email']))
                  $_SESSION['OPENID_WELCOME_NAME'] = $user_data['email'];
              //echo($user_data['namePerson/first']);
              header('Location: ' . $FULLPATH);
          }
      }
  }
  catch (ErrorException $e) {
      echo "Error ";
      echo $e->getMessage();
  }
  
  //Give the $logged_in variable it's value
  $logged_in = false;
  $recent_linkpit = array();
  if (!isset($_SESSION['OPENID_AUTH']) || $_SESSION['OPENID_AUTH'] == false)
      //user not logged in
      $logged_in = false;
  else {
      //turn $logged_in to true and connect to DB to retrieve information on recent linkpits
      global $recent_linkpit;
      $logged_in = true;
      $dbp = dbConnect();
      $query = "SELECT tag FROM linkpit_redirections WHERE tagger='" . $_SESSION['OPENID_IDENTITY'] . "' ORDER BY reg_date DESC LIMIT 5;";
      //echo $query;
      if ($res = mysql_query($query)) {
          while ($row = mysql_fetch_assoc($res))
              array_push($recent_linkpit, $row['tag']);
          //print_r($recent_linkpit);
      } else {
          die("DB Error while fetching recent linkpit");
      }
      mysql_close($dbp);
  }

if (!isset($_GET['openid_mode']) && isset($_GET['openid_identifier'])) {
  $openid_url = $_GET['openid_identifier'];
  require 'class.dopeopenid.php';
  openid_auth($openid_url);
}
/** </Login Related Shit **/
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
		<link rel="stylesheet" href="./styles/slider.css" type="text/css" media="screen" />
		<script type="text/javascript" src="./scripts/jquery.min.js"></script>
		<script type="text/javascript" src="./scripts/jquery.lightbox-0.5.js"></script>
		<script type="text/javascript" src="./scripts/main.js"></script>
	<!-- Simple OpenID Selector -->
	<link type="text/css" rel="stylesheet" href="styles/openid.css" />
	<script type="text/javascript" src="scripts/openid-jquery.js"></script>
	<script type="text/javascript" src="scripts/openid-en.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			openid.init('openid_identifier');
			//	openid.setDemoMode(true); //Stops form submission for client javascript-only test purposes
		});
	</script>
	<!-- /Simple OpenID Selector -->

<script type="text/javascript">
	  //login slider
$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});
</script>
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
	
	</div><!-- container -->
	<div class="contentouter">
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
			<div class="rightcont">
				<div class="sponser"><a href="" id="sponsora" target="_blank" ><div id="sponsorimg"></div></a></div>
			</div>
			<div class="clearer"></div>
		</div>
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
	<!-- Container </div> -->
	<div class="fglow"></div>
	<div class="footer">
		<a href="http://www.festember.in/"><span class="flogo"></span></a>
		<!--<div class="shoe">
			Designed and Maintained by Webteam, NIT Trichy
		</div>-->
		<div class="shoe" style="">
			For Sponsorship, contact <b><em>marketing@festember.in</em></b>
		</div>
	</div>

<div class="panel">
	
		<!-- Simple OpenID Selector -->
	<form action="" method="get" id="openid_form">
		<input type="hidden" name="action" value="verify" />

			<div id="openid_choice">

				<div id="openid_btns"></div>
			</div>
			<div id="openid_input_area">
				<input id="openid_identifier" name="openid_identifier" type="text" value="http://" />
				<input id="openid_submit" type="submit" value="Sign-In"/>
			</div>
			<noscript>
				<p>OpenID is service that allows you to log-on to many different websites using a single indentity.
				Find out <a href="http://openid.net/what/">more about OpenID</a> and <a href="http://openid.net/get/">how to get an OpenID enabled account</a>.</p>
			</noscript>

	</form>
	<!-- /Simple OpenID Selector -->
</div>
<a class="trigger" href="#">Login</a>

	</body>
</html>
<?php
endif;
?>
