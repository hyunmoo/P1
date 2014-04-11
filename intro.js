$(document).ready(function(){
	var check = true;
	var num = 1;
	var count = 0;
	var co = 0;
	var aso = 0;
	var one;
	var two;
	var x;
	var y;
	var loc = new Array();
	var ccheck = new Array();
	function end(){
		alert("Game Finish!");
		alert("Restart Game!");
		window.location="intro.html";
	}
	function b(){
		alert("맞음!");
	}
	function a(){
		alert("틀림?" + one + two);
		$('#block_'+one).fadeIn('fast');
		$('#block_'+two).fadeIn('fast');
		count = one = two = 0;
	}
	function cc(){
	if(count == 2){
		if(x == y){
			co++;
			count = 0;
			setTimeout(b, 200);
		}else{
			setTimeout(a, 500);
		}
	}
	if(co == 8){
		setTimeout(end, 500);
	}
	
	}
	
	function tt(){
		alert("Game Start!");
		$(".table1").fadeOut('fast');
	}

	function init(){
		for (var i = 0; i < 17; i++){
			ccheck[i] = true;
			loc[i] = 0;
		}
	
	while(check){
		var a = Math.floor((Math.random()*16)+1);
		//alert(a);
		//document.write("num" + num + ":"+a+"<br>");
		//num++;
		//if//(num == 100){
		//	break;
		//}		
		if(num == 17){
			break;
		}
		if(ccheck[a] == true){
			loc[num] = a; // 블록_num(0에서 증가) = 카드_a와 연결됨	
			//$('#card_'+a).animate({top: '152px', left : '600px'});
			ccheck[a] = false;
			//document.write(num + "통과<BR>" );
			switch(a)
			{
				case 1:
					 $("#card_1").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 2:
					 $("#card_2").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 3:
					 $("#card_3").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 4:
					 $("#card_4").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 5:
					 $("#card_5").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 6:
					 $("#card_6").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;			 					 					 					 					 													                
				case 7:
					 $("#card_7").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 8:
					 $("#card_8").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 9:
					 $("#card_9").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 10:
					 $("#card_10").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 11:
					 $("#card_11").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 12:
					 $("#card_12").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 13:
					 $("#card_13").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 14:
					 $("#card_14").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;
				case 15:
					 $("#card_15").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break; 
				case 16:
					 $("#card_16").animate({top: $('#block_'+num).position().top, left :$('#block_'+num).position().left});
					 break;					 					 
			}		

			num++;
		}
			
	}
	
	}
	//$('.block').fadeOut('fast');
	//$('.card').fadeOut('fast');
	//$(".table").fadeOut('fast');

	

	if(num == 1){
		init();
	}
	setTimeout(tt, 1000);

	
		
	$('#block_1').click(function(){
		$('#block_1').fadeOut('fast');
		aso = loc[1];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			one = 1;
			count++;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			two = 1;
			count++;
			cc();
		}

	});
	//
	$('#block_2').click(function(){
		$('#block_2').fadeOut('fast');
		aso = loc[2];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 2;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 2;
			cc();
		}
	});	
	//
	$('#block_3').click(function(){
		$('#block_3').fadeOut('fast');
		aso = loc[3];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 3;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two =3;
			cc();
		}
	});
	//
	$('#block_4').click(function(){
		$('#block_4').fadeOut('fast');
		aso = loc[4];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one =4;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two =4;
			cc();
		}
	});
	//
	$('#block_5').click(function(){
		$('#block_5').fadeOut('fast');
		aso = loc[5];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 5;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 5;
			cc();
		}
	});
	//
	$('#block_6').click(function(){
		$('#block_6').fadeOut('fast');
		aso = loc[6];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 6;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 6;
			cc();
		}
	});
	//
	$('#block_7').click(function(){
		$('#block_7').fadeOut('fast');
		aso = loc[7];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 7;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 7;
			cc();
		}
	});
	//
	$('#block_8').click(function(){
		$('#block_8').fadeOut('fast');
		aso = loc[8];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 8;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 8;
			cc();
		}
	});
	//
	$('#block_9').click(function(){
		$('#block_9').fadeOut('fast');
		aso = loc[9];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 9;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 9;
			cc();
		}
	});
	//
	$('#block_10').click(function(){
		aso = loc[10];
		$('#block_10').fadeOut('fast');
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 10;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 10;
			cc();
		}
	});
	//
	$('#block_11').click(function(){
		aso = loc[11];
		$('#block_11').fadeOut('fast');
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 11;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 11;
			cc();
		}
	});
	//
	$('#block_12').click(function(){
		aso = loc[12];
		$('#block_12').fadeOut('fast');
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 12;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 12;
			cc();
		}
	});
	//
	$('#block_13').click(function(){
		$('#block_13').fadeOut('fast');
		aso = loc[13];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 13;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 13;
			cc();
		}
	});
	//
	$('#block_14').click(function(){
		aso = loc[14];
		$('#block_14').fadeOut('fast');
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 14;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 14;
			cc();
		}
	});
	//
	$('#block_15').click(function(){
		$('#block_15').fadeOut('fast');
		aso = loc[15];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 15;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 15;
			cc();
		}
	});
	//
	$('#block_16').click(function(){
		$('#block_16').fadeOut('fast');
		aso = loc[16];
		if(count == 0){
			x = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo").innerHTML = x;
			count++;
			one = 16;
		}else if(count == 1){
			y = document.getElementById('c_'+aso).src;
	    	document.getElementById("demo1").innerHTML = y;
			count++;
			two = 16;
			cc();
		}
	});	
	
	//var x = document.getElementById("c_1").src;
	//document.getElementById("demo").innerHTML = x;
	
	//var y = document.getElementById("c_2").src;
	//document.getElementById("demo1").innerHTML = y;	
	
	




});


//opacity: 0.0;
/*
	function next(){
		window.location="intro2.html";
	}
						   
	$('#video')[0].play();
	

	$('#video')[0].addEventListener("ended", function(e) { 
		window.location="intro2.html";
	});

	
	$('#video').click(function(){
		window.location="intro2.html";
	});
				switch(num)
			{
				case 1:
					 $("block_1").animate({left:'250px'});
			}
			

	}
				
*/