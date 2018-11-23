/**
 *  Document   : login.js
 *  Author     : redstar
 *  Description: login form script
 *
 **/

// Toggle Function
$(document).on('click','.toggle',function(){ 
	'use strict';
  // Switches the Icon and form
  if($(this).children('i').attr('class')=='')
  {
	  $(this).children('i').removeClass('');
	  $(this).children('i').addClass('fa-times');
	  $('.formLogin').slideUp("slow");
	  $('.formRegister').slideDown("slow");
  }
  else
  {
	  $(this).children('i').removeClass('fa-times');
	  $(this).children('i').addClass('');
	  $('.formLogin').slideDown("slow");
	  if($('.formRegister').is(':visible'))
	     $('.formRegister').slideUp("slow");
	  else
		 $('.formReset').slideUp("slow");
  }
  
});

$(document).on('click','.forgetPassword a',function(){ 
	'use strict';
  // Switches the Icon and form
  $('.toggle').children('i').removeClass('');
  $('.toggle').children('i').addClass('fa-times');
  $('.formLogin').slideUp("slow");
  $('.formReset').slideDown("slow");
});