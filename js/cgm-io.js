$(document).ready(function(){

	var random_num = Math.round(Math.random()*2)
	var background_colors = ['#FF490B', '#1485CC', '#FFBF0B']

	var current_color = background_colors[random_num]
	console.log(current_color);
	$('#wrapper a').css('color', current_color)
	$('.main h1').css('color', current_color);

	$(function() {
		$('#headline, #projects, #contact, #links').each(function(i){
			$(this).hide().delay(2000*i).fadeTo( 2000, 1.0 );	
		})
	})

})