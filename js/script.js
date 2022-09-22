//JavaScript

//text change

function textChange(){
	document.getElementById('h2').innerHTML = 
	"Hello world";
}

//hide and show
function hide(){
		document.getElementById('London').style.display=
		"none";
}

function show(){
		document.getElementById('London').style.display=
		"block";
}
let hide_show = true;
function toggle(){
	if(hide_show){
	document.getElementById('London').style.display=
	"none";
	hide_show = false;
	}else{
	document.getElementById('London').style.display=
	"block";
	hide_show = true;
	}
}

//add style

function addStyle(){
		document.getElementById('text').style.color=
		"red";
}

















//jQuery


$(document).ready(function(){

	//all selectors
	$('#all').click(function(){
		$('*').hide();
	})
	//$("*").css("background-color", "yellow");

	//id
	$('#text').css("background-color", "green");
	//class
	$('.text').css("color", "red");
	//multiple class
	$('.intro, .demo, .end').css("background-color", "yellow");
	//element
	$('h5').css("border","1px solid red");
	//multiple elements
	$('h7,span').css("background-color", "pink");
	//:first&:last
	$('h4:first').css("color","lime");
	$('h4:last').css("background-color","lime");
	//:first,last&nth-child
	$('.btn_f').click(function(){
		$('ul li:first-child').css("color", "red");
	})

	$('.btn_l').click(function(){
		$('ul li:last-child').css("color", "orange");
	})

	$('.btn_n').click(function(){
		$('ul li:nth-child(2)').css("color", "blue");
	})
	//attribute
	$('.btn_a').click(function(){
		$('a[target="blank"]').hide();

	})
	//click & doubl
	$('#c_p').click(function(){
    	alert("Click it");
  	})
	$('span.click').dblclick(function(){
   	 alert("Click it double");
  	})
  	//focus()

  	$('.focus').focusin(function(){
  		$('.f_i').css("background-color", "yellow");

  	})
  	$('.focus').focusout(function(){
  		$('.f_i').css("background-color", "green");

  	})
  	//keyup & keydown
  	$("#key").keydown(function(){
    	$("#key").css("background-color", "yellow");
  	})
 	$("#key").keyup(function(){
    	$("#key").css("background-color", "pink");
  	})

  	//hover
  	$("#hover_p").hover(function(){
    	$(this).css("background-color", "yellow");
    }, function(){
    	$(this).css("background-color", "orange");
  })
  	//mouseup and mousedown
  	$('#mouse_ud').mouseup(function(){
    	$('#mouse_ud').after("<p style='color:green;'>Mouse button released.</p>");
  	})
 	 $('#mouse_ud').mousedown(function(){
    	$('#mouse_ud').after("<p style='color:purple;'>Mouse button pressed down.</p>");
  })
 	 //mouseenter and mouseleave
  	$('#mouse_el').mouseenter(function(){
    	$('#mouse_el').css("color","red");
  	})
 	 $('#mouse_el').mouseleave(function(){
    	$('#mouse_el').css("background-color","royalblue");
  })
 	 //mousever and mouseout
  	$('#mouse_ovr').mouseover(function(){
    	$('#mouse_ovr').css("background-color","red");
  	})
 	 $('#mouse_ovr').mouseout(function(){
    	$('#mouse_ovr').css("background-color","yellowgreen");
  })
 	 //select
 	 $('#select_in').select(function(){
 	 	alert("Text Marked");
 	 })

 	 //submit
 	 $('form').submit(function(){
 	 	alert("sumitted");
 	 })

 	 //animate()
 	 $('#btn1').click(function(){
    	$('#box').animate({height: "300px"});
  	})
  	$('#btn2').click(function(){
    	$('#box').animate({height: "100px"});
  	})

  	//delay
  	$('button').dblclick(function(){

  		$('#box1').delay("slow").fadeIn();
  		$('#box2').delay("fast").fadeIn();
  		$('#box3').delay("2000").fadeIn();
  		$('#box4').delay("800").fadeIn();
  	})

  	//fadeIn fadeOut fadeToggole
  	$('#hide').click(function(){

		$('#fade').fadeOut(2000);
	})
	$('#show').click(function(){

		$('#fade').fadeIn(800);
	})
	$('#toggle').click(function(){

		$('#fade').fadeToggle("slow");
	})

	//hide()&show()

	$('#hide1').click(function(){

		$('#text1').hide();
	})

	$('#show1').click(function(){

		$('#text1').show();
	})

	$('#toggle1').click(function(){

		$('#text1').toggle();
	})

	//slideup() slidedown() & slidetoggle

	$('.btn1').click(function(){
		$('.p').slideUp();
	})

	$('.btn2').click(function(){
		$('.p').slideDown();
	})

	$('.btn3').click(function(){
		$('.p').slideToggle();
	})
});