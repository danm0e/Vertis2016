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
	^3	HOME PAGE INTRO
	^4	SELECT DROP DOWN NAV
	^5	JUMP NAV – SCROLL TO ANCHOR
	^6	ADD FLEX CLASS TO HTML
	^7	SEARCH FIELD AUTO FOCUS
	^8	PAGE TRANSITIONS

/************************************************************************/

$(document).ready(function() {
/*----------------------------------------------------------------------*/	

	// ^1 SHOW/HIDE NAVIGATION AND BURGER ICON TRANSITION
	/********************************************************************/

	function showHideNav() {
		$('.navbar-toggle, .main-nav').toggleClass('in')
	}

	// incrementally add the class to the navigation to stagger the animation
	function animateList() {
		$('.main-nav > ul > li').each(function(i) {
			var self = this
			setTimeout(function () {
				$(self).toggleClass('in')
			}, i*50) // speed
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


	// ^3 HOME PAGE INTRO
	/********************************************************************/

	// only call the multiscroll on the homepage to prevent console errors
	if( $('body').hasClass('home') ) {

		// required class to hide the overflow
		$('html, body').addClass('fullscreen')

		// auto play slides
		function timer() {
			setTimeout(function(){
				$.fn.multiscroll.moveSectionDown()
			}, 1500)
		}

		// multiscroll plugin defined in plugins.js
		$('.home-intro').multiscroll({
			css3: true,
			// navigation: true,
			// navigationPosition: 'right',

			afterRender: function(){
		        // timer()	
			},

			afterLoad: function(anchorLink, index) {
				// console.log(index)	
		        // timer()						

	        	// if this is the last slide, remove the split screen scroll functionality and show section links
				if(index == '7') {
				    $.fn.multiscroll.destroy()
				    $('#header, .home-nav').addClass('in')
		    		$('#skip, .one, .two, .three, .four, .five, .six').addClass('out')
				}
			},
		})

		// skip intro to last section
		$('#skip').click(function(e) {
			e.preventDefault()
			$.fn.multiscroll.moveTo(7)
		})
	}


	// ^4 SELECT DROP DOWN NAV
	/********************************************************************/

	$('.select-nav').change(function() {
		// console.log($(this).val())
		var url = $(this).val()
		if ( url != '' ) window.location = url
	})


	// ^5 JUMP NAV – SCROLL TO ANCHOR
	/********************************************************************/
	$('a[href*=#]').each(function() {
		$(this).click(function(e) {
			e.preventDefault()
			var targetOffset = $($(this).attr('href')).offset().top
			$('html, body').animate({ scrollTop: targetOffset }, 1000, "swing")
		})
	})


	// ^6 ADD FLEX CLASS TO HTML
	// required for 100% height to use flexbox to vertically centre content
	/********************************************************************/

	if( $('body').hasClass('flex') ) {
		$('html').addClass('flex')
	}


	// ^7 SEARCH FIELD AUTO FOCUS
	/********************************************************************/

	$('.modal').on('shown.bs.modal', function() {
		$('.search-field').focus()
	})


	// ^8 PAGE TRANSITIONS
	/********************************************************************/

	// $(function(){
	// 	'use strict'
	// 	var $page = $('#main'),
	// 		options = {
	// 			debug: true,
	// 			prefetch: true,
	// 			cacheLength: 2,
	// 		onStart: {
	// 			duration: 250,
	// 			render: function ($container) {
	// 				$container.addClass('is-exiting')
	// 				smoothState.restartCSSAnimations()
	// 			}
	// 		},
	// 		onReady: {
	// 			duration: 0,
	// 			render: function ($container, $newContent) {
	// 				$container.removeClass('is-exiting')
	// 				$container.html($newContent)
	// 			}
	// 		}
	// 	},
	// 	smoothState = $page.smoothState(options).data('smoothState')
	// })

	/*----------------------------------------------------------------------*/	
}) // END doc ready