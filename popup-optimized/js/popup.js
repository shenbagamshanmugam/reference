$(document).ready(function(){
	$('.chatbox').hide();
	$('.chatbutton').click(function(){
		$('.chatbutton').hide();
		$('.chatbox').show();
	});
	$('.chatcross').click(function(){
		$('.chatbox').hide();
		$('.chatbutton').show();
	});
});