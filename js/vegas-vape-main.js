
$(document).click(function(e) {
	if (!$(e.target).is('.navbar-nav')) {
    	$('.collapse').collapse('hide');	    
    }
});