<?php
$_SESSION['connected'] = "yes";
$user = "root"; $pass = "root";
@mysql_connect('localhost',$user,$pass)
or die("Connection with UserName and Password Error".mysql_errno().mysql_error()."<br>");
$db = "festemberRegistrant";
@mysql_select_db($db)
or die("Error in connection with Database!!!".mysql_errno().mysql_error()."<br>");
?>
