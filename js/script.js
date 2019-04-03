/*анимация текста*/
/*var texts = [
    'ТВОРЧЕСКОЕ ПРОСТРАНСТВО',
    'БЕЗГРАНИЧНЫЕ ВОЗМОЖНОСТИ',
    'БЕЗУПРЕЧНОЕ ИСПОЛНЕНИЕ'
];

var currentTextId = texts.length - 1;

function getNextText(){

    currentTextId++;
    if(currentTextId == texts.length) {
        currentTextId = 0;
    }
return
texts[currentTextId];
    
}
var textEl = document.getElementById('text-animal');

textEl.innerHTML = 
getNextText ();
setInterval (function() {
    textEl.innerHTML = 
    getNextText();
}, 5000);*/


//

$(document).ready(function() {
	$("#content div").hide(); // Скрываем содержание
	$("#tabs li:first").attr("id","current"); // Активируем первую закладку
	$("#content div:first").fadeIn(); // Выводим содержание

    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#content div").hide(); //Скрыть все сожержание
        $("#tabs li").attr("id",""); //Сброс ID
        $(this).parent().attr("id","current"); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });
});



//

jQuery(document).ready(function($){
	var formModal = $('.cd-user-modal'),
		formLogin = formModal.find('#cd-login'),
		formSignup = formModal.find('#cd-signup'),
		formForgotPassword = formModal.find('#cd-reset-password'),
		formModalTab = $('.cd-switcher'),
		tabLogin = formModalTab.children('li').eq(0).children('a'),
		tabSignup = formModalTab.children('li').eq(1).children('a'),
		forgotPasswordLink = formLogin.find('.cd-form-bottom-message a'),
		backToLoginLink = formForgotPassword.find('.cd-form-bottom-message a'),
		mainNav = $('.main-nav');

	//open modal
	mainNav.on('click', function(event){
		$(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
	});

	//open sign-up form
	mainNav.on('click', '.cd-signup', signup_selected);
	//open login-form form
	mainNav.on('click', '.cd-signin', login_selected);

	//close modal
	formModal.on('click', function(event){
		if( $(event.target).is(formModal) || $(event.target).is('.cd-close-form') ) {
			formModal.removeClass('is-visible');
		}	
	});
	//close modal when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		formModal.removeClass('is-visible');
	    }
    });

	//switch from a tab to another
	formModalTab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( tabLogin ) ) ? login_selected() : signup_selected();
	});

	//hide or show password
	$('.hide-password').on('click', function(){
		var togglePass= $(this),
			passwordField = togglePass.prev('input');
		
		( 'password' == passwordField.attr('type') ) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
		( 'Hide' == togglePass.text() ) ? togglePass.text('Show') : togglePass.text('Hide');
		//focus and move cursor to the end of input field
		passwordField.putCursorAtEnd();
	});

	//show forgot-password form 
	forgotPasswordLink.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	//back to login from the forgot-password form
	backToLoginLink.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.addClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.addClass('selected');
		tabSignup.removeClass('selected');
	}

	function signup_selected(){
		mainNav.children('ul').removeClass('is-visible');
		formModal.addClass('is-visible');
		formLogin.removeClass('is-selected');
		formSignup.addClass('is-selected');
		formForgotPassword.removeClass('is-selected');
		tabLogin.removeClass('selected');
		tabSignup.addClass('selected');
	}

	function forgot_password_selected(){
		formLogin.removeClass('is-selected');
		formSignup.removeClass('is-selected');
		formForgotPassword.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages 
	formLogin.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formLogin.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	formSignup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		formSignup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});


	//IE9 placeholder fallback
	//credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
		  	}
		}).blur(function() {
		 	var input = $(this);
		  	if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.val(input.attr('placeholder'));
		  	}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  	$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
			 		input.val('');
				}
		  	})
		});
	}

});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.focus();
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};


//nomber




$(function() {

	$({numberValue: 0}).animate({numberValue: 1000}, {
	
		duration: 500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
		easing: "linear",
		
		step: function(val) {
		
			$(".price").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			
		}
	});
	
});





const buttons = document.querySelectorAll(`button[data-modal-trigger]`);

for(let button of buttons) {
	modalEvent(button);
}

function modalEvent(button) {
	button.addEventListener('click', () => {
		const trigger = button.getAttribute('data-modal-trigger');
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		const contentWrapper = modal.querySelector('.content-wrapper');
		const close = modal.querySelector('.close');

		close.addEventListener('click', () => modal.classList.remove('open'));
		modal.addEventListener('click', () => modal.classList.remove('open'));
		contentWrapper.addEventListener('click', (e) => e.stopPropagation());

		modal.classList.toggle('open');
	});
}




//Пример

$('.slider').each(function() {
	var $this = $(this);
	var $group = $this.find('.slide_group');
	var $slides = $this.find('.slide');
	var bulletArray = [];
	var currentIndex = 0;
	var timeout;
	
	function move(newIndex) {
	  var animateLeft, slideLeft;
	  
	  advance();
	  
	  if ($group.is(':animated') || currentIndex === newIndex) {
		return;
	  }
	  
	  bulletArray[currentIndex].removeClass('active');
	  bulletArray[newIndex].addClass('active');
	  
	  if (newIndex > currentIndex) {
		slideLeft = '100%';
		animateLeft = '-100%';
	  } else {
		slideLeft = '-100%';
		animateLeft = '100%';
	  }
	  
	  $slides.eq(newIndex).css({
		display: 'block',
		left: slideLeft
	  });
	  $group.animate({
		left: animateLeft
	  }, function() {
		$slides.eq(currentIndex).css({
		  display: 'none'
		});
		$slides.eq(newIndex).css({
		  left: 0
		});
		$group.css({
		  left: 0
		});
		currentIndex = newIndex;
	  });
	}
	
	function advance() {
	  clearTimeout(timeout);
	  timeout = setTimeout(function() {
		if (currentIndex < ($slides.length - 1)) {
		  move(currentIndex + 1);
		} else {
		  move(0);
		}
	  }, 4000);
	}
	
	$('.next_btn').on('click', function() {
	  if (currentIndex < ($slides.length - 1)) {
		move(currentIndex + 1);
	  } else {
		move(0);
	  }
	});
	
	$('.previous_btn').on('click', function() {
	  if (currentIndex !== 0) {
		move(currentIndex - 1);
	  } else {
		move(3);
	  }
	});
	
	$.each($slides, function(index) {
	  var $button = $('<a class="slide_btn">&bull;</a>');
	  
	  if (index === currentIndex) {
		$button.addClass('active');
	  }
	  $button.on('click', function() {
		move(index);
	  }).appendTo('.slide_buttons');
	  bulletArray.push($button);
	});
	
	advance();
  });


  //Slider

 
	