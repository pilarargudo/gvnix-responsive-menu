// Init slick for overmenu & mediaqueries conditional

$(document).ready(function(){
    var width = $(window).width();
    if( width >= 959 ){
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

$(window).resize(function() {
        var width = $(window).width();
        
        
});

$(window).resize();

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
