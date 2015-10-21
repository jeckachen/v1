
$(document).ready(function(){
	var albDst = ['./image/01-days/','./image/02-cats/','./image/03-people/','./image/04-travel/','./image/05-nature/'];
	var albName = ['#album-day','#album-cats','#album-people','#album-travel','#album-nature'];
	$('#carousel-album').hide();
	$('#nav-button>li a').click(function() {
		var $section = '#' + $(this).attr("class");
		var offset = $($section).offset();
		$('html, body').animate({scrollTop: offset.top}, '7500');
		$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");
	});
	$('#alb-cover').click(function(){
	});
	$(albName[0]).click(function() {
		$('#carousel-album').hide();
		$('#album-play').empty();
		$('#album-li').empty();
		for(var i=1; i<7; i++)
		{
			$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
			$('#album-play').append('<div class="item">'+
						      '<img src="'+albDst[0]+ i +'.jpg">'+
						    '</div>');
		}
		$('#album-li>#li-item:first-child').addClass('active');
		$('#album-play>.item:first-child').addClass('active');
		$('#album-name').html('<p>Days</p>');
		$("#carousel-album").fadeIn(1500);
		});
	$(albName[1]).click(function() {
		$('#carousel-album').hide();
		$('#album-play').empty();
		$('#album-li').empty();
		for(var i=1; i<6; i++)
		{
			$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
			$('#album-play').append('<div class="item">'+
						      '<img src="'+albDst[1]+ i +'.jpg">'+
						    '</div>');
		}
		$('#album-li>#li-item:first-child').addClass('active');
		$('#album-play>.item:first-child').addClass('active');
		$('#album-name').html('<p>Cats</p>');
		$("#carousel-album").fadeIn(1500);
	});
	$(albName[2]).click(function() {
		$('#carousel-album').hide();
		$('#album-play').empty();
		$('#album-li').empty();
		for(var i=1; i<7; i++)
		{
			$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
			$('#album-play').append('<div class="item">'+
						      '<img src="'+albDst[2]+ i +'.jpg">'+
						    '</div>');
		}
		$('#album-li>#li-item:first-child').addClass('active');
		$('#album-play>.item:first-child').addClass('active');
		$('#album-name').html('<p>People</p>');
		$("#carousel-album").fadeIn(1500);
	});
	$(albName[3]).click(function() {
		$('#carousel-album').hide();
		$('#album-play').empty();
		$('#album-li').empty();
		for(var i=1; i<8; i++)
		{
			$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
			$('#album-play').append('<div class="item">'+
						      '<img src="'+albDst[3]+ i +'.jpg">'+
						    '</div>');
		}
		$('#album-li>#li-item:first-child').addClass('active');
		$('#album-play>.item:first-child').addClass('active');
		$('#album-name').html('<p>Travel</p>');
		$("#carousel-album").fadeIn(1500);
		});

	$(albName[4]).click(function() {
		$('#carousel-album').hide();
		$('#album-play').empty();
		$('#album-li').empty();
		for(var i=1; i<8; i++)
		{
			$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
			$('#album-play').append('<div class="item">'+
						      '<img src="'+albDst[4]+ i +'.jpg">'+
						    '</div>');
		}
		$('#album-li>#li-item:first-child').addClass('active');
		$('#album-play>.item:first-child').addClass('active');
		$('#album-name').html('<p>Travel</p>');
		$("#carousel-album").fadeIn(1500);
	});
});