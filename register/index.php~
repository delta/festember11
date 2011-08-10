
<head><title>Festember</title></head>
<link href="style/main.css" rel = "stylesheet" type="text/css">
<link href="style/other.css" rel = "stylesheet" type="text/css">
<link href="style/register.css" rel = "stylesheet" type="text/css">
<link rel="shortcut icon" href="images/favicon.png" >
<script src="script/register.js" language="javascript">
	<style type="text/css">
		#r_form{display:block;}
	</style></script>
    <!--[if lte IE 9]>
	

	<style type="text/css">#outercontainer{left:230px;position:relative;}
	#r_form{
	position:relative;
	left:250px;
	}
	body{
	font-size:10px;
	}
	</style><![endif]-->

<body>
<noscript>
	<style type="text/css">
		#r_form{display:none;}
	</style>
    <div class="noscriptmsg" onclick="window.location.reload()">
    Enable Javascript in your browser and click here to continue
    </div>
</noscript>
<?php
session_start();
require("./connect.php");
if( ($_POST['sname']!=NULL)&&(!(!isset($_SESSION['OPENID_AUTH']) || $_SESSION['OPENID_AUTH'] == false)) ){
//if( ($_POST['sname']!=NULL) ){	
	foreach($_POST as $key=>$val)
		{$$key=(get_magic_quotes_gpc()?$val:addslashes($val));}
	
	$query = "SELECT `sname` FROM `festemberRegistrant`.`login`";
	$result = @mysql_query($query)
	or die("Contact admin! Error occured in Data Fetching");
	while($arr = mysql_fetch_row($result)){
	if($sname == $arr[0]){
		?>
	<div id="outercontainer">
	<div id="banner"></div>
	<div id="fcontainer">
	<div id="msgcontainer">
	<div id="message">Sorry LoginName already exists!<br><br>Retry again with different LoginName!</div>
	<div id="tips">
	Tips<br>
	1)Dont try LoginName with regular participant name.<br>
	2)Try a LoginName that include numerals and special characters.<br>
	</div>
	</div>
	<div class="goback" id="redirect" onClick="window.location='http://www.festember.in/index.php/register/'">Retry Registration</div>
	</div>
	<div id="footer"></div>
	</div>	
	<?php
	exit(0);}
	}
	$num = mysql_num_rows($result);
	$query = "INSERT INTO `festemberRegistrant`.`login` (`id` ,`sname` ,`spass` ,`scoll` ,`smail` ,`sevent` ,`sphno`) VALUES ('$num', '$sname', '$spass', '$scoll','$smail', '$Hevent', '$phno');";
	$result = @mysql_query($query)
	or die($num.$sname.$spass.$scoll.$smail.$Hevent.$phno."Contact admin! Error occured in Data Updation");
	$i = 1;
	while(1==1){
		$tname = 'name'.$i;$tname = $$tname;
		$tcoll = 'coll'.$i;$tcoll = $$tcoll;
		$tmail = 'mail'.$i;$tmail = $$tmail;
		if($tname != NULL){
			$query = "INSERT INTO `festemberRegistrant`.`registrant` VALUES('$tname','$tcoll','$tmail','$num')";
			$result = @mysql_query($query)
			or die("Error occured in data updation!");
			$i++;
			}
		else
			break;
		}?>
	<div id="outercontainer">
	<div id="banner"></div>
	<div id="fcontainer">
	<div id="msgcontainer">
	<div id="message">User has been successfully registered!<br><br>Festember team may soon contact you!<br><br>GoodLuck Folks!!!</div></div>
	<div class="goback" id="redirect" onClick="window.location = 'http://www.festember.in'">Go Back to Main site</div>
	</div>
	<div id="footer"></div>
	</div>
<?php
}

