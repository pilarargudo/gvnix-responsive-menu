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


//Adjusting Bootstrap NarBar Direction Based on Window Width

$(document).ready(function() {

    $('li.slick-slide > a.has-submenu').mouseover(function() { // a.dropdown-toggle without Smartmenu plugin

//    	$('ul.dropdown-menu.smartmenu-slick').css('border','1px solid red');

    	//$('ul.dropdown-menu.smartmenu-slick').addClass('pull-right');

//        var dropdownList = $('.dropdown-menu');
//        var dropdownOffset = $(this).offset();
//        var offsetLeft = dropdownOffset.left;
//        var dropdownWidth = dropdownList.width();
//        var docWidth = $('ul.navbar-nav').width(); // modified by DISID (before > window)
//
//        var subDropdown = $('.dropdown-menu').eq(1);
//        var subDropdownWidth = subDropdown.width();
//
//        var isDropdownVisible = (offsetLeft + dropdownWidth <= docWidth);
//        var isSubDropdownVisible = (offsetLeft + dropdownWidth + subDropdownWidth <= docWidth);
//
//        if (!isDropdownVisible || !isSubDropdownVisible) {
//            $('.dropdown-menu').addClass('pull-right');
//        } else {
//            $('.dropdown-menu').removeClass('pull-right');
//        }
    });


    //copied form jquery.smartmenu.js


});

