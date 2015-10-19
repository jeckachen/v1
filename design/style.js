var albDst = new Array ("./image/01-days/","./image/02-cats/","./image/03-people/","./image/04-travel/","./image/05-nature/");
var albName = new Array ("#album-day","#album-cats","#album-people","#album-travel","#album-nature");

$(document).ready(function(){
	$('#carousel-album').hide();
	$('#nav-button>li a').click(function() {
		var $section = '#' + $(this).attr("class");
		var offset = $($section).offset();
		$('html, body').animate({scrollTop: offset.top}, '7500');
	});
});

$(document).on('click', '.album-cover .col-xs-2', function() {
	$(this).focus();
});
/*相簿部分--------------------------------------------------------------------------------------------------------------------------------*/
$(document).on('click', albName[0], function() {
	$('#carousel-album').hide();
	$('#album-play').empty();
	$('#album-li').empty();
	for(var i=1; i<6; i++)
	{
		$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
		$('#album-play').append('<div class="item">'+
					      '<img src="'+albDst[0]+ i +'.JPG">'+
					    '</div>');
	}
	$('#album-li>#li-item:first-child').addClass('active');
	$('#album-play>.item:first-child').addClass('active');
	$('#album-name').html('<p>Days</p>');
	$("#carousel-album").fadeIn(1500);
});

$(document).on('click', albName[1], function() {
	$('#carousel-album').hide();
	$('#album-play').empty();
	$('#album-li').empty();
	for(var i=1; i<6; i++)
	{
		$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
		$('#album-play').append('<div class="item">'+
					      '<img src="'+albDst[1]+ i +'.JPG">'+
					    '</div>');
	}
	$('#album-li>#li-item:first-child').addClass('active');
	$('#album-play>.item:first-child').addClass('active');
	$('#album-name').html('<p>Cats</p>');
	$("#carousel-album").fadeIn(1500);
});

$(document).on('click', albName[2], function() {
	$('#carousel-album').hide();
	$('#album-play').empty();
	$('#album-li').empty();
	for(var i=1; i<6; i++)
	{
		$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
		$('#album-play').append('<div class="item">'+
					      '<img src="'+albDst[2]+ i +'.JPG">'+
					    '</div>');
	}
	$('#album-li>#li-item:first-child').addClass('active');
	$('#album-play>.item:first-child').addClass('active');
	$('#album-name').html('<p>People</p>');
	$("#carousel-album").fadeIn(1500);
});

$(document).on('click', albName[3], function() {
	$('#carousel-album').hide();
	$('#album-play').empty();
	$('#album-li').empty();
	for(var i=1; i<5; i++)
	{
		$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
		$('#album-play').append('<div class="item">'+
					      '<img src="'+albDst[3]+ i +'.JPG">'+
					    '</div>');
	}
	$('#album-li>#li-item:first-child').addClass('active');
	$('#album-play>.item:first-child').addClass('active');
	$('#album-name').html('<p>Travel</p>');
	$("#carousel-album").fadeIn(1500);
});

$(document).on('click', albName[4], function() {
	$('#carousel-album').hide();
	$('#album-play').empty();
	$('#album-li').empty();
	for(var i=1; i<5; i++)
	{
		$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
		$('#album-play').append('<div class="item">'+
					      '<img src="'+albDst[4]+ i +'.JPG">'+
					    '</div>');
	}
	$('#album-li>#li-item:first-child').addClass('active');
	$('#album-play>.item:first-child').addClass('active');
	$('#album-name').html('<p>Travel</p>');
	$("#carousel-album").fadeIn(1500);
});
/*End相簿部分--------------------------------------------------------------------------------------------------------------------------------*/

/*連結部分--------------------------------------------------------------------------------------------------------------------------------*/
$(document).on('mouseover', '#btn-links div', function() {
});