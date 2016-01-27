/************************************************************************\
	Vertis Aviation
	---------------------------------------------------------------------
	MODULE:		main.js
	PURPOSE:	main scripts for interactive functionality
	@author:	dan moe & chris grace

 	CODEMAP
	---------------------------------------------------------------------
	^1	SHOW/HIDE NAVIGATION AND BURGER ICON TRANSITION
	^2	SHOW/HIDE FOOTER

/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

	// ^1 SHOW/HIDE NAVIGATION AND BURGER ICON TRANSITION
	/********************************************************************/
	function showHideNav() {
		$('.navbar-toggle, .main-nav').toggleClass('in')
	}

	function animateList() {
		$('.main-nav > ul > li').each(function(i) {
			var self = this
			setTimeout(function () {
				$(self).toggleClass('in')
			}, i*50)
		})
	}

	$('.navbar-toggle').click(function() {
		// $(this).hasClass('in') ? console.log('yep') : console.log('nope')
		showHideNav()
		animateList()
		// hide footer if revealed
		if ( $('#footer').hasClass('in') ) showHideFooter()
	})

	// ^2 SHOW/HIDE FOOTER
	/********************************************************************/
	function showHideFooter() {
		$('#footer, .footer-toggle').toggleClass('in')
	}

	$('.footer-toggle').click(function() {
		showHideFooter()
		// hide nav if revealed
		if ( $('.main-nav').hasClass('in') ) {
			showHideNav()
			animateList()
		} 
	})



	$('#myContainer').multiscroll({
		// sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
		//anchors: ['first', 'second', 'third'],
		css3: true,
		navigation: true,
		navigationPosition: 'right',

		afterLoad: function(anchorLink, index) {
			// console.log(index)

	        setTimeout(function(){
				$.fn.multiscroll.moveSectionDown()
	        }, 3000);							

			if(index == '7') {
				// console.log(index)
			    // $.fn.multiscroll.destroy()
			    // $('html, body').addClass('scrollable')
			    $('#header').addClass('in');
			}
		},

		afterRender: function(){
			console.log('1')
	        setTimeout(function(){
				$.fn.multiscroll.moveSectionDown()
	        }, 3000);							
		}
	})

	$('#skip').click(function(e) {
		e.preventDefault()
		$.fn.multiscroll.moveTo(7)
	})

	// function scrollDown() {
	// 	$.fn.multiscroll.moveSectionDown()
	// }


	// $('#multiscroll-nav a').click(function() {
	// 	console.log('clicked')
	//     $.fn.multiscroll.build()
	// })

	// var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
	
	// $(window).bind(mousewheelevt, function(e){

	// 	var evt = window.event || e //equalize event object     
	// 	evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
	// 	var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

	// 	if(delta > 0) {
	// 		console.log('up')
	// 	}
	// 	else{
	// 		console.log('down')
	// 	}   
	// })


	// $('#multiscroll-nav a').click(function() {
		// $.fn.multiscroll.build();
	// })














	/*----------------------------------------------------------------------*/	
}) // END doc ready