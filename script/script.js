var albName = {
				'album-day':['./image/01-days/',7,'Day'],
				'album-cats':['./image/02-cats/',6,'Cats'],
				'album-people':['./image/03-people/',7,'People'],
				'album-travel':['./image/04-travel/',8,'Travel'],
				'album-nature':['./image/05-nature/',8,'Nature']
			}
$(document).ready(function(){
	$('#carousel-album').hide();
	$('#nav-button>li a').click(navToScroll); /*導覽列active切換*/
	$('#Gallery').find('[id^=album]').click(function() {
		loadAlbum(albName[this.id])
	});

});

var loadAlbum = function(album){
	var url = album[0];
	var count = album[1];
	var type = album[2];
	$('#carousel-album').hide();
		$('#album-play').empty();
		$('#album-li').empty();
		for(var i=1; i<count; i++)
		{
			$('#album-li').append('<li id="li-item" data-target="#carousel-album" data-slide-to="'+(i-1)+'"></li>');
			$('#album-play').append('<div class="item">'+
						      '<img src="'+url+ i +'.jpg">'+
						    '</div>');
		}
		$('#album-li>#li-item:first-child').addClass('active');
		$('#album-play>.item:first-child').addClass('active');
		$('#album-name').html('<p>'+type+'</p>');
		$("#carousel-album").fadeIn(1500);
}

var navToScroll = function(){
		var $section = '#' + $(this).attr("class");
		var offset = $($section).offset();
		$('html, body').animate({scrollTop: offset.top}, '7500');
		$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");

}