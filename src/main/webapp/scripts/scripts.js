// Init slick for overmenu & mediaqueries conditional

$(document).ready(function(){
    var width = $(window).width();
    if( width >= 768 ){
        // code for desktop view

    	//init Slick
  	  	$('.overmenu').slick({
		  infinite: false,
		  speed: 300,
		  variableWidth: true,
		  });

  	  	//overwrite styles Smartmenu + Slick
    	if ( $( 'ul.navbar-nav' ).hasClass( "overmenu" ) ) {
    	      $('.sm ul').addClass('smartmenu-slick');
    	};

    }
});

//Init slick for overmenu & mediaqueries conditional when window resize

$(window).resize(function() {
	 var width = $(window).width();
	    if( width >= 768 ){
	        // code for desktop view

	    	//init Slick
	  	  	$('.overmenu').slick({
			  infinite: false,
			  speed: 300,
			  variableWidth: true,
			  });

	  	  	//overwrite styles Smartmenu + Slick
	    	if ( $( 'ul.navbar-nav' ).hasClass( "overmenu" ) ) {
	    	      $('.sm ul').addClass('smartmenu-slick');
	    	};

	    }
});

$(window).resize();


//Add css rules or attributes by mediaqueries

//$(window).resize(function() {
//    var width = $(window).width();
//    if( width >= 959 ){
//        // code for desktop view
//    	$('body').css({
//			  //css properties
//			  "border": "10px solid orange",
//		  });
//    } else if( width >= 768 && width <= 959 ) {
//        // code for tablet view
//    } else if( width >= 480 && width <= 767 ) {
//        // code for mobile landscape
//    } else if( width <= 479 ) {
//        // code for mobile portrait
//    }
//});
//
//$(window).resize();

//test

//Adjusting Bootstrap NarBar Direction Based on Window Width

$(document).ready(function() {

    $('a.has-submenu').mouseover(function() { // a.dropdown-toggle without Smartmenu plugin

        var dropdownList = $('.dropdown-menu');
        var dropdownOffset = $(this).offset();
        var offsetLeft = dropdownOffset.left;
        var dropdownWidth = dropdownList.width();
        var docWidth = $('ul.navbar-nav').width(); // modified by DISID (before > window)

        var subDropdown = $('.dropdown-menu').eq(1);
        var subDropdownWidth = subDropdown.width();

        var isDropdownVisible = (offsetLeft + dropdownWidth <= docWidth);
        var isSubDropdownVisible = (offsetLeft + dropdownWidth + subDropdownWidth <= docWidth);

        if (!isDropdownVisible || !isSubDropdownVisible) {
            $('.dropdown-menu').addClass('pull-right');
        } else {
            $('.dropdown-menu').removeClass('pull-right');
        }
    });


});

