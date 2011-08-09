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

(function(){
var c1,c2,c3,c4,c5,c6;
window.onload=function(){

c1=document.getElementById('myCanvas1');
var ctx=c1.getContext("2d");
ctx.beginPath();
ctx.translate(143,56);
ctx.moveTo(4,30.5);
ctx.lineTo(0,24);
ctx.bezierCurveTo(0,24,15.5,21,25,30);
ctx.lineTo(9,0);
ctx.bezierCurveTo(9,0,48.5,-6,71.5,19.5);
ctx.bezierCurveTo(105,-8,133.5,0,133.5,0);
ctx.lineTo(117.5,29);
ctx.bezierCurveTo(117.5,29,129.5,22,141.5,24.5);
ctx.lineTo(134.5,37.5);
ctx.strokeStyle="#ff0060";
ctx.lineWidth=3;
ctx.shadowColor = "#fb8ab4";
ctx.shadowBlur = 15;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 0;
ctx.stroke();
ctx.translate(-143,-56);

c2=document.getElementById('myCanvas2');
var ctx2=c2.getContext("2d");
ctx2.beginPath();
ctx2.translate(113,64);
ctx2.moveTo(17.5,31.5);
ctx2.lineTo(0,0);
ctx2.bezierCurveTo(0,0,24.5,-6.5,37,1.5);
ctx2.lineTo(43.5,10);
ctx2.bezierCurveTo(43.5,10,19.5,4,16.5,9.5);
ctx2.lineTo(27,28.5);
ctx2.lineTo(17.5,31.5);
ctx2.moveTo(162,1);
ctx2.bezierCurveTo(162,1,189,-5.5,200.5,0);
ctx2.lineTo(183,32);
ctx2.lineTo(173,31);
ctx2.lineTo(184.5,9.5);
ctx2.bezierCurveTo(184.5,9.5,164,5,157.5,10);
ctx2.lineTo(162,1);
ctx2.strokeStyle="#ff0060";
ctx2.lineWidth=3;
ctx2.shadowColor = "#fb8ab4";
ctx2.shadowBlur = 15;
ctx2.shadowOffsetX = 0;
ctx2.shadowOffsetY = 0;
ctx2.stroke();
ctx2.translate(-113,-64);
ctx2.globalAlpha = 0.5;

c3=document.getElementById('myCanvas3');
var ctx3=c3.getContext("2d");
ctx3.beginPath();
ctx3.translate(47,25);
ctx3.moveTo(0,72.5);
ctx3.bezierCurveTo(0,72.5,-21,49.5,11.5,44);
ctx3.bezierCurveTo(57.5,37.5,69,45,69,45);
ctx3.lineTo(66.5,37.5);
ctx3.lineTo(89.5,35.5);
ctx3.lineTo(74.5,0);
ctx3.bezierCurveTo(74.5,0,126.5,9,145,33.5);
ctx3.lineTo(167,49.5);
ctx3.lineTo(189.5,33.5);
ctx3.bezierCurveTo(189.5,33.5,231,-1.5,260,0.5);
ctx3.lineTo(245.5,35);
ctx3.bezierCurveTo(245.5,35,265,34.5,267.5,38.5);
ctx3.lineTo(266,44);
ctx3.bezierCurveTo(266,44,311.5,39,326,44.5);
ctx3.bezierCurveTo(355.5,51,334.5,73,334.5,73);
ctx3.strokeStyle="#ff0e00";
ctx3.lineWidth=3;
ctx3.shadowColor = "#fb8ab4";
ctx3.shadowBlur = 15;
ctx3.shadowOffsetX = 0;
ctx3.shadowOffsetY = 0;
ctx3.stroke();
ctx3.translate(-47,-25);


c4=document.getElementById('myCanvas4');
var ctx4=c4.getContext("2d");
ctx4.beginPath();
ctx4.translate(26,19);
ctx4.moveTo(18.99,77.99);
ctx4.bezierCurveTo(18.99,77.99,9.99,78.99,0,66.49);
ctx4.bezierCurveTo(-8.99,39.99,25.99,31.49,25.99,31.49);
ctx4.bezierCurveTo(69.99,21.49,98.98,38.49,98.98,38.49);
ctx4.lineTo(80.98,0);
ctx4.bezierCurveTo(80.98,0,139.48,-4.99,185.97,47.49);
ctx4.bezierCurveTo(246.46,-10.49,290.96,0.49,290.96,0.49);
ctx4.lineTo(274.96,37.99);
ctx4.bezierCurveTo(274.96,37.99,330.95,21.49,350.45,32.49);
ctx4.bezierCurveTo(381.95,45.49,373.45,64.49,373.45,64.49);
ctx4.bezierCurveTo(370.95,75.99,353.45,77.99,353.45,77.99);
ctx4.strokeStyle="#ff0e00";
ctx4.lineWidth=3;
ctx4.shadowColor = "#fb8ab4";
ctx4.shadowBlur = 15;
ctx4.shadowOffsetX = 0;
ctx4.shadowOffsetY = 0;
ctx4.stroke();
ctx4.translate(-26,-19);

c5=document.getElementById('myCanvas5');
var ctx5=c5.getContext("2d");
ctx5.beginPath();
ctx5.translate(16,41);
ctx5.moveTo(16.5,20.5);
ctx5.lineTo(0,7);
ctx5.bezierCurveTo(0,7,9.5,-20.5,100,0);
ctx5.lineTo(102,5.5);
ctx5.bezierCurveTo(102,5.5,23,-10,13.5,5);
ctx5.lineTo(19.5,11.5);
ctx5.lineTo(16.5,20.5);
ctx5.moveTo(297,0);
ctx5.bezierCurveTo(297,0,384.5,-21.5,396.5,7);
ctx5.lineTo(383.5,18);
ctx5.lineTo(377.5,11);
ctx5.lineTo(384.5,5.5);
ctx5.bezierCurveTo(384.5,5.5,367,-11,295.5,5);
ctx5.lineTo(297,0);
ctx5.strokeStyle="#ff0060";
ctx5.lineWidth=3;
ctx5.shadowColor = "#fb8ab4";
ctx5.shadowBlur = 15;
ctx5.shadowOffsetX = 0;
ctx5.shadowOffsetY = 0;
ctx5.stroke();
ctx5.translate(-16,-41);


c6=document.getElementById('myCanvas6');
var ctx6=c6.getContext("2d");
ctx6.beginPath();
ctx6.translate(47,87);
ctx6.moveTo(0.99,31.99);
ctx6.lineTo(17.49,5.99);
ctx6.bezierCurveTo(17.49,5.99,17.99,1.49,25.99,0.99);
ctx6.lineTo(46.49,0.49);
ctx6.bezierCurveTo(46.49,0.49,52.99,4.49,43.99,9.99);
ctx6.lineTo(37.49,10.49);
ctx6.lineTo(29.99,21.49);
ctx6.bezierCurveTo(29.99,21.49,39.99,9.49,50.49,12.49);
ctx6.bezierCurveTo(59.99,11.49,60.49,17.49,60.49,17.49);
ctx6.bezierCurveTo(70.99,7.49,85.98,12.99,85.98,12.99);
ctx6.bezierCurveTo(98.98,3.99,99.98,0.99,99.98,0.99);
ctx6.lineTo(110.48,1.49);
ctx6.bezierCurveTo(110.48,1.49,113.48,3.99,110.48,7.99);
ctx6.lineTo(106.98,12.99);
ctx6.bezierCurveTo(106.98,12.99,126.98,8.99,128.48,15.99);
ctx6.bezierCurveTo(139.48,8.49,146.48,13.49,146.48,13.49);
ctx6.bezierCurveTo(155.48,7.49,159.47,14.49,159.47,14.49);
ctx6.bezierCurveTo(168.97,7.99,175.97,14.99,175.97,14.99);
ctx6.bezierCurveTo(175.47,14.49,173.47,9.49,173.47,9.49);
ctx6.bezierCurveTo(182.97,-3.99,193.47,0,193.47,0);
ctx6.bezierCurveTo(202.47,2.49,197.97,11.99,197.97,11.99);
ctx6.bezierCurveTo(204.47,11.49,204.47,15.99,204.47,15.99);
ctx6.bezierCurveTo(228.97,5.49,230.47,16.49,230.47,16.49);
ctx6.bezierCurveTo(237.47,7.99,246.96,13.49,246.96,13.49);
ctx6.bezierCurveTo(261.46,4.99,258.96,15.99,258.96,15.99);
ctx6.lineTo(253.46,25.49);
ctx6.bezierCurveTo(253.46,25.49,263.96,16.49,265.96,23.99);
ctx6.lineTo(276.46,0.49);
ctx6.lineTo(294.46,0.49);
ctx6.lineTo(321.45,0);
ctx6.bezierCurveTo(321.45,0,327.45,0.49,321.95,7.49);
ctx6.lineTo(301.46,40.99);
ctx6.lineTo(271.46,40.49);
ctx6.lineTo(266.46,37.49);
ctx6.bezierCurveTo(266.46,37.49,246.46,50.49,249.96,30.49);
ctx6.bezierCurveTo(245.96,32.49,245.46,27.99,245.46,27.99);
ctx6.lineTo(236.97,39.49);
ctx6.lineTo(220.47,39.99);
ctx6.bezierCurveTo(220.47,39.99,199.97,48.49,198.47,36.49);
ctx6.bezierCurveTo(179.97,50.99,178.97,41.99,178.97,41.99);
ctx6.lineTo(170.97,41.99);
ctx6.bezierCurveTo(170.97,41.99,150.98,55.99,147.48,41.99);
ctx6.lineTo(119.98,40.99);
ctx6.bezierCurveTo(119.98,40.99,98.48,45.99,97.98,38.99);
ctx6.bezierCurveTo(82.98,46.49,77.49,38.99,77.49,38.99);
ctx6.bezierCurveTo(59.99,46.49,51.49,38.99,51.49,38.99);
ctx6.bezierCurveTo(30.99,49.49,24.49,32.49,24.49,32.49);
ctx6.lineTo(18.49,39.99);
ctx6.lineTo(0,40.99);
ctx6.bezierCurveTo(0,40.99,-5.99,36.99,0.99,31.99);
ctx6.strokeStyle="#ff6000";
ctx6.lineWidth=3;
ctx6.shadowColor = "#ffba90";
ctx6.shadowBlur = 10;
ctx6.shadowOffsetX = 0;
ctx6.shadowOffsetY = 0;
ctx6.stroke();
ctx6.translate(-47,-87);
animate();
}
var i=1;
var cttx=new Array("#can1","#can2","#can3","#can4","#can5","#can6");
function animate(){
	if(i<=6){
	for(j=0;j<6;j++){ 
		if(j == 5)
			$(cttx[j]).fadeOut();	
		else
			$(cttx[j]).css("display","none");
	}
	if(i==6)
		i=0;
	if(i!=5)
		$(cttx[i]).css("display","block");
	if(i==5){
		$(cttx[i]).fadeIn(100);
	}
	setTimeout(function() {
		i++;
		animate();
	},200);
}}
function cancel(){
	if(i>6){
		i=0;
		setTimeout(function(){
			for(j=0;j<6;j++)$(cttx[j]).css("display","block");
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},100);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","block"); },500);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},550);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","block"); for(j=0;j<6;j++)$(cttx[j]).css("opacity","0.9");},600);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},650);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","block"); },700);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},750);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","block"); },800);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},850);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","block"); },900);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},950);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("opacity","1.0");},1000);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","block"); },1050);
				setTimeout(function(){for(j=0;j<6;j++)$(cttx[j]).css("display","none");},1100);
				setTimeout(animate,1400);
			},100);	
	}
	else{
		i=10;
		var j;
		for(j=0;j<6;j++)
		{ 
				$(cttx[j]).css("display","none");
		}
	}
}

this.cancel = cancel;
})();

