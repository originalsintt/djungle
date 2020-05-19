
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);


     // -------   Active Mobile Menu-----//

    $(".menu-bar").on('click', function(e){
        e.preventDefault();
        $("nav").toggleClass('hide');
        $("span", this).toggleClass("lnr-menu lnr-cross");
        $(".main-menu").addClass('mobile-menu');
    });

    $('select').niceSelect();
    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });

    $('.active-bottle-carousel').owlCarousel({
        items:1,
        loop:true,
        nav: false,
        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true
    });

    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 170,
        preloader: false,
        fixedContentPos: false
    });


    $(document).ready(function() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    });
    // -------   Mail Send ajax   -----//

		$('#hotTopicButton1').on('click', function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic1').addClass('visible')
		})
		$('#hotTopicButton2').on('click', function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic2').addClass('visible')
		})
		$('#hotTopicButton3').on('click', function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic3').addClass('visible')
		})
		$('#hotTopicButton4').on('click', function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic4').addClass('visible')
		})
		$('#hotTopicButton5').on('click', function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic5').addClass('visible')
		})
		$('#hotTopicButton6').on('click', function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic6').addClass('visible')
		})


		$('#hotTopicButton1').hover(function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic1').addClass('visible')
		})
		$('#hotTopicButton2').hover( function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic2').addClass('visible')
		})
		$('#hotTopicButton3').hover( function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic3').addClass('visible')
		})
		$('#hotTopicButton4').hover( function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic4').addClass('visible')
		})
		$('#hotTopicButton5').hover( function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic5').addClass('visible')
		})
		$('#hotTopicButton6').hover( function(e){
			$('.hot-topic-content').removeClass('visible')
			$('#hotTopic6').addClass('visible')
		})

		// -------  -----//



 });
