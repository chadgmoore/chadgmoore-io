$(document).ready(function(){

	var random_num = Math.round(Math.random()*2)
	var background_colors = ['#ff0000', '#1485CC']
	// var titles = ['Technical Producer', 'Front-end Developer', 'Co-founder of Rigging Dojo', 'I love working with creative teams on interactive projects.', ' ']

	current_color = background_colors[random_num]
	// $('#wrapper').css('background-color', current_color)
	// $('#headline').css('color', current_color);
	$('#wrapper a').css('color', current_color)
	$('.Demo h1').css('color', current_color);

	$(function() {
		$('#headline, #projects, #contact, #links').each(function(i){
			$(this).hide().delay(2000*i).fadeTo( 2000, 1.0 );	
		})
	})

})