else{
?>
<div id="outercontainer">
<div id="banner"></div>
<div id="fcontainer">
<form id="r_form" method="post" action="#">
<div id="registerfont">Festember event registration</div><div id="ie"></div>
<table id="r_table">
<tr><td>Login Name</td><td><input id="sname" autocomplete=off name="sname" type="text" size="20" ></td></tr>
<tr><td>Password</td><td><input id="spass" name="spass" type="password" size="20" ></td></tr>
<tr><td>Confirm Password</td><td><input id="spassc" name="spassc" type="password" size="20" ></td></tr>
<tr><td>College</td><td><input id="scoll" name="scoll" autocomplete=off type="text" size="20" ></td></tr>
<tr><td>Mail Id</td><td><input type="text" id="smail" name="smail" autocomplete=off size="20" ></td></tr>
<tr><td>Event Selected</td><td><label id = "event" name="event">No Event Selected</label></td></tr>
<input type="hidden" name="Hevent" id="Hevent" value="">
<tr><td><input type="button" id="drop" style="cursor:pointer" onclick="dragEvent(this);" value="Click to show events"></td><td>&nbsp;</td></tr>
<tr id="eventdisplay" style="display:none;"><td>Choose your Event</td><td><label class="eHead">DANCE</label><br><input type="radio" name="r" onclick="eventSelect(this)" value="choreo_night">Choreo Night<br><input name="r" type="radio" onclick="eventSelect(this)"value="free_style">Free Style Dance(Solo)<br>
<label class="eHead">MUSIC</label><br><input type="radio" name="r" onclick="eventSelect(this)" value="shrutilaya">Shrutilaya(Classical Music)<br><input type="radio" name="r" onclick="eventSelect(this)" value="tarangini">Tarangini(Eastern Music)<br><input type="radio" name="r" onclick="eventSelect(this)" value="gig_a_hertz">Gig-A-Hertz(SemiPro Western)<br>
<label class="eHead">DRAMATICS</label><br><input type="radio" name="r" onclick="eventSelect(this)" value="theatrix">Theatrix<br>
<label class="eHead">CINEMATICS</label><br><input type="radio" name="r" onclick="eventSelect(this)" value="take_one">TakeOne-Moviemaking<br><input type="radio" name="r" onclick="eventSelect(this)" value="movie_quiz">Movie Quiz<br></option><br>
<label class="eHead">ARTS</label><br><input type="radio" name="r" onclick="eventSelect(this)" value="dominoes">Dominoes<br><input type="radio" name="r" onclick="eventSelect(this)" value="soap_carving">Soap Carving<br><input type="radio" name="r" value="grafitti" onclick="eventSelect(this)">Grafitti<br><input type="radio" name="r" onclick="eventSelect(this)" value="face_painting">Face Painting<br>
<label class="eHead">ENGLISH LITS</label><br><input type="radio" name="r" onclick="eventSelect(this)" value="lone_wolf">LoneWolf Quiz<br><input type="radio" name="r" onclick="eventSelect(this)" value="s_e_quiz">Sport n Entertainment Quiz<br><input type="radio" name="r" onclick="eventSelect(this)" value="india_quiz">India Quiz<br><input type="radio" name="r" onclick="eventSelect(this)" value="pot_pourri">Pot Pourri<br><input type="radio" name="r" onclick="eventSelect(this)" value="dumb_charades">Dumb Charades<br><input type="radio" name="r" onclick="eventSelect(this)" value="pixie">Pixie<br><input type="radio" name="r" onclick="eventSelect(this)" value="good_word">What's the Good Word?<br><input type="radio" name="r" onclick="eventSelect(this)" value="cross_word">Cross Word<br><input type="radio" name="r" onclick="eventSelect(this)" value="scrabble">Scrabble<br><input type="radio" name="r" onclick="eventSelect(this)" value="cluedo">Cluedo<br><input type="radio" name="r" onclick="eventSelect(this)" value="just_minute">Just a minute(JAM)<br><input type="radio" name="r" onclick="eventSelect(this)" value="debate">Debate<br><input type="radio" name="r" onclick="eventSelect(this)" value="surprise">Surprise Event<br>

 </td></tr>
<tr><td>Phone Number</td><td>+91<input type="text" size="12" autocomplete=off name="phno" id="phno" ></td></tr>
<tr><td>&nbsp;</td></tr>
<tr><td id="perror">Details of Team Members</td></tr>
<tr><td>&nbsp;</td></tr>
<div id="fren" name="fren">
<tr id="stu_no" name="stu_no"><td>Participant#1</td></tr>
<tr><td>Student Name</td><td><input type="text" name="name1" id="name1" size="20" autocomplete='off' ></td></tr>
<tr><td>College</td><td><input type="text" name="coll1" id="coll1" size="20" autocomplete=off ></td></tr>
<tr><td>Mail Id</td><td><input type="text" name="mail1" id="mail1" size="20" autocomplete=off ></td></tr>
<tr id="ref_tr"><td onclick="addfren()" style="font-size:10px;font-weight:bold;" id="add">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add another member</td><td>&nbsp;</td></tr>
<tr><td>&nbsp;</td></tr>
</div>

<tr><td></td><td><div id="r_submit" onClick="validate();">I'm attending the Game</div></td></tr>
</table>
</form>
</div>
<div id="footer"></div>
</div>
<?php } 
session_destroy();?>
</body>
