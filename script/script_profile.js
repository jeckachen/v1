$(document).ready(function() {
    $( "#tabs" ).tabs({
    	event:"mouseover"
    });
    $(".fancybox").fancybox();
    $("#tabs-1").mCustomScrollbar({
		scrollButtons:{  
			enable: true  
		}
	});
	$("#tabs-2").mCustomScrollbar({
		scrollButtons:{  
			enable: true  
		}
	});
});
