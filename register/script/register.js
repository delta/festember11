function addfren(){


var table = document.getElementById('r_table');
var ref_tr = document.getElementById('ref_tr');

var tr1 = document.createElement('tr');
var td1_1 = document.createElement('td');
td1_1.setAttribute('id','stu_no');
td1_1.setAttribute('name','stu_no');

var count = document.getElementsByName('stu_no').length + 1;
var lbl1 = document.createTextNode("Participant#"+count);
td1_1.appendChild(lbl1);
tr1.appendChild(td1_1);
ref_tr.parentNode.insertBefore(tr1,ref_tr);

var tr2 = document.createElement('tr');
var td2_1 = document.createElement('td');
var td2_2 = document.createElement('td');
var lbl2 = document.createTextNode("Student Name");
td2_1.appendChild(lbl2);
tr2.appendChild(td2_1);

var fName = document.createElement('input');
fName.setAttribute('id','name'+count);
fName.setAttribute('name','name'+count);
fName.setAttribute('size','20');
fName.setAttribute('type','text');
fName.setAttribute('autocomplete','off');
td2_2.appendChild(fName);
tr2.appendChild(td2_2);
//tr1.parentNode.insertBefore(tr2,tr1.nextSibling);
ref_tr.parentNode.insertBefore(tr2,ref_tr);


var tr3 = document.createElement('tr');
var td3_1 = document.createElement('td');
var td3_2 = document.createElement('td');
var lbl3 = document.createTextNode("College");
td3_1.appendChild(lbl3);
tr3.appendChild(td3_1);

var fColl = document.createElement('input');
fColl.setAttribute('id','coll'+count);
fColl.setAttribute('name','coll'+count);
fColl.setAttribute('size','20');
fColl.setAttribute('type','text');
fColl.setAttribute('autocomplete','off');

td3_2.appendChild(fColl);
tr3.appendChild(td3_2);

//tr2.parentNode.insertBefore(tr3,tr2.nextSibling);
ref_tr.parentNode.insertBefore(tr3,ref_tr);


var tr4 = document.createElement('tr');
var td4_1 = document.createElement('td');
var td4_2 = document.createElement('td');
var lbl4 = document.createTextNode("Mail id");
td4_1.appendChild(lbl4);
tr4.appendChild(td4_1);

var fMail = document.createElement('input');
fMail.setAttribute('id','mail'+count);
fMail.setAttribute('name','mail'+count);
fMail.setAttribute('size','20');
fMail.setAttribute('type','text');
fMail.setAttribute('autocomplete','off');

td4_2.appendChild(fMail);
tr4.appendChild(td4_2);

ref_tr.parentNode.insertBefore(tr4,ref_tr);


//add.parentNode.insertBefore(fren,add);
//frensDiv.appendChild(fren);
/*

var fMail = document.createElement('input');
fName.setAttribute('id','mail');
fName.setAttribute('name','mail');
fName.setAttribute('size','20');
fName.setAttribute('type','text');
*/


}

function eventSelect(ref){

document.getElementById('event').innerHTML = ref.value;
document.getElementById('Hevent').value=ref.value;
}
function dragEvent(ref){
var evt = document.getElementById('eventdisplay').style.display;

if(evt == ""){
	document.getElementById('eventdisplay').style.display = "none";
	ref.value="Click to show events";}
else{
	document.getElementById('eventdisplay').style.display = "";
	ref.value="Click to hide events";	}
}

function addErrorT(ref){
//ref = ref.parentNode;
//var br = document.createElement('br');
if(!ref.nextSibling){

var td = document.createElement('div');
td.setAttribute('name','error');
td.setAttribute('class','error');
var msg = document.createTextNode("Field Element must be atleast 6 letters");
td.appendChild(msg);
//ref.parentNode.appendChild(br);
ref.parentNode.insertBefore(td,ref.nextSibling);
}
}
function addErrorM(ref,rmsg){
if(!ref.nextSibling){

var td = document.createElement('div');
td.setAttribute('name','error');
td.setAttribute('class','error');
var msg = document.createTextNode(rmsg);
td.appendChild(msg);
ref.parentNode.insertBefore(td,ref.nextSibling);

}
}
function removeError(ref){
//ref = ref.parentNode;
ref = ref.nextSibling;
if(ref){
if(ref.getAttribute('name')=="error"){
	ref.parentNode.removeChild(ref);}}
}
/*
function vEmail(ref){

var filter = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
alert(ref);
alert(ref.match(filter));
return ref.match(filter);
}*/
function vEmail(ref){

	if((ref.indexOf('@')>0)&&(ref.indexOf('.')>0) ){
		return true;
	}
	
	return false;
}

function validate(){

	var v = 1;
	if(!(document.getElementById('sname').value.length>5)){
		addErrorM(document.getElementById('sname'),"Login id must be atleast 6characters");v=0;}
	else{
		removeError(document.getElementById('sname'));}

	if(!(document.getElementById('spass').value.length>5)){//alert('dis');
		addErrorM(document.getElementById('spass'),"Password must be atleast 6characters");v=0;}
	else{//alert('das');
		removeError(document.getElementById('spass'));}

	if(!(document.getElementById('spassc').value==document.getElementById('spass').value)){
		addErrorM(document.getElementById('spassc'),"Password mismatch");v=0;}
	else{
		removeError(document.getElementById('spassc'));}
	if(document.getElementById('scoll').value.length==0){
		addErrorM(document.getElementById('scoll'),"Field Element must not be blank");v=0;}
	else{
		removeError(document.getElementById('scoll'));}
	if(document.getElementById('phno').value.length!=10){
		addErrorM(document.getElementById('phno'),"Phonenumber must be 10digits");v=0;}
	else{
		removeError(document.getElementById('phno'));}
	if(!vEmail(document.getElementById('smail').value)){
		addErrorM(document.getElementById('smail'),"Invalid mailID");v=0;}
	else{
		removeError(document.getElementById('smail'));}

	if(document.getElementById('event').innerHTML=='No Event Selected'){
		addErrorM(document.getElementById('event'),"Choose an event from below");v=0;}
	else{
		removeError(document.getElementById('event'));}
	var i = 1;
	while(1==1){
	var fname = 'name'+i;//alert(fname);
	if(document.getElementById(fname)){
		if(!( (document.getElementById(fname).value.length>0) && (document.getElementById('coll'+i).value.length>0) && vEmail(document.getElementById('mail'+i).value) ))
		{addErrorM(document.getElementById('perror'),"Errors in participant information");v=0;break;
		}
		else{removeError(document.getElementById('perror'));i++;}


		}
	else{break;}
	}
	if(v==1){
		document.forms['r_form'].submit();}
}